import { getAllInstitutionsClient, createTerm } from "@/api/institutionsClient";
import { useQuery, useMutation } from "react-query";

export const useGetAllInstitutions = () => {
  return useQuery(
    "getAllInstitutions",
    async () => await getAllInstitutionsClient(),
    {
      refetchOnWindowFocus: false,
    },
  );
};

export const createTermMutation = useMutation(
  async (data: any) => createTerm(data),
  {
    onSuccess: () => {
      console.log("Sucesso!");
    },
    onError: (error: any) => {
      console.log(
        `Um erro aconteceu. Por favor, tente novamente. Erro: ${error.response.data.message}`,
      );
    },
  },
);
