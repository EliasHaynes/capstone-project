import ScheduledMaintenance from "../components/ScheduledMaintenance";
import { connect } from "react-redux";
import { fetchScheduledMaintenance } from "../redux/actions";

const mapStateToProps = (state) => {
    return {
        userScheduledMaintenance: state.userScheduledMaintenance
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchScheduledMaintenance: () => dispatch(fetchScheduledMaintenance())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ScheduledMaintenance)