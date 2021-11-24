import { ActionTypes } from "../constants/action-types";

const initState = {
    photos: [],
};

export const photoReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PHOTOS:
            return { ...state, photos:  payload};
            // return state.map(post => reducePhoto(type, payload);
        default:
            return state;
    }

}