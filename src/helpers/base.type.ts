export type Constructor<T = any> = new (...args: any[]) => T;

export type HttpRequestConfig = {
    cyclrDomain: string;
    url: string;
    method: string;
};
