import { APIResponse, api } from ".";

type Semester = {
  courses: any[];
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
