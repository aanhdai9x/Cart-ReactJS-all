import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownWideShort as faSort } from '@fortawesome/free-solid-svg-icons'
import { faArrowDownAZ} from '@fortawesome/free-solid-svg-icons'
import { faArrowDownZA} from '@fortawesome/free-solid-svg-icons'
import { faCheck} from '@fortawesome/free-solid-svg-icons'

class TaskForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            sortBy: 'name',
            sortValue: 1,
        }
    }

    onSort = (sortBy, sortValue) => {
        this.setState({
            sortBy: sortBy,
            sortValue: sortValue,
        });
        this.props.onSort(sortBy, sortValue);
    }

    render(){
        var {sortBy, sortValue} = this.state;
        return(
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                  <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuSort" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Sắp xếp &nbsp;
                    <FontAwesomeIcon icon={faSort} />
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuSort">
                    <li onClick={() =>this.onSort('name', 1)}>
                        <a>
                            <FontAwesomeIcon icon={faArrowDownAZ} /> &nbsp;
                            Tên A-Z &nbsp;
                            {(sortBy === 'name' && sortValue ===1) ? <FontAwesomeIcon icon={faCheck} /> : ''}
                            
                        </a>
                    </li>
                    <li onClick={() =>this.onSort('name', -1)}>
                        <a>
                            <FontAwesomeIcon icon={faArrowDownZA} /> &nbsp;
                            Tên Z-A &nbsp;
                            {(sortBy === 'name' && sortValue === -1) ? <FontAwesomeIcon icon={faCheck} /> : ''}
                        </a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li onClick={() =>this.onSort('status', 1)}>
                        <a>
                            Trạng thái kích hoạt &nbsp;
                            {(sortBy === 'status' && sortValue ===1) ? <FontAwesomeIcon icon={faCheck} /> : ''}
                        </a>
                    </li>
                    <li onClick={() =>this.onSort('status', -1)}>
                        <a>
                            Trạng thái ẩn &nbsp;
                            {(sortBy === 'status' && sortValue === -1) ? <FontAwesomeIcon icon={faCheck} /> : ''}
                        </a>
                    </li>
                  </ul>
                </div>
            </div>
        );
    }
}

export default TaskForm;