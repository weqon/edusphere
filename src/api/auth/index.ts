import type { User } from "src/types/user";
import { createResourceId } from "src/utils/create-resource-id";
import { JWT_EXPIRES_IN, JWT_SECRET, sign } from "src/utils/jwt";
import { wait } from "src/utils/wait";

import axios from "axios";
import { API_ROUTES } from "../api-routes";
import { users } from "./data";

const STORAGE_KEY = "users";

// NOTE: We use sessionStorage since memory storage is lost after page reload.
//  This should be replaced with a server call that returns DB persisted data.

const getPersistedUsers = (): User[] => {
  try {
    const data = sessionStorage.getItem(STORAGE_KEY);

    if (!data) {
      return [];
    }

    return JSON.parse(data) as User[];
  } catch (err) {
    console.error(err);
    return [];
  }
};

const persistUser = (user: User): void => {
  try {
    const users = getPersistedUsers();
    const data = JSON.stringify([...users, user]);
    sessionStorage.setItem(STORAGE_KEY, data);
  } catch (err) {
    console.error(err);
  }
};

type SignInRequest = {
  email: string;
  password: string;
};

type SignInResponse = Promise<{
  accessToken: string;
}>;

type SignUpRequest = {
  email: string;
  name: string;
  password: string;
};

type SignUpResponse = Promise<{
  accessToken: string;
}>;

type MeRequest = {
  accessToken: string;
};

type MeResponse = Promise<User>;

class AuthApi {
  async signIn(request: SignInRequest): SignInResponse {
    const { email, password } = request;

    return new Promise((resolve, reject) => {
      try {
        // call login route
        axios
          .post(
            process.env.NEXT_PUBLIC_API_HOST + API_ROUTES.LOGIN,
            { username: email, password },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            resolve({ accessToken: response.data.token });
          })
          .catch((err) => {
            console.error(err);
            reject(new Error("Invalid email or password"));
          });
      } catch (err) {
        console.error("[Auth Api]: ", err);
        reject(new Error("Internal server error"));
      }
    });
  }

  async signUp(request: SignUpRequest): SignUpResponse {
    const { email, name, password } = request;

    await wait(1000);

    return new Promise((resolve, reject) => {
      try {
        // Merge static users (data file) with persisted users (browser storage)
        const mergedUsers = [...users, ...getPersistedUsers()];

        // Check if a user already exists
        let user = mergedUsers.find((user) => user.email === email);

        if (user) {
          reject(new Error("User already exists"));
          return;
        }

        user = {
          id: createResourceId(),
          avatar: undefined,
          email,
          name,
          password,
          plan: "Standard",
        };

        persistUser(user);

        const accessToken = sign({ userId: user.id }, JWT_SECRET, {
          expiresIn: JWT_EXPIRES_IN,
        });

        resolve({ accessToken });
      } catch (err) {
        console.error("[Auth Api]: ", err);
        reject(new Error("Internal server error"));
      }
    });
  }

  me(request: MeRequest): MeResponse {
    const { accessToken } = request;

    return new Promise((resolve, reject) => {
      try {
        const user = axios
          .get(process.env.NEXT_PUBLIC_API_HOST + API_ROUTES.ME, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then((response) => {
            resolve({
              id: response?.data?.id,
              avatar: null,
              email: response?.data?.email,
              name: response?.data?.name,
              plan: "Standard",
            });
            resolve(response.data);
          })
          .catch((err) => {
            console.error(err);
            reject(new Error("Invalid authorization token"));
          });
      } catch (err) {
        console.error("[Auth Api]: ", err);
        reject(new Error("Internal server error"));
      }
    });
  }

  signOut(request: MeRequest): Promise<boolean> {
    const { accessToken } = request;
    return new Promise((resolve, reject) => {
      try {
        axios
          .post(process.env.NEXT_PUBLIC_API_HOST + API_ROUTES.LOGOUT, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then((response) => {
            resolve(true);
          })
          .catch((err) => {
            console.error(err);
            reject(new Error("Invalid authorization token"));
          });
      } catch (err) {
        console.error("[Auth Api]: ", err);
        reject(new Error("Internal server error"));
      }
    });
  }
}

export const authApi = new AuthApi();
