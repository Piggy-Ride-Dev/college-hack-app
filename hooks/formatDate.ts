import { format } from "date-fns";

export const formatDate = (value: string) => {
  return format(new Date(value), "yy/MM/dd");
};

export const formatDateAsYear = (value: string) => {
  return format(new Date(value), "yyyy");
};
