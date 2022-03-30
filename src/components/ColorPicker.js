import React, {Component} from 'react';

class ColorPicker extends Component {
  constructor(props){
    super(props);
    this.state = {
      color: 'red',
      fontSize: 12
    };
  }
  
  showColor = (color) => {
    return {
      backgroundColor: color,
      height : '25px',
    }
  }
  changeColor = (color) => {
    this.setState({
		color: color,
	})
  }

  setStyle = () =>{
	return {
		color: this.state.color,
		borderColor: this.state.color,
		fontSize: this.state.fontSize,
	}
  }

  changeFontSize = (value) => {
  	this.setState({
		fontSize: (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36 ) ? this.state.fontSize + value: this.state.fontSize,
	});
  }

  onReset = () => {
  	this.setState({
		color: 'red',
		fontSize: 12
	});
  }

  render(){
    var colors = ['red', 'green', 'blue', '#ccc']
    var elementColors = colors.map((color, index) => {
      return  <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" key={index}>
                <div   
                      style={ this.showColor(color) } 
                      className={ this.state.color === color ? 'active' : ''}
                      onClick={ () => this.changeColor(color) }
                >
                    
                </div>
              </div>
    });
    return(
      <div className="row">
      	<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      		<div className="panel panel-danger">
      			<div className="panel-heading">
      				<h3 className="panel-title">Color Picker</h3>
      			</div>
      			<div className="panel-body">
              { elementColors }
      				<hr/>
      			</div>
      		</div>
      	</div>
      	<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      		<div className="panel panel-warning">
      			<div className="panel-heading">
      				<h3 className="panel-title">Size: {this.state.fontSize}px</h3>
      			</div>
      			<div className="panel-body">
      				<button type="button" className="btn btn-success" onClick={() =>this.changeFontSize(-2)}>Giảm</button>
      				<button type="button" className="btn btn-success" onClick={() =>this.changeFontSize(2)}>Tăng</button>
      			</div>
      		</div>
      	</div>
      	<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      		<button type="button" className="btn btn-warning" onClick={() => this.onReset()}>Reset</button>
      	</div>
      	<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text">
      		<p>Color: {this.state.color} - Fontsize: {this.state.fontSize}px.</p>
      		<div id="content" style={this.setStyle()}>
      			Nội dung setting
      		</div>
      	</div>

      </div>
    );
  }
}

export default ColorPicker;
