import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ProductPaymentMethod } from "@components/ProductPaymentMethod";
import { Image, Radio, RadioGroup, useToast } from "@gluestack-ui/themed";
import { RadioIcon } from "@gluestack-ui/themed";
import { RadioLabel } from "@gluestack-ui/themed";
import { CircleIcon } from "@gluestack-ui/themed";
import { RadioIndicator } from "@gluestack-ui/themed";
import {
  HStack,
  Text,
  VStack,
  Button as GluestackButton,
  Textarea,
  TextareaInput,
} from "@gluestack-ui/themed";
import { Plus } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { Controller, useForm, UseFormReturn } from "react-hook-form";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { ToastMessage } from "@components/ToastMessage";
import { IPropsImage } from "@components/interfaces";
import { api } from "@services/api";

interface IProps {
  listImages: IPropsImage[];
  setListImages: React.Dispatch<React.SetStateAction<IPropsImage[]>>;
  isAcceptExchange: boolean;
  setIsAcceptExchange: React.Dispatch<React.SetStateAction<boolean>>;
  paymentMethods: string[];
  setPaymentMethods: React.Dispatch<React.SetStateAction<string[]>>;
  isNew: boolean;
  setIsNew: React.Dispatch<React.SetStateAction<boolean>>;
  formMethods: UseFormReturn;
}

export function AdvertisementForm({
  listImages,
  setListImages,
  isAcceptExchange,
  setIsAcceptExchange,
  paymentMethods,
  setPaymentMethods,
  isNew,
  setIsNew,
  formMethods: {
    control,
    formState: { errors },
    watch,
  },
}: IProps) {
  const toast = useToast();

  const title = watch("title");
  const description = watch("description");
  const value = watch("value");

  const [toggleNew, setToogleNew] = useState<string>();

  async function handleUserPhotoSelect() {
    try {
      const photoSelected: any = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });

      if (photoSelected.canceled) {
        return;
      }

      if (photoSelected?.assets && photoSelected.assets[0]) {
        const photoUri = photoSelected.assets[0].uri;
        if (photoUri) {
          const photoInfo = (await FileSystem.getInfoAsync(photoUri)) as {
            size: number;
          };

          if (photoInfo.size && photoInfo.size / 1024 / 1024 > 5) {
            return toast.show({
              placement: "top",
              render: ({ id }) => (
                <ToastMessage
                  action="error"
                  id={id}
                  title="Imagem muito grande"
                  description="Escolha uma imagem com no máximo 5MB"
                  onClose={() => toast.close(id)}
                />
              ),
            });
          }

          const fileExtension = photoSelected?.assets[0]?.uri
            ?.split(".")
            ?.pop();
          const photoFile = {
            name: `${fileExtension}`.toLowerCase(),
            uri: photoSelected?.assets[0]?.uri,
            type: `${photoSelected?.assets[0]?.type}/${fileExtension}`,
          } as any;

          const userPhotoUploadForm = new FormData();
          userPhotoUploadForm.append("avatar", photoFile);
          setListImages((oldState) => [...oldState, photoFile]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setIsNew(toggleNew === "new");
  }, [toggleNew]);

  return (
    <VStack
      w={"$full"}
      bg={"$gray200"}
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      p={"$5"}
    >
      <VStack w={"$full"} gap={"$2"}>
        <Text fontFamily={"$heading"} fontSize={"$md"} color={"$gray700"}>
          Imagens
        </Text>

        <Text fontFamily={"$body"} fontSize={"$sm"} color={"$gray600"}>
          Escolha até 3 imagens para mostrar o quando o seu produto é incrível!
        </Text>

        <HStack w={"$full"} gap={"$2"}>
          {listImages?.map((image, index: number) => (
            <Image
              key={index}
              source={{
                uri:
                  image?.uri ?? `${api.defaults.baseURL}/images/${image?.path}`,
              }}
              alt="Imagem do produto"
              w="$24"
              h="$24"
              rounded="$md"
            />
          ))}

          {listImages?.length < 3 && (
            <GluestackButton
              w="$24"
              h="$24"
              bg="$gray300"
              rounded="$md"
              alignItems="center"
              justifyContent="center"
              onPress={handleUserPhotoSelect}
            >
              <Plus size={28} weight="bold" />
            </GluestackButton>
          )}
        </HStack>
      </VStack>

      <VStack w={"$full"} gap={"$2"} mt={"$5"}>
        <Text fontFamily={"$heading"} fontSize={"$md"} color={"$gray700"}>
          Sobre o produto
        </Text>

        <Controller
          control={control}
          name="title"
          rules={{ required: "Informe o titulo do anúncio" }}
          render={({ field: { onChange } }) => (
            <Input
              value={title}
              placeholder="Título do anúncio"
              autoCapitalize="words"
              onChangeText={onChange}
              // errorMessage={errors.name?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="description"
          rules={{ required: "Informe uma descrção para o anúncio" }}
          render={({ field: { onChange } }) => (
            <Textarea
              size="md"
              isReadOnly={false}
              isInvalid={false}
              isDisabled={false}
              bg="$gray100"
              borderWidth={"$0"}
              borderRadius={"$md"}
            >
              <TextareaInput
                value={description}
                placeholder="Descrição do produto"
                onChangeText={onChange}
              />
            </Textarea>
          )}
        />
      </VStack>

      <HStack w={"$full"} mt={"$5"} gap={"$2"}>
        <RadioGroup
          gap={"$4"}
          flexDirection="row"
          value={toggleNew}
          onChange={setToogleNew}
        >
          <Radio
            value="new"
            size="md"
            isInvalid={false}
            isDisabled={false}
            gap={"$2"}
            onChange={() => setIsNew(true)}
          >
            <RadioIndicator>
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>Produto novo</RadioLabel>
          </Radio>
          <Radio
            value="used"
            size="md"
            isInvalid={false}
            isDisabled={false}
            gap={"$2"}
            onChange={() => setIsNew(false)}
          >
            <RadioIndicator>
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>Produto usado</RadioLabel>
          </Radio>
        </RadioGroup>
      </HStack>

      <VStack w={"$full"} gap={"$2"} mt={"$5"}>
        <Text fontFamily={"$heading"} fontSize={"$md"} color={"$gray700"}>
          Venda
        </Text>

        <Controller
          control={control}
          name="value"
          rules={{ required: "Informe o valor" }}
          render={({ field: { onChange } }) => (
            <Input
              value={value}
              keyboardType="numeric"
              placeholder="Valor do produto"
              autoCapitalize="words"
              onChangeText={onChange}
              // errorMessage={errors.name?.message}
            />
          )}
        />
      </VStack>

      <ProductPaymentMethod
        onChangeSwitch={() => setIsAcceptExchange((oldState) => !oldState)}
        valueSwitch={isAcceptExchange}
        setValuesCheckbox={setPaymentMethods}
        valuesCheckbox={paymentMethods}
      />
    </VStack>
  );
}
