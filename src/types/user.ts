export interface User {
  id: string;
  avatar?: string | null;
  email?: string;
  name?: string;

  [key: string]: any;
}
