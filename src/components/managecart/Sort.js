import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownWideShort as faSort } from '@fortawesome/free-solid-svg-icons'
import { faArrowDownAZ} from '@fortawesome/free-solid-svg-icons'
import { faArrowDownZA} from '@fortawesome/free-solid-svg-icons'

class TaskForm extends Component {
    render(){
        return(
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                  <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuSort" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Sắp xếp &nbsp;
                    <FontAwesomeIcon icon={faSort} />
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuSort">
                    <li>
                        <a>
                            <FontAwesomeIcon icon={faArrowDownAZ} /> &nbsp;
                            Tên A-Z
                        </a>
                    </li>
                    <li>
                        <a>
                            <FontAwesomeIcon icon={faArrowDownZA} /> &nbsp;
                            Tên Z-A
                        </a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li><a>Trạng thái kích hoạt</a></li>
                    <li><a>Trạng thái ẩn</a></li>
                  </ul>
                </div>
            </div>
        );
    }
}

export default TaskForm;