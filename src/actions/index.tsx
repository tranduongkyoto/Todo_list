import * as Types from '../constants/ActionType';
import callApi from '../utils/apiCaller';
import type { product } from '../constants/Types';
export const actFetchProductsRequest = () => {
    return (dispatch: any) => {
        return callApi('products', 'GET', null).then(res => {
            if (res) {
                dispatch(actFetchProducts(res.data));
            }
        });
    }
}

export const actFetchProducts = (products: product[]) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}

export const actAddProductRequest = (product: product) => {
    return (dispatch: any) => {
        return callApi('products', 'POST', product).then(res => {
            if (res) {
                dispatch(actAddProduct(res.data));
            }
        });
    }
}

export const actAddProduct = (product: product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}


export const actDeleteProductRequest = (id: string) => {
    return (dispatch: any) => {
        return callApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(id));
        });
    }
}

export const actDeleteProduct = (id: string) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

export const actGetProductRequest = (id: string) => {
    return (dispatch: any) => {
        return callApi(`products/${id}`, 'GET', null).then(res => {
            if (res) {
                dispatch(actGetProduct(res.data));
            }
        });
    }
}

export const actGetProduct = (product: product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}

export const actUpdateProductRequest = (product: product) => {
    return (dispatch: any) => {
        return callApi(`products/${product.id}`, 'PUT', product).then(res => {
            if (res) {
                dispatch(actUpdateProduct(res.data));
            }
        });
    }
}

export const actUpdateProduct = (product: product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}



