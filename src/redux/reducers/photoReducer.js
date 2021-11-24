import { ActionTypes } from "../constants/action-types";

const initState = {
    photos: [],
};

export const photoReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PHOTOS:

            let updatedChangeData = Object.values(
                []
                  .concat(state.photos, payload)
                  .reduce(
                    (r, c) => ((r[c.id] = Object.assign(r[c.id] || {}, c)), r),
                    {}
                  )
              );
        
            return { 
                ...state, photos: updatedChangeData
            };
            // return state.map(post => reducePhoto(type, payload);
        default:
            return state;
    }

}