import RegisterCar from "../components/RegisterCar";
import { connect } from "react-redux";
import { addCar } from "../redux/actions";


const mapStateToProps = (state) => {
    return {
        userRegisterCar: state.userRegisterCar
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCar: (car) => dispatch(addCar(car))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterCar)