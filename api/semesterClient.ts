import { APIResponse, api } from ".";

export type Semester = {
  courses: string[];
  endDate: string;
  season: string;
  startDate: string;
  userID: string;
  __v: number;
  _id: string;
};

type SemesterResponse = APIResponse<Semester>;

export const createSemesterData = async ({ season, startDate }: any) => {
  return (await api.post<SemesterResponse>("/semester", { season, startDate }))
    .data;
};

export const uploadSemesterDocs = async ({ id, formData }: any) => {
  return await api.post(`/semester/${id}/upload-files`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getSemesterData = async () => {
  return (await api.get("/semester")).data;
};

export const getSemesterDataById = async (id: string) => {
  return (await api.get(`/semester/${id}`)).data;
};
