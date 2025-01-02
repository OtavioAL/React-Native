/**
 * A form component used for signing in.
 * This component renders the input fields and handles user input for authentication.
 */

import { Input } from "@components/Input";
import { Controller, UseFormReturn } from "react-hook-form";

interface FormProps {
  formMethods: UseFormReturn;
}

export const Form = ({
  formMethods: {
    control,
    formState: { errors },
  },
}: FormProps) => {
  return (
    <>
      <Controller
        control={control}
        name="email"
        rules={{ required: "Informe o e-mail" }}
        render={({ field: { onChange } }) => (
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={onChange}
            // errorMessage={errors.email?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{ required: "Informe a senha" }}
        render={({ field: { onChange } }) => (
          <Input
            placeholder="Senha"
            secureTextEntry
            onChangeText={onChange}
            // errorMessage={errors.password?.message}
          />
        )}
      />
    </>
  );
};
2;
