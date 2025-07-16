export type Order = {
  id: number;
  user: {
    id: number;
    name: string;
  };
  totalPrice: number;
  orderDate: string;        
  totalQuantity: number;
  status:string;
}