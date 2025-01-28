export interface ITaxi {
    id: number;
    name: string;
    location: string;
    price: number;
  }

  
export interface TaxiFormData {
  id?: number;
  ownerName: string;
  address: string;
  mobileNumber: string;
  taxiNumber: string;
  brandName: string;
}
  