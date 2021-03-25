import store from '../index';
export type RootState = ReturnType<typeof store.getState>
//export type AppDispatch = typeof store.dispatch
export type product = {
    id: string,
    name: string,
    description: string,
    price: number,
    status: boolean
}

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

export type ACTION = {
    type: 'FETCH_PRODUCTS',
    products?: product[]
} | {
    type: 'ADD_PRODUCT',
    product?: product
} | {
    type: 'DELETE_PRODUCT',
    id?: string
} | {
    type: 'EDIT_PRODUCT',
    product?: product
} | {
    type: 'UPDATE_PRODUCT',
    product?: product
}