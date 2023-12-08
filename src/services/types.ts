export type UserDto = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  createdAccountTimestamp: Date;
  gender: string;
  age: number;
};

export type LoginUserDto = {
  email: string;
  password: string;
};

export type CreateUserDto = {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  email: string;
  bio?: string;
  address: string;
  city: string;
  occupation: string;
  phone: string;
  password: string;
  shouldHideEmail?: boolean;
  shouldHideAddress?: boolean;
  shouldHidePhone?: boolean;
};

export type AuthUser = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  createdAccountTimestamp: string;
  bio: string;
  dateOfBirth: string;
  address: string;
  city: string;
  occupation: string;
  phone: string;
  shouldHideEmail: boolean;
  shouldHideAddress: boolean;
  shouldHidePhone: boolean;
};

export type AuthResponseDto = {
  user: AuthUser;
  token: string;
};

export type NavbarItems = {
  value: string;
};

export type MyBusinessItems = {
  key: string;
  value: string;
};

export type MyBusiness = {
  title: string;
  submenuItems: MyBusinessItems[];
};
