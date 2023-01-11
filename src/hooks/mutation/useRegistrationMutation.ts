import { useMutation } from "react-query";
import { requestWithoutAuth } from "../../services/api";

type regTyp = {
  user: {
    username: string;
    email: string;
    password: string;
  };
  public_address: any;
};

export const useRegistrationMutation = () => {
  return useMutation((data: regTyp) =>
    requestWithoutAuth.post(`/metamask/`, data)
  );
};
