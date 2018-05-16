import AddComponent from '../components/AddComponent';
import {addNewTask} from '../actions';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {

    }
}

const mapDispathToProps = (dispatch) => {
    return {
        onClickAdd: (imputTaskName) => {
            dispatch(addNewTask(imputTaskName));
        }
    };
}

export default connect(mapStateToProps, mapDispathToProps)(AddComponent)