import React from "react"
import { fetchUsersCar } from "../redux/actions";

function VinDecode(props) {

    return (
        <div>
            <h1>Display your car</h1>
            <button onClick={props.fetchUsersCar}></button>
            <p>{props.userCar.year}</p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
    )
}

export default VinDecode;