import store from '../index'
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
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