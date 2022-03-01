import { STATS } from "../constants";

const statsReducer = (state = {}, action) => {
    console.log('action', action)
    if (action.type === STATS.LOAD) {
        return {
            ...state, [action.id]: {
                isLoading: true,
                downloads: null,
                error: false
            }
        };
    } else if (action.type === STATS.LOAD_SUCCESS) {
        return {
            ...state, [action.id]: {
                isLoading: false,
                downloads: action.downloads,
                error: false
            }
        };
    } else if (action.type === STATS.LOAD_ERROR) {
        return {
            ...state, [action.id]: {
                isLoading: false,
                downloads: null,
                error: true
            }
        };
    }


    return state;
}

export default statsReducer;