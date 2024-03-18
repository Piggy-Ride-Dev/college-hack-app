import { getAllInstitutionsClient } from "@/api/institutionsClient";
import { useQuery } from "react-query";

export const useGetAllInstitutions = () => {
  return useQuery(
    "getAllInstitutions",
    async () => await getAllInstitutionsClient(),
    {
      refetchOnWindowFocus: false,
    },
  );
};
