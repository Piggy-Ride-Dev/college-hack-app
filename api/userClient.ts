import { api } from ".";

export const patchUserClient = async (data: any) => {
  return await api.patch("/user", { ...data });
};
