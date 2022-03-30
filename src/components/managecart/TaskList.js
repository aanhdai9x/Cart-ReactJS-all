import React, {Component} from 'react';
import TaskItem from './TaskItem'


class TaskList extends Component {
    render(){
        var {tasks} = this.props;
        var elementTasks = tasks.map((task, index) => {
            return <TaskItem key={task.id} index = {index} task={task}/>
        });
        return(
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng thái</th>
                        <th className="text-center">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            
                        </td>
                        <td>
                            <input type="text" className="form-control"/>
                        </td>
                        <td>
                            <select name="" id="input" className="form-control" required="required">
                                <option value=""> Tất cả</option>
                                <option value={true}> Kích hoạt</option>
                                <option value={false}> Ẩn</option>
                            </select>
                        </td>
                        <td>
                            
                        </td>
                    </tr>
                    
                    {/*TaskItem*/}
                    { elementTasks }
                </tbody>
            </table>
        );
    }
}

export default TaskList;