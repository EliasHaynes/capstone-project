import RepairLog from "../components/RepairLog";
import { connect } from "react-redux";
import { removeRepair } from "../redux/actions";


const mapStateToProps = (state) => {
    return {
        repairLog: state.repairLog
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        removeRepair: (index) => dispatch(removeRepair(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepairLog)