import VinDecode from "../components/VinDecode";
import { connect } from "react-redux";
import { fetchUsersCar } from "../redux/actions";

const mapStateToProps = (state) => {
    return {
        userCar: state.userCar
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsersCar: () => dispatch(fetchUsersCar())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(VinDecode)