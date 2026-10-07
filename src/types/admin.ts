export type AdminRole = "full" | "register" | "viewer";

export type Admin = {
  id: string;
  name: string;
  email: string;
  role: AdminRole;
};
