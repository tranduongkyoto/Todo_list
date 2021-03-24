import axios from 'axios';
import * as Config from '../constants/Config';
export type Method =
    | 'get' | 'GET'
    | 'delete' | 'DELETE'
    | 'head' | 'HEAD'
    | 'options' | 'OPTIONS'
    | 'post' | 'POST'
    | 'put' | 'PUT'
    | 'patch' | 'PATCH'
    | 'purge' | 'PURGE'
    | 'link' | 'LINK'
    | 'unlink' | 'UNLINK'
type product = {
    id?: string,
    name: string,
    description: string,
    price: number,
    status: boolean
}
export default function callApi(endpoint: string, method: Method, data: product | null) {
    return axios({
        method: method,
        url: `${Config.API_URL}${endpoint}`,
        data: data
    }).catch(err => {
        console.log(err);
    });
};