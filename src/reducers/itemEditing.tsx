import * as Types from '../constants/ActionType';
import type { product } from '../constants/Types';

var initialState: product = {
    id: "",
    name: "",
    description: "",
    price: 0,
    status: false
};

const itemEditing = (state: typeof initialState = initialState, action: any): product => {
    switch (action.type) {
        case Types.EDIT_PRODUCT:
            return action.product;
        default:
            return state;
    }
}

export default itemEditing;