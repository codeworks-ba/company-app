import { atom } from 'recoil';
import { Status } from '../../routes';

export const logInState = atom<Status | null | undefined>({
  default: null,
  key: 'logInState'
});
