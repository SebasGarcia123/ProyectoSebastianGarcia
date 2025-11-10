
export interface Building {
  _id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  isActive: boolean;
}

export interface IBuildingBySpace {
  _id: string;
  name: string;
}

export interface Reservation {
  _id: string;
  userId: string;
  dateFrom: string;
  dateTo: string;
  spaceId: string | {
    _id: string;
    spaceType: string;
    building: Building | string;
  }
  totalPrice: number;
  isActive: boolean;
  rentTipe: RentType;
}

export type RentType = 'Dia' | 'Semana' | 'Mes' | 'Año';

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

export interface ISpace {
  _id: string
  building: IBuildingBySpace | string
  pictureUrl: string
  spaceType: string
  description: string
  capacity: number
  pricePerDay: number
  isActive: boolean
}

export type spaceType = 'floor' | 'office' | 'desk'