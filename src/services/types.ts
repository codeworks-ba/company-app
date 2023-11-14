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
};
