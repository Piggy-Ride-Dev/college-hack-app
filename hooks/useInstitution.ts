import { getAllInstitutionsClient } from "@/api/client";
import { useQuery } from "react-query";

export const useGetAllInstitutions = () => {
  return useQuery('getAllInstitutions', async () => await getAllInstitutionsClient(), {
    refetchOnWindowFocus: false,
  });
};