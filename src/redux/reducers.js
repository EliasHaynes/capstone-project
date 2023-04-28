import { combineReducers } from "redux";

const userCar = (state = [], action) => {
    switch(action.type) {
        case "FETCH_CAR" :
            return [...state,action.value]
        default:
            return state
    }
}

export default combineReducers( {userCar})