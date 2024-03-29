// Modification of AxiosResponse
export interface Response<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: object;
  config: object;
  request?: any;
}

export interface Body<T> {
  body: T
}

export interface Params<T> {
  params: T
}

export interface IOptions {
  endpoint: string,
  params?: Record<string, any>,
  body?: any,
  headers?: Record<string, any>
}

export interface IClient {
  get<T = never, R = Response<T>>({ endpoint, params, body }: IOptions): Promise<R>;
  post<T = never, R = Response<T>>({ endpoint, params, body }: IOptions): Promise<R>;
  put<T = never, R = Response<T>>({ endpoint, params, body }: IOptions): Promise<R>;
  patch<T = never, R = Response<T>>(params: IOptions): Promise<R>;
  delete({ endpoint, params, body }: IOptions): Promise<any>;
}

export type ApiMethods = 'get' | 'post' | 'put' | 'patch' | 'delete'
