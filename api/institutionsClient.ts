import { api } from ".";

export const getAllInstitutionsClient = async () => {
  return (await api.get("/institution")).data;
};

export const createTerm = async () => {
  return (await api.post("/semesters")).data;
};
