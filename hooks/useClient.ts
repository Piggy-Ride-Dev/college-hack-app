import { patchUserClient } from "@/api/userClient";
import { useMutation } from "react-query";

export const patchClientMutation = useMutation(
  async (data: any) => patchUserClient(data),
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
