import { Button } from "@components/Button";
import { ToastMessage } from "@components/ToastMessage";
import { ProductsDTO } from "@dtos/ProductsDTO";
import { useToast, VStack } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { api } from "@services/api";
import { AppError } from "@utils/AppError";
import { Dispatch, SetStateAction, useState } from "react";

interface IProps {
  id: string;
  product?: ProductsDTO;
  setProduct: Dispatch<SetStateAction<ProductsDTO | undefined>>;
}
export const Footer = ({ id, product, setProduct }: IProps) => {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const toast = useToast();
  const [isChangingVisibilityLoading, setIsChangingVisibilityLoading] =
    useState<boolean>(false);

  const [isLoadingDeleting, setIsDeletingLoading] = useState<boolean>(false);

  const handleChangeAdVisibility = async () => {
    if (!product) return;
    try {
      setIsChangingVisibilityLoading(true);
      const data = await api.patch(`products/${id}`, {
        is_active: !product.is_active,
      });

      if (product) {
        setProduct((state) => {
          return {
            ...state,
            is_active: state ? !state.is_active : false,
          };
        });
      }
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível deletar. Tente Novamente!";

      toast.show({
        placement: "top",
        render: ({ id }) => (
          <ToastMessage
            action="error"
            id={id}
            title={title}
            onClose={() => toast.close(id)}
          />
        ),
      });
    } finally {
      setIsChangingVisibilityLoading(false);
    }
  };

  const handleDeleteAd = async () => {
    try {
      setIsDeletingLoading(true);
      await api.delete(`products/${id}`);

      navigation.navigate("myads");

      toast.show({
        placement: "top",
        render: ({ id }) => (
          <ToastMessage
            action="success"
            id={id}
            title={"Anuncio deletado com sucesso!"}
            onClose={() => toast.close(id)}
          />
        ),
      });
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível deletar. Tente Novamente!";

      toast.show({
        placement: "top",
        render: ({ id }) => (
          <ToastMessage
            action="error"
            id={id}
            title={title}
            onClose={() => toast.close(id)}
          />
        ),
      });
    }
  };

  return (
    <VStack
      w={"$full"}
      p={"$5"}
      gap={"$2"}
      alignItems="center"
      justifyContent="center"
      bg="$gray100"
    >
      <Button
        title={product?.is_active ? "Desativar anúncio" : "Reativar anúncio"}
        onPress={handleChangeAdVisibility}
        type={product?.is_active ? "black" : "primary"}
        w={"$full"}
        isLoading={isChangingVisibilityLoading}
      />
      <Button
        title="Excluir anúncio"
        onPress={handleDeleteAd}
        type="secondary"
        w={"$full"}
        isLoading={isLoadingDeleting}
      />
    </VStack>
  );
};
