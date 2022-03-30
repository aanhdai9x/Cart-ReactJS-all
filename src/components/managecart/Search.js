import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass as faSearch } from '@fortawesome/free-solid-svg-icons'

class Search extends Component {
    render(){
        return(
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                    <input type="text" className="form-control" placeholder="Nhập từ khóa..."/>
                </div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <button type="button" className="btn btn-primary">
                    <FontAwesomeIcon icon={faSearch} />&nbsp;
                        Tìm
                    </button>
                </div>
            </div>
        );
    }
}

export default Search;