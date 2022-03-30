import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import TaskForm from './managecart/TaskForm'
import Control from './managecart/Control'
import TaskList from './managecart/TaskList'
import randomString from 'random-string'

class ManageCart extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: [],      //id: unique, name, status
            isDisplayForm: false
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

    onToggleForm = () => {
        this.setState({
            isDisplayForm: !this.state.isDisplayForm,
        });
    }

    onCloseForm = () => {
        this.setState({
            isDisplayForm: false,
        });
    }

    onSubmit = (data) => {
        var {tasks} = this.state;
        data.id = randomString({length: 50});
        tasks.push(data);
        this.setState({
            tasks : tasks
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    render(){
        var {tasks, isDisplayForm} = this.state;
        var elementTaskForm = isDisplayForm ? <TaskForm onSubmit={this.onSubmit} onCloseForm={ () => this.onCloseForm()} /> : '';
        return(
            <div className="container">
                <div className="text-center">
                    <h1>Quản lý giỏ hàng</h1>
                </div>
                <div className="row">
                    <div 
                        className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}
                    >
                        {/*Form*/}
                        {elementTaskForm}
                    </div>
                    <div 
                        className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8 text-left" : "col-xs-12 col-sm-12 col-md-12 col-lg-12 text-left"}
                    >
                        <button
                            type="button" 
                            className="btn btn-primary"
                            onClick={ () => this.onToggleForm() }
                        >
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