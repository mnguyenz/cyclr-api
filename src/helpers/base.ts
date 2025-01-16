import { buildQueryString, httpRequest, removeEmptyValue } from '~helpers/utils';

export class Base {
    clientId: string;
    clientSecret: string;
    cyclrDomain: string;

    constructor(clientId: string, clientSecret: string, cyclrDomain: string) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.cyclrDomain = cyclrDomain;
    }

    makeRequest(method: string, url: string): Promise<any> {
        return httpRequest({
            method,
            cyclrDomain: this.cyclrDomain,
            url
        });
    }

    preparePath(path: string, options?: object): string {
        if (!options) return path;
        options = removeEmptyValue(options);
        const params = buildQueryString(options);
        return `${path}?${params}`;
    }
}
