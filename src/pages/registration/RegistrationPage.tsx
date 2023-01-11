import "./style.css";
import React, { useState } from "react";
import { Container } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Registr, RegistrSuccess } from "container";
import { useAuthContext } from "context/AuthProvider";
import { useRegistrationMutation } from "hooks/mutation";

function RegistrationPage() {
  const [showSucces, setShowSuccess] = useState(true);
  const { connectWallet, isConnected, setMessage, signature }: any =
    useAuthContext();
  const useRegistration = useRegistrationMutation();

  const form = useForm({
    initialValues: { login: "", password: "", email: "" },
    validate: {
      login: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
    },
  });

  const RegisterFinc = (e: any) => {
    connectWallet();
    setMessage(e?.email);

    const data = {
      user: {
        username: e.login,
        email: e.email,
        password: e.password,
      },
      public_address: signature,
    };
    const registration = useRegistration.mutateAsync(data);
    registration
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <div className="registration">
        {showSucces ? (
          <Registr form={form} onSubmit={RegisterFinc} />
        ) : (
          <RegistrSuccess />
        )}
      </div>
    </Container>
  );
}

export default RegistrationPage;
