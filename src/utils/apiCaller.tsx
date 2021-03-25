import axios, { AxiosResponse } from 'axios';
import * as Config from '../constants/Config';
import type { product, Method } from '../constants/Types';

export default function callApi(endpoint: string, method: Method, data: product | null): Promise<void | AxiosResponse<any>> {
    return axios({
        method: method,
        url: `${Config.API_URL}${endpoint}`,
        data: data
    }).catch(err => {
        console.log(err);
    });
};