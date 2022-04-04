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
        var {tasks, filterTable, keyword, sort} = this.props;

        //filterTable
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

        //search
        if(keyword){
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
            });
        }

        //sort
        if(sort.by ==='name'){
            tasks.sort((a, b) => {
               if(a.name > b.name) return sort.value;
               else if (a.name <b.name) return -sort.value;
               else return 0;
            });
        } else {
            tasks.sort((a, b) => {
                if(a.status > b.status) return -sort.value;
                else if (a.status < b.status) return sort.value;
                else return 0;
            });
        }

        var {filterName, filterStatus} = this.state;
        var elementTasks = tasks.map((task, index) => {
            return <TaskItem 
                        key={task.id} 
                        index = {index} 
                        task={task}
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
        keyword: state.searchTask,
        sort: state.sortTask,
    }
};

const mapDispatchToProps = (dispatch, props) =>{
    return {
        onFilterTable: (filter) => {
            dispatch(actions.filterTable(filter));
        },
        onSortTask: (sort) => {
            dispatch(actions.sortTask(sort));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);