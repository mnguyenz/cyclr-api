import axios from 'axios';
import { HttpRequestConfig } from './base.type';

export async function httpRequest(config: HttpRequestConfig) {
    try {
        const { cyclrDomain, url, method } = config;
        const options = {
            cyclrDomain,
            method,
            url,
            headers: {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                'Content-Type': 'application/json'
            },
            transformResponse: [(data) => data]
        };
        const { data } = await axios.request(options);
        return data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            throw error.response.data.msg;
        } else {
            throw new Error('Http request error');
        }
    }
}

export function removeEmptyValue(obj: object): object {
    if (!(obj instanceof Object)) return {};
    return Object.fromEntries(
        Object.entries(obj).filter(([, value]) => value !== null && value !== undefined && value !== '')
    );
}

export function buildQueryString(params: object): string {
    if (!params) return '';
    return Object.entries(params).map(stringifyKeyValuePair).join('&');
}

function stringifyKeyValuePair([key, value]: [string, string]) {
    const valueString = Array.isArray(value) ? `["${value.join('","')}"]` : value;
    return `${key}=${encodeURIComponent(valueString)}`;
}
