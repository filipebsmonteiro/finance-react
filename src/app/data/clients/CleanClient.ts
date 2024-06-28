import { IClient, IOptions, Response } from "./Client";

export default class CleanClient implements IClient {
  async post<T = never>(options: IOptions): Promise<Response<T>> {
    return this.submit('post', options.endpoint, options.headers, options.body)
  }

  async put<T = never>(options: IOptions): Promise<Response<T>> {
    return this.submit('put', options.endpoint, options.headers, options.body)
    }

  async patch<T = never>(options: IOptions): Promise<Response<T>> {
    return this.submit('patch', options.endpoint, options.headers, options.body)
  }

  async get<T = never>(options: IOptions): Promise<Response<T>> {
    return this.submit('get', options.endpoint, options.headers, options.body)
  }

  async delete(options: IOptions): Promise<unknown> {
    return this.submit('delete', options.endpoint, options.headers, options.body)
  }

  async submit<T = never>(method: string, url: string, headers = {}, body = null): Promise<Response<T>> {
    return await new Promise(function (resolve, reject) {
      const xhr = new XMLHttpRequest();
      // xhr.timeout = 1500; // time in milliseconds
      xhr.open(method, url);
      Object.entries(headers as Record<string, string>)
        .map(([key, value]) => xhr.setRequestHeader(key, value))
      xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
          let data = xhr.response
          try {
            data = JSON.parse(data)
          } catch (error) {
            data = xhr.response
          }

          // resolve({})
          resolve({
            data,
            status: this.status,
            statusText: xhr.statusText,
            // headers: xhr.getAllResponseHeaders(),
          });
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
