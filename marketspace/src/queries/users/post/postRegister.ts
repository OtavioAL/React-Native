import { api } from "@services/api";

export type UserRegister = {
  avatar: any;
  name: string;
  email: string;
  password: string;
  tel: string;
};

export async function postRegister({
  avatar,
  name,
  email,
  password,
  tel,
}: UserRegister) {
  const { data } = await api.post(
    "/users",
    {
      avatar,
      name,
      email,
      password,
      tel,
    },
    {
      headers: {
        // "Content-Type": "application/json",
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return data;
}
