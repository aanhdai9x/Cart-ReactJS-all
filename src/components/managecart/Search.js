import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass as faSearch } from '@fortawesome/free-solid-svg-icons'

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            keyword: '',
        }
    }

    onChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name] : value,
        });
    }

    onSearch = () => {
        this.props.onSearch(this.state.keyword);
    }

    render(){
        var {keyword} = this.state;
        return(
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                    <input 
                        type="text" 
                        name="keyword"
                        value= {keyword}
                        onChange={this.onChange}
                        className="form-control" 
                        placeholder="Nhập từ khóa..."
                        />
                </div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <button 
                        type="button" 
                        onClick={this.onSearch}
                        className="btn btn-primary"
                    >
                    <FontAwesomeIcon icon={faSearch}/>&nbsp;
                        Tìm
                    </button>
                </div>
            </div>
        );
    }
}

export default Search;