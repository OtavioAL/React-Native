import { UserDTO } from "@dtos/UserDTO";
import { api } from "@services/api";

export async function getUser(): Promise<any> {
  const { data } = await api.get<UserDTO>("/users/me");

  return data;
}
