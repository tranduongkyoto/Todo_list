import * as Types from '../constants/ActionType';
import callApi from '../utils/apiCaller';
import type { Product } from '../constants/Types';
import type { Action } from '../constants/Types';

export const actFetchProductsRequest = (): (...args: any[]) => Promise<void> => {
    return (dispatch: any) => {
        return callApi('products', 'GET', null).then(res => {
            if (res) {
                dispatch(actFetchProducts(res.data));
            }
        });
    }
}

export const actFetchProducts = (products: Product[]): Action => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}

export const actAddProductRequest = (product: Product): (...args: any[]) => Promise<void> => {
    return (dispatch: any) => {
        return callApi('products', 'POST', product).then(res => {
            if (res) {
                dispatch(actAddProduct(res.data));
            }
        });
    }
}

export const actAddProduct = (product: Product): Action => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}


export const actDeleteProductRequest = (id: string): (...args: any[]) => Promise<void> => {
    return (dispatch: any) => {
        return callApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(id));
        });
    }
}

export const actDeleteProduct = (id: string): Action => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

export const actGetProductRequest = (id: string): (...args: any[]) => Promise<void> => {
    return (dispatch: any) => {
        return callApi(`products/${id}`, 'GET', null).then(res => {
            if (res) {
                dispatch(actGetProduct(res.data));
            }
        });
    }
}

export const actGetProduct = (product: Product): Action => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}

export const actUpdateProductRequest = (product: Product): (...args: any[]) => Promise<void> => {
    return (dispatch: any) => {
        return callApi(`products/${product.id}`, 'PUT', product).then(res => {
            if (res) {
                dispatch(actUpdateProduct(res.data));
            }
        });
    }
}

export const actUpdateProduct = (product: Product): Action => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}



