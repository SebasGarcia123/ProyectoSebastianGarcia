
export interface Building {
  _id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  isActive: boolean;
}

export interface Space {
  _id: string;
  name: string;
  buildingId: string;
}

export type spaceType = 'floor' | 'office' | 'desk'

export interface Reservation {
  _id: string;
  userId: string;
  dateFrom: string;
  dateTo: string;
  spaceId: string;
  totalPrice: number;
  isActive: boolean;
  rentTipe: RentType;
}

export type RentType = 'day' | 'week' | 'month' | 'year';

export type ValidationError = {
    location: string
    msg: string
    path: string
    type: string
    value: string
  }

  export type ErrorMessages = {
  user?: string
  password?: string
  email?: string
  firstName?: string
  lastName?: string
  phone?: string
  document?: string
  role?: string
}