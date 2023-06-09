import axios from "axios"
const vinDecodeUrl = "http://api.carmd.com/v3.0/decode?vin=1GNALDEK9FZ108495"
const scheduledMaintenanceUrl = "http://api.carmd.com/v3.0/maint?vin=1GNALDEK9FZ108495&mileage=51000"

//Vin Decode
export const fetchUsersCar = (car) => {
    return (dispatch) => {
        axios(vinDecodeUrl, {
            method: 'GET',
            headers: {
              'authorization': 'Basic ZGE5NTc2MGEtYzA2MC00ZWU0LWEyZGYtNTVhZmFmYjczMzll',
              'partner-token': "6500ceff659d43778aec43743be33a81"
            },

          })
        .then(response => {
            console.log(response)
            const action = {
                type: "FETCH_CAR",
                value: response.data
            }
            dispatch(action)
        })
    }
}

export const fetchScheduledMaintenance = (maintenance) => {
    return (dispatch) => {
        axios(scheduledMaintenanceUrl, {
            method: "GET",
            headers: {
                'authorization': 'Basic ZGE5NTc2MGEtYzA2MC00ZWU0LWEyZGYtNTVhZmFmYjczMzll',
                'partner-token': '6500ceff659d43778aec43743be33a81'
            }
        })
        .then(response => {
            console.log(response)
            const action = {
                type: "FETCH_MAINTENANCE",
                value: response
            }
            dispatch(action)
        })
    }
}

