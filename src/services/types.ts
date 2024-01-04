import { number } from 'yup';

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
  bio: string;
  address: string;
  city: string;
  occupation: string;
  phone: string;
  password: string;
  shouldHideEmail?: boolean;
  shouldHideAddress?: boolean;
  shouldHidePhone?: boolean;
  profilePicture: string;
  headerImage: string;
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
  profilePicture: string;
  headerImage: string;
};

export type CreatePostDto = {
  title: string;
  text: string;
  category: string;
  imageUrl: string;
};

export type CreateCompanyDto = {
  name: string;
  category: string;
  tags: string;
  program: string;
  year: string;
  about: string;
  headerImageUrl: string;
  logoImageUrl: string;
  address: string;
  city: string;
  zip: string;
  country: string;
  phone: string;
  email: string;
  web: string;
  facebook?: string | undefined;
  instagram?: string | undefined;
  twitter?: string | undefined;
  linkedIn?: string | undefined;
  otherSiteLink?: string | undefined;
  monWorkTime: string;
  tueWorkTime: string;
  wedWorkTime: string;
  thuWorkTime: string;
  friWorkTime: string;
  // createdAt: string;
  // status: string;
  services: {
    name: string;
    imageUrl: string;
  }[];
};

export type CompanyDto = {
  _id: string;
  name: string;
  category: string;
  tags: string[];
  program: string;
  year: number;
  about: string;
  headerImageUrl: string;
  logoImageUrl: string;
  address: string;
  city: string;
  zip: string;
  country: string;
  phone: string;
  email: string;
  web: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedIn?: string;
  otherSiteLink?: string;
  monWorkTime: string;
  tueWorkTime: string;
  wedWorkTime: string;
  thuWorkTime: string;
  friWorkTime: string;
  userId: string;
  createdAt: string;
  status: string;
  services: {
    name: string;
    imageUrl: string;
  }[];
};

export type PaginatedCompanyDto = {
  count: number;
  page?: number;
  data: CompanyDto[];
};

export type NewsDto = {
  _id: string;
  title: string;
  text: string;
  category: string;
  imageUrl: string;
  userId: string;
  createdAt: string;
};

export type PaginatedNewsDto = {
  count: number;
  page?: number;
  data: NewsDto[];
};

export type AuthResponseDto = {
  user: AuthUser;
  token: string;
};

export type Search = {
  input?: string | undefined;
};

export type SearchWithFilters = {
  input?: string | undefined;
  category?: string | undefined;
  service?: string | undefined;
  tag?: string | undefined;
  city?: string | undefined;
  program?: string | undefined;
};

export type Filters = {
  categories: string[];
  tags: string[];
  programs: string[];
  cities: string[];
};

export type Service = {
  services: { service: string; image?: string }[];
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
