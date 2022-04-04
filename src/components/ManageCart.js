import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import TaskForm from './managecart/TaskForm'
import Control from './managecart/Control'
import TaskList from './managecart/TaskList'
import {connect} from "react-redux";
import * as actions from './../actions/index'

class ManageCart extends Component {
    constructor(props){
        super(props);
        this.state = {
            taskEditing: null,
            filter: {
                name: '',
                status: -1,
            }, 
            keyword: '',
            sortBy: 'name',
            sortValue: 1,
        }
    }

    onToggleForm = () => {
        var {itemEditing} = this.props;
        if(itemEditing && itemEditing.id !== ''){
            this.props.onEditThenAdd()
            this.props.onOpenForm();
        } else {
            this.props.onToggleForm();
        }
    }

    onFilter = (filterName, filterStatus) => {
        filterStatus = parseInt(filterStatus);
        this.setState({
            filter: {
                name: filterName,
                status: filterStatus,
            }
        });
    }

    onSearch = (keyword) => {
        this.setState({
            keyword: keyword,
        });
    }

    onSort = (sortBy, sortValue) => {
        this.setState({
            sortBy: sortBy,
            sortValue: sortValue,
        });
    }

    render(){
        var {isDisplayForm} = this.props;
        var {
            taskEditing,
                // keyword,
            sortBy,
            sortValue
        } = this.state;
        // if(keyword){
        //     tasks = tasks.filter((task) => {
        //         return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
        //     });
        // }
        // if(sortBy ==='name'){
        //     tasks.sort((a, b) => {
        //        if(a.name > b.name) return sortValue;
        //        else if (a.name <b.name) return -sortValue;
        //        else return 0;
        //     });
        // } else {
        //     tasks.sort((a, b) => {
        //         if(a.status > b.status) return -sortValue;
        //         else if (a.status < b.status) return sortValue;
        //         else return 0;
        //     });
        // }

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
                        <TaskForm />
                    </div>
                    <div 
                        className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8 text-left" : "col-xs-12 col-sm-12 col-md-12 col-lg-12 text-left"}
                    >
                        <button
                            type="button" 
                            className="btn btn-primary"
                            onClick={ this.onToggleForm }
                        >
                            <FontAwesomeIcon icon={faPlus} />&nbsp;
                            Thêm sản phẩm
                        </button>
                        <br/><br/>

                        {/*Control*/}
                        <Control 
                            onSearch={this.onSearch}
                            onSort={this.onSort}
                        />

                        <br/>
                        <br/>

                        {/*TaskList*/}
                        <TaskList />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isDisplayForm: state.isDisplayForm,
        itemEditing: state.itemEditing,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleForm: () => {
            dispatch(actions.toggleForm());
        },
        onOpenForm: () => {
            dispatch(actions.openForm());
        },
        onEditThenAdd: () => {
            dispatch(actions.editThenAdd());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCart);