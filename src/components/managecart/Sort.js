import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownWideShort as faSort } from '@fortawesome/free-solid-svg-icons'
import { faArrowDownAZ} from '@fortawesome/free-solid-svg-icons'
import { faArrowDownZA} from '@fortawesome/free-solid-svg-icons'
import { faCheck} from '@fortawesome/free-solid-svg-icons'
import {connect} from "react-redux";
import * as actions from './../../actions/index'

class Sort extends Component {

    onSort = (sortBy, sortValue) => {
        this.props.onSortTask({
            by: sortBy,
            value: sortValue,
        });
    }

    render(){
        var  {sort} = this.props;
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
                            {(sort.by === 'name' && sort.value ===1) ? <FontAwesomeIcon icon={faCheck} /> : ''}
                            
                        </a>
                    </li>
                    <li onClick={() =>this.onSort('name', -1)}>
                        <a>
                            <FontAwesomeIcon icon={faArrowDownZA} /> &nbsp;
                            Tên Z-A &nbsp;
                            {(sort.by === 'name' && sort.value === -1) ? <FontAwesomeIcon icon={faCheck} /> : ''}
                        </a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li onClick={() =>this.onSort('status', 1)}>
                        <a>
                            Trạng thái kích hoạt &nbsp;
                            {(sort.by === 'status' && sort.value ===1) ? <FontAwesomeIcon icon={faCheck} /> : ''}
                        </a>
                    </li>
                    <li onClick={() =>this.onSort('status', -1)}>
                        <a>
                            Trạng thái ẩn &nbsp;
                            {(sort.by === 'status' && sort.value === -1) ? <FontAwesomeIcon icon={faCheck} /> : ''}
                        </a>
                    </li>
                  </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        sort: state.sortTask,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSortTask: (sort) => {
            dispatch(actions.sortTask(sort));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);