import Axios, { AxiosRequestConfig, AxiosPromise, AxiosInstance } from 'axios';
import { TOKEN } from './token';
import { config } from '../config/config';

class ApiFactory {
  private axios: AxiosInstance;

  private token?: string;

  constructor() {
    this.token = TOKEN.get();
    this.axios = Axios.create({
      baseURL: config.API_URL ?? 'http://localhost:3000/',
      headers: {
        authorization: 'Bearer ' + this.token
      }
    });
  }

  public setToken(token: string) {
    this.token = token;
    this.axios.defaults.headers.common = {
      authorization: 'Bearer ' + token
    };
    TOKEN.set(token);
  }

  public axiosFetch<T, D>(
    request: AxiosRequestConfig<D | null | undefined>
  ): AxiosPromise<T> {
    const response = this.axios({
      ...request,
      headers: {
        ...this.axios.defaults.headers.common,
        ...request.headers
      }
    });
    return response;
  }
}

export const api = new ApiFactory();
