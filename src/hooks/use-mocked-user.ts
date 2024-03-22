import type { User } from "src/types/user";
import { useAuth } from "./use-auth";

export const useMockedUser = (): User => {
  // To get the user from the authContext, you can use
  const { user } = useAuth();
  if (user) return user;
};
