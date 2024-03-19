import { getSemesterDataById, getSemesterData } from "@/api/semesterClient";
import { useQuery } from "react-query";

export const useGetAllSemesters = () => {
  return useQuery("getAllSemesters", async () => await getSemesterData(), {
    refetchOnWindowFocus: false,
  });
};

export const useGetSemesterDataById = (id: string) => {
  return useQuery(
    "getSemesterDataById",
    async () => await getSemesterDataById(id),
    {
      refetchOnWindowFocus: false,
    },
  );
};
