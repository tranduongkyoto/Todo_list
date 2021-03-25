import * as Types from '../constants/ActionType';
import type {product} from '../constants/Types';
var initialState:product[]=[];

const itemEditing = (state: typeof initialState = initialState, action: any) => {
    switch (action.type) {
        case Types.EDIT_PRODUCT:
            return action.product;
        default:
            return state;
    }
}

export default itemEditing;