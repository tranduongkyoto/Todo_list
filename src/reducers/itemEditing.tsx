import * as Types from '../constants/ActionType';
import type { Product } from '../constants/Types';

var initialState: Product = {
    id: "",
    name: "",
    description: "",
    price: 0,
    status: false
};

const itemEditing = (state: typeof initialState = initialState, action: any): Product => {
    switch (action.type) {
        case Types.EDIT_PRODUCT:
            return action.product;
        default:
            return state;
    }
}

export default itemEditing;