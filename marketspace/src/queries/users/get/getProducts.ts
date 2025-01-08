import { ProductsDTO } from "@dtos/ProductsDTO";
import { UserDTO } from "@dtos/UserDTO";
import { api } from "@services/api";

export async function getProducts(): Promise<any> {
  const { data } = await api.get<ProductsDTO>("/users/products");

  return data;
}
