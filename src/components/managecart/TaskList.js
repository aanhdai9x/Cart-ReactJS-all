import React, {Component} from 'react';
import TaskItem from './TaskItem'
import {connect} from "react-redux";
import * as actions from './../../actions/index'

class TaskList extends Component {
    constructor(props){
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1,
        }
    }

    onChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        var filter = {
            name: name === 'filterName' ? value : this.state.filterName,
            status: name === 'filterStatus' ? value : this.state.filterStatus,
        }
        this.props.onFilterTable(filter);
        this.setState({
            [name]: value,
        });
    }

    render(){
        var {tasks, filterTable} = this.props;
        if(filterTable){
            if(filterTable.name){
                tasks = tasks.filter((task) => {
                    return task.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !== -1;
                });
            }
            tasks = tasks.filter((task) => {
                if(filterTable.status === -1){
                    return task;
                } else {
                    return task.status === (filterTable.status === 1 ? true: false);
                }
            });
        }
        var {filterName, filterStatus} = this.state;
        var elementTasks = tasks.map((task, index) => {
            return <TaskItem 
                        key={task.id} 
                        index = {index} 
                        task={task}
                        onEdit={this.props.onEdit}
                    />
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
                            <input 
                                type="text" 
                                name='filterName'
                                value={filterName}
                                onChange={this.onChange}
                                className="form-control"
                            />
                        </td>
                        <td>
                            <select 
                                name="filterStatus" 
                                value={filterStatus}
                                onChange={this.onChange}
                                className="form-control" 
                                required="required"
                            >
                                <option value={-1}> Tất cả</option>
                                <option value={1}> Kích hoạt</option>
                                <option value={0}> Ẩn</option>
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

const mapStateToProps = (state) =>{
    return {
        tasks: state.tasks,
        filterTable: state.filterTable,
    }
};

const mapDispatchToProps = (dispatch, props) =>{
    return {
        onFilterTable: (filter) => {
            dispatch(actions.filterTable(filter));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);