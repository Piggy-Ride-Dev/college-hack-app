import { TermProps } from "@/app/create-semester/page";
import { api } from ".";

export const createTerm = async (data: TermProps) => {
  return await api.post("/semesters", { ...data });
};
