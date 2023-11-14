import { atom } from 'recoil';
import { UserDto } from '../../services/types';

export const userState = atom<UserDto | null | undefined>({
  default: null,
  key: 'userState'
});
