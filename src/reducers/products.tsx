import * as Types from '../constants/ActionType';
import type { Product } from '../constants/Types';
var initialState: Product[] = [];

const products = (state: typeof initialState = initialState, action: any): Product[] => {
    var { product, id } = action;
    var index = -1;
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            return [...action.products];
        case Types.ADD_PRODUCT:
            state.push(product);
            return [...state];
        case Types.DELETE_PRODUCT:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case Types.UPDATE_PRODUCT:
            index = findIndex(state, product.id);
            state[index] = product;
            return [...state];
        default: return [...state];
    }
};

const findIndex = (products: Product[], id: string): number => {
    var result = -1;
    products.forEach((product, index) => {
        if (product.id === id) {
            result = index;
        }
    });
    return result;
}

export default products;