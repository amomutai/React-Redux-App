
import { ActionTypes } from '../constants/action-types'

export const setPhotos = (photos) => {
    return {
        type: ActionTypes.SET_PHOTOS,
        payload: photos
    };
};