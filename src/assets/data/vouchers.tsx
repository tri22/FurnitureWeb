export type Voucher = {
    id: number;
    title: string;
    description: string;
    code: string;
    type: string;
    expireDate: Date;
    minValue: number;
    quantity: number;
    discount: number;

}