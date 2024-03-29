import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosStatic } from 'axios';
import { IOptions, IClient, Response } from '@/app/data/clients/Client';
import { ApiMethods } from '@/app/data/clients/Client';

export default class AxiosClient implements IClient {
  protected instance: AxiosInstance;
  protected authorizationToken: string | undefined

  constructor(config: AxiosRequestConfig = {}, axiosInstance: AxiosStatic = axios) {
    this.instance = axiosInstance.create(config);
  }

  setAuthorizationToken(token: string) {
    this.authorizationToken = token;
  }

  getInterceptors() {
    return this.instance.interceptors;
  }

  async post<T = never, R = Response<T>>(options: IOptions): Promise<R> {
    return this.submit('post', options)
  }

  async put<T = never, R = Response<T>>(options: IOptions): Promise<R> {
    return this.submit('put', options)
    }

  async patch<T = never, R = Response<T>>(options: IOptions): Promise<R> {
    return this.submit('patch', options)
  }

  async get<T = never, R = Response<T>>(options: IOptions): Promise<R> {
    return this.submit('get', options)
  }

  async delete(options: IOptions): Promise<unknown> {
    return this.submit('delete', options)
  }

  async submit<T = never, R = Response<T>>(method: ApiMethods, options: IOptions): Promise<R> {
    const { body, endpoint = '', headers = {}, params } = options;

    if (this.authorizationToken) {
      headers.Authorization = this.authorizationToken
    }

    if (['post', 'put', 'patch'].includes(method)) {
      return this.instance[method](endpoint, body, { params, headers })
    }
    
    return this.instance[method](
      endpoint,
      {
        data: method === 'get' ? undefined : body,
        params,
        headers
      }
    )
    .then(({ data }) => data)
    .catch((e: AxiosError) => {
      console.error(e);
      throw e;
    });
  }
}
