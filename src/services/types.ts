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
  test: string;
  test2: string;
  test3: Date;
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
};
