import { combineReducers } from "redux";

const userCar = (state = [], action) => {
    switch(action.type) {
        case "FETCH_CAR" :
            return [...state,action.value]
        default:
            return state
    }
}

const userScheduledMaintenance = (state = [], action) => {
    switch(action.type) {
        case "FETCH_MAINTENANCE" :
            return [...state,action.value]
        default :
            return state
    }
}

export default combineReducers( { userCar, userScheduledMaintenance })