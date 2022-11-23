interface CarAddtionalTypes {
  name: string;
  amount: number;
}

interface CarInsuranceTypes {
  name: string;
  description: string;
}

interface CarAttributeTypes {
  fuelType: string;
  segment: string;
  brand: string;
  imageUrl: string;
  name: string;
}

export interface CarDetailTypes {
  id: number;
  amount: number;
  attribute: CarAttributeTypes;
  additionalProducts?: CarAddtionalTypes[];
  insurance: CarInsuranceTypes[];
  createdAt: string;
  startDate: string;
}

export interface CarListTypes {
  carsList: CarDetailTypes[];
  detailClick: (car: CarDetailTypes) => void;
}
