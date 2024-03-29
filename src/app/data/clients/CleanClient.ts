import { IClient, IOptions, Response } from "./Client";

export default class CleanClient implements IClient {
  async post<T = never, R = Response<T>>(options: IOptions): Promise<R> {
    return this.submit('post', options.endpoint, options.headers, options.body)
  }

  async put<T = never, R = Response<T>>(options: IOptions): Promise<R> {
    return this.submit('put', options.endpoint, options.headers, options.body)
    }

  async patch<T = never, R = Response<T>>(options: IOptions): Promise<R> {
    return this.submit('patch', options.endpoint, options.headers, options.body)
  }

  async get<T = never, R = Response<T>>(options: IOptions): Promise<R> {
    return this.submit('get', options.endpoint, options.headers, options.body)
  }

  async delete(options: IOptions): Promise<unknown> {
    return this.submit('delete', options.endpoint, options.headers, options.body)
  }

  async submit<T = never, R = Response<T>>(method: string, url: string, headers = {}, body = null): Promise<R> {
    return await new Promise(function (resolve, reject) {
      const xhr = new XMLHttpRequest();
      // xhr.timeout = 1500; // time in milliseconds
      xhr.open(method, url);
      Object.entries(headers).map(([key, value]) => xhr.setRequestHeader(key, value))
      xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
          try {
            resolve(JSON.parse(xhr.response));
          } catch (error) {
            resolve(xhr.response);
          }
        } else {
          reject({
            status: this.status,
            statusText: xhr.statusText
          });
        }
      };
      // xhr.ontimeout = (e) => { xhr.onload(); };
      // xhr.onreadystatechange = function () { if (xhr.readyState == 4) { alert("ready state = 4"); } };
      xhr.onerror = function () {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      };
      xhr.send(body);
    });
  }
}
