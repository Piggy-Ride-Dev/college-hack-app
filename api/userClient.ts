import { api } from ".";

export interface userData {
  college: string;
  program: string;
}

export const patchUserClient = async (data: userData) => {
  return await api.patch("/user", { user: { ...data } });
};
