import { createTerm } from "@/api/termClient";
import { TermProps } from "@/app/create-semester/page";
import { useMutation } from "react-query";

export const createTermMutation = useMutation(
  async (data: TermProps) => createTerm(data),
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
