import React from 'react';
import ReactDOM from 'react-dom';
class Layout extends React.Component {
	constructor(props) {
		super(props);		
		this.state = {
			data: 0
		}
    }
    componentWillMount() {
      console.log(this.state.data+1)
   }
    componentDidMount() {
    	console.log(this.state.data+2);
    	this.setState({data:this.state.data+2});
    	console.log("Final execution");
   }
   render() {
    	return (
        	<div>{this.state.data+=4,
        			console.log(this.state.data)}</div>
      );
   }
}

export default Layout;