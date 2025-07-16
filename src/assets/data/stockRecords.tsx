export type StockRecord = {
  product: {
    name: string;
    image: string;
  };
  createAt: string;
  quantity: number;
  price: number;
};



export type RemainRecord = {
  id: string;
  name: string;
  image: string;
  stock: number;
};
