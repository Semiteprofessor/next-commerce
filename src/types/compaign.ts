export interface Compaign {
  _id: string;
  name: string;
  slug: string;
  startDate?: string;
  endDate?: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
  [key: string]: any;
}
