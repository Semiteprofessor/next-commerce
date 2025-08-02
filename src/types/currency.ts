export interface Currency {
  _id: string;
  name: string;
  symbol: string;
  rate: number;
  status?: string;
  [key: string]: any;
}
