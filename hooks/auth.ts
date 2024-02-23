import { api } from "@/api";
import { getUserToken } from "@/api/client";

export const useAuth = () => {
    const getToken = async ()  => {
        try {
            const token = await getUserToken();
            console.log(token);
        } catch (error) {
            console.log(error);
        }
    }
}