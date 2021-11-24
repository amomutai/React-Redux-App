
import { combineReducers } from "redux";
import { photoReducer } from './photoReducer'

const reducers = combineReducers({
    allPhotos: photoReducer,
});

export default reducers;