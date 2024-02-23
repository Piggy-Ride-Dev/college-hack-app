import { api } from ".";

export const getUserToken = async () => {
  return api.get('/auth/token');
};