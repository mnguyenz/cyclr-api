import { LIST_TRANSACTIONS } from '~constants/url.constant';
import { HttpMethodEnum } from '~enums/common.enum';
import { Base } from '~helpers/base';

export class Cyclr extends Base {
    constructor(apiKey = '', apiSecret = '', baseURL = '') {
        super(apiKey, apiSecret, baseURL);
    }

    async listTransaction(): Promise<any> {
        const url = this.preparePath(LIST_TRANSACTIONS);
        return await this.makeRequest(HttpMethodEnum.GET, url);
    }
}
