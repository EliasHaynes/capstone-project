import React from "react";
import { addRepair } from "../redux/actions";
import { connect } from "react-redux";
import AddRepair from "../components/AddRepair";


const mapStateToProps = (state) => {
    return {
        repairLog: state.repairLog
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addRepair: (repair) => dispatch(addRepair(repair))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRepair)