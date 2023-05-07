import { combineReducers } from "redux";

const userCarSpecs = (state = [], action) => {
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

const repairLog = (state = [], action) => {
    switch(action.type) {
        case "ADD_REPAIR" :
            return [...state, action.value]
        case "REMOVE_REPAIR" :
            const repairs = [...state]
            repairs.splice(action.value, 1)
            return repairs
        default :
            return state
    }
}

const userRegisteredCar = (state = [], action) => {
    switch(action.type) {
        case "ADD_CAR" :
            return [...state, action.value];
        case "REMOVE_CAR" :
            const usersCars = [...state]
            usersCars.splice(action.value, 1)
            return usersCars
        default :
            return state;
    }
}


export default combineReducers( { userCarSpecs, userScheduledMaintenance, repairLog, userRegisteredCar })