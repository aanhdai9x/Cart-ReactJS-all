import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare as faEdit} from '@fortawesome/free-solid-svg-icons'
import { faTrash as faRemove} from '@fortawesome/free-solid-svg-icons'


class TaskItem extends Component {
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
                    >
                        {task.status === true ? "Kích hoạt" : "Ẩn"}
                    </span>
                </td>
                <td className="text-center">
                    <button type="submit" className="btn btn-warning">
                    <FontAwesomeIcon icon={faEdit} />&nbsp;
                    Sửa
                </button>&nbsp;
                <button type="button" className="btn btn-danger">
                    <FontAwesomeIcon icon={faRemove} />&nbsp;
                    Xóa
                </button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;