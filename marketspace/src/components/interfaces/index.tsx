export interface IPropsImage {
  uri: string;
  name: string;
  type: string;
  path?: string;
}

export type RouteParamsAdPreview = {
  title: string;
  description: string;
  value: string;
  listImages: IPropsImage[];
  paymentMethods: string[];
  isNew: boolean;
  isAcceptExchange: boolean;
  nameUser?: string;
  imageUser?: string;
};

export type PaymentMethods =
  | "boleto"
  | "pix"
  | "cartao"
  | "deposito"
  | "dinheiro";
