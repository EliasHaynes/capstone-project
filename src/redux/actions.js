import axios from "axios"
const vinDecodeUrl = "http://api.carmd.com/v3.0/decode?vin=1GNALDEK9FZ108495"


export const fetchUsersCar = (car) => {
    return (dispatch) => {
        axios(vinDecodeUrl, {
            method: 'GET',
            headers: {
              'authorization': 'Basic ZGE5NTc2MGEtYzA2MC00ZWU0LWEyZGYtNTVhZmFmYjczMzll',
              'partner-token': "6500ceff659d43778aec43743be33a81"
            },

          })
        .then (response => {
            console.log(response)
            const action = {
                type: "FETCH_CAR",
                value: response.data
            }
            dispatch(action)
        })
    }
}