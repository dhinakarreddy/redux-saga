import { IMAGES } from "../constants";

const errorReducer = (state = null, action) => {

    if (action.type === IMAGES.LOAD_ERROR) {
        return action.error;
    }

    return state;
}

export default errorReducer;