import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare as faEdit} from '@fortawesome/free-solid-svg-icons'
import { faTrash as faRemove} from '@fortawesome/free-solid-svg-icons'
import * as actions from "../../actions/index";
import {connect} from "react-redux";

class TaskItem extends Component {
    onChangeStatus = () => {
        this.props.onChangeStatus(this.props.task.id);
    }

    onDelete = () => {
        this.props.onDeleteTask(this.props.task.id);
        this.props.onCloseForm();
    }

    onEditTask = () => {
        this.props.onOpenForm();
        this.props.onEditTask(this.props.task);
    }


    render(){
        var {task, index} = this.props;
        return(
            <tr>
                <td className="text-center">
                    {index + 1}
                </td>
                <td>
                    {task.name}
                </td>
                <td className="text-center">
                    <span 
                        className={task.status === true ? "label label-danger" : "label label-success"}
                        onClick={this.onChangeStatus}
                    >
                        {task.status === true ? "Kích hoạt" : "Ẩn"}
                    </span>
                </td>
                <td className="text-center">
                    <button 
                        type="button" 
                        className="btn btn-warning"
                        onClick={this.onEditTask}
                    >
                    <FontAwesomeIcon icon={faEdit} />&nbsp;
                    Sửa
                </button>&nbsp;
                <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={this.onDelete}
                >
                    <FontAwesomeIcon icon={faRemove} />&nbsp;
                    Xóa
                </button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onChangeStatus: (id) => {
            dispatch(actions.changeStatus(id));
        },
        onDeleteTask: (id) => {
            dispatch(actions.deleteTask(id));
        },
        onCloseForm: () => {
            dispatch(actions.closeForm());
        },
        onOpenForm: () => {
            dispatch(actions.openForm());
        },
        onEditTask: (task) => {
            dispatch(actions.editTask(task));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);