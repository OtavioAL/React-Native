import { Input } from "@components/Input";
import { VStack } from "@gluestack-ui/themed";
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
    <VStack gap={10}>
      <Controller
        control={control}
        name="name"
        rules={{ required: "Informe o nome" }}
        render={({ field: { onChange } }) => (
          <Input
            placeholder="Nome"
            autoCapitalize="words"
            onChangeText={onChange}
            // errorMessage={errors.name?.message}
          />
        )}
      />
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
        name="phone"
        rules={{ required: "Informe o telefone" }}
        render={({ field: { onChange } }) => (
          <Input
            placeholder="Telefone"
            keyboardType="phone-pad"
            onChangeText={onChange}
            // errorMessage={errors.phone?.message}
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
      <Controller
        control={control}
        name="passwordConfirm"
        rules={{ required: "Confirme a senha" }}
        render={({ field: { onChange } }) => (
          <Input
            placeholder="Confirme a senha"
            secureTextEntry
            onChangeText={onChange}
            // errorMessage={errors.passwordConfirm?.message}
          />
        )}
      />
    </VStack>
  );
};
