import { useMutation } from "react-query";
import { requestWithoutAuth } from "../../services/api";

export const useRegistrationMutation = () => {
  return useMutation(( data ): any =>
    requestWithoutAuth.post(`/metamask/`, data)
  );
};
