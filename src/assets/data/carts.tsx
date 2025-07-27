export type Cart = {
  id: number;
  price: number;
  quantity: number;
  user: {
    id: number;
    fullName: string;
    email: string;
  } | null;
};