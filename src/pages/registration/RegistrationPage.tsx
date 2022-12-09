import "./style.css";
import React, { useState } from "react";
import { Container } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Registr, RegistrSuccess } from "container";

function RegistrationPage() {
  const [showSucces, setShowSuccess] = useState(true);
  const form = useForm({
    initialValues: { login: "", password: "", email: "" },
    validate: {
      login: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
    },
  });

  return (
    <Container>
      <div className="registration">
        {showSucces ? <Registr form={form} /> : <RegistrSuccess />}
      </div>
    </Container>
  );
}

export default RegistrationPage;
