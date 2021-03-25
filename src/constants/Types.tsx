import store from '../index';
export type RootState = ReturnType<typeof store.getState>
//export type AppDispatch = typeof store.dispatch
export type Product = {
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

export type Action = {
    type: 'FETCH_PRODUCTS',
    products?: Product[]
} | {
    type: 'ADD_PRODUCT',
    product?: Product
} | {
    type: 'DELETE_PRODUCT',
    id?: string
} | {
    type: 'EDIT_PRODUCT',
    product?: Product
} | {
    type: 'UPDATE_PRODUCT',
    product?: Product
}