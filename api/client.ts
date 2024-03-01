import { api } from ".";

export const getAllInstitutionsClient = async () => {
  return (await api.get('/institution')).data;
}