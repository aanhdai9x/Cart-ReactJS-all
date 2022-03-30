import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

class TaskForm extends Component {
    render(){
        return(
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                            
                        </div>
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </div>
                    </h3>
                </div>
                <div className="panel-body">
                    <form>
                        <legend>Thêm sản phẩm</legend>
                    
                        <div className="form-group text-left">
                            <label>Tên: </label>
                            <input type="text" className="form-control"/>
                            <br/>

                            <label>Trạng thái: </label>
                            <select name="" id="input" className="form-control" required="required">
                                <option value={true}> Kích hoạt</option>
                                <option value={false}> Ẩn</option>
                            </select>
                        </div>
                        
                        <br/>
                        
                        <button type="submit" className="btn btn-warning">
                            <FontAwesomeIcon icon={faPlus} />&nbsp;
                            Lưu lại
                        </button>&nbsp;
                        <button type="button" className="btn btn-danger">
                            <FontAwesomeIcon icon={faXmark} />&nbsp;    
                            Hủy bỏ
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;