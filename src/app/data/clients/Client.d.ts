// Modification of AxiosResponse
export interface Response<T = never> {
  data: T;
  status?: number;
  statusText?: string;
  headers?: object;
  config?: object;
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
  get<T = never>({ endpoint, params, body }: IOptions): Promise<Response<T>>;
  post<T = never>({ endpoint, params, body }: IOptions): Promise<Response<T>>;
  put<T = never>({ endpoint, params, body }: IOptions): Promise<Response<T>>;
  patch<T = never>(params: IOptions): Promise<Response<T>>;
  delete({ endpoint, params, body }: IOptions): Promise<any>;
}

export type ApiMethods = 'get' | 'post' | 'put' | 'patch' | 'delete'
