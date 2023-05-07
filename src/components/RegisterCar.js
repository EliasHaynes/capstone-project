import React, {useState} from "react"
import { addCar,removeCar } from "../redux/actions"



function RegisterCar() {
    const [vinForm,setVinForm] = useState([{
        vinClicked: false,
        vin: "",
        mileage: ""
    }])
    const [ymmForm, setYmmForm] = useState({
        ymmClicked: false,
        year: "",
        make: "",
        model: "",
        mileage: ""
    })

    const handleVinSubmit = (e) => {
        e.preventDefault()
        setVinForm( {vinClicked: true} )
        console.log('vin')
    }
    
    const handleYmmSubmit = (e) => {
        e.preventDefault()
        setYmmForm( {ymmClicked: true} )
        console.log('ymm')
    }


    return (
            <div>
                <h1>This is where to register a new car and save to database</h1>
                <span>
                    <form onSubmit={handleVinSubmit}>
                        <input name="vin" placeholder="vin #"></input>
                        <input name="mileage" placeholder="mileage #"></input>
                        <button type="submit">Submit Vin</button>
                    </form>
                </span>
                <span>
                    <form onSubmit={handleYmmSubmit}>
                        <input name="year" placeholder="year"></input>
                        <input name="make" placeholder="make"></input>
                        <input name="model" placeholder="model"></input>
                        <input name="mileage" placeholder="mileage"></input>
                        <button type="submit" >Submit YMM</button>
                    </form>
                </span>
        </div>
    )
}

export default RegisterCar;



//Notes:
    //1: This page will have conditional rendering where the user either enters their vin or their YMM to save their car to the database
