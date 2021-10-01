export interface UserModel {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}

export class ListUserModel {
  data: UserModel[] = [];
  total: number | undefined;
  page: number | undefined;
  limit: number | undefined;
}

export interface LocationModel {
  street: string;
  city: string;
  state: string;
  country: string;
  timezone: string;
}

export type FullProfileModel = {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  dateOfBirth: string;
  registerDate: string;
  phone: string;
  picture: string;
  location: LocationModel;
};
