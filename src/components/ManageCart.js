import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import TaskForm from './managecart/TaskForm'
import Control from './managecart/Control'
import TaskList from './managecart/TaskList'

class ManageCart extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: [],      //id: unique, name, status
        }
    }

    componentWillMount() {
        if(localStorage && localStorage.getItem('tasks')){
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks: tasks,
            });
        }
    }

    generateData = () => {
        var randomString = require('random-string');
        var tasks = [
            {
                id: randomString({length: 50}),
                name: 'Chạy bộ',
                status: true,
            },
            {
                id: randomString({length: 50}),
                name: 'Nấu cơm',
                status: false,
            },
            {
                id: randomString({length: 50}),
                name: 'Xem phim',
                status: true,
            }
        ];
        this.setState({
            tasks: tasks,
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    render(){
        var {tasks} = this.state;
        return(
            <div className="container">
                <div className="text-center">
                    <h1>Quản lý giỏ hàng</h1>
                </div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        {/*Form*/}
                        <TaskForm />
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 text-left">
                        <button
                            type="button" 
                            className="btn btn-primary"
                            onClick={ () => this.generateData() }>
                            <FontAwesomeIcon icon={faPlus} />&nbsp;
                            Thêm sản phẩm
                        </button>
                        <br/><br/>

                        {/*Control*/}
                        <Control />

                        <br/>
                        <br/>

                        {/*TaskList*/}
                        <TaskList tasks={tasks}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ManageCart;