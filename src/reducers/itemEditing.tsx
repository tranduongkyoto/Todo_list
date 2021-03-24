import * as Types from '../constants/ActionType';
var initialState = [{}];

const itemEditing = (state: typeof initialState = initialState, action: any) => {
    switch (action.type) {
        case Types.EDIT_PRODUCT:
            return action.product;
        default:
            return state;
    }
}

export default itemEditing;