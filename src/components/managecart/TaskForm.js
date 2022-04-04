import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import {connect} from "react-redux";
import * as actions from './../../actions/index'


class TaskForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false
        }
    }

    onChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        if(name === 'status'){
            value = event.target.value === 'true' ? true : false;
        }
        this.setState({
            [name]: value,
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSaveTask(this.state);
        // Clear & Close Form
        this.onClear();
        this.props.onCloseForm();
    }

    onClear = () => {
        this.setState({
            name: '',
            status: false
        });
    }

    componentWillMount(){
        if(this.props.itemEditing && this.props.itemEditing.id !== null){
            this.setState({
                id: this.props.itemEditing.id,
                name: this.props.itemEditing.name,
                status: this.props.itemEditing.status,
            });
        } else {
            this.onClear();
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemEditing){
            this.setState({
                id: nextProps.itemEditing.id,
                name: nextProps.itemEditing.name,
                status: nextProps.itemEditing.status,
            });
        } else if (!nextProps.itemEditing) {
            this.setState({
                id: '',
                name: '',
                status: false
            });
        }
    }



    render(){
        var {id} = this.state;
        if(!this.props.isDisplayForm) return '';
        return(
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                            
                        </div>
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            <FontAwesomeIcon
                                className="icon-hover"
                                icon={faCircleXmark}
                                onClick={this.props.onCloseForm}
                            />
                        </div>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <legend>
                            {id === '' ? 'Thêm sản phẩm' : 'Cập nhật sản phẩm'}
                        </legend>
                    
                        <div className="form-group text-left">
                            <label>Tên: </label>
                            <input 
                                type="text"
                                name="name" 
                                value={this.state.name}
                                onChange={this.onChange}
                                className="form-control"
                            />
                            <br/>

                            <label>Trạng thái: </label>
                            <select 
                                name="status"
                                value={this.state.status}
                                onChange={this.onChange}
                                className="form-control" 
                                required="required"
                            >
                                <option value={true}> Kích hoạt</option>
                                <option value={false}> Ẩn</option>
                            </select>
                        </div>
                        
                        <br/>
                        
                        <button type="submit" className="btn btn-warning">
                            <FontAwesomeIcon icon={faPlus} />&nbsp;
                            Lưu lại
                        </button>&nbsp;
                        <button 
                            type="button" 
                            className="btn btn-danger"
                            onClick={this.onClear}
                        >
                            <FontAwesomeIcon icon={faXmark} />&nbsp;    
                            Hủy bỏ
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isDisplayForm: state.isDisplayForm,
        itemEditing: state.itemEditing,
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSaveTask: (task) => {
            dispatch(actions.saveTask(task));
        },
        onCloseForm: () => {
            dispatch(actions.closeForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);