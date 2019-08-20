import React, { Component } from 'react';
import '../App.css';
class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }
    render() {
        return (
            <div className="variant">
                {this.props.name}
                {this.props.quantity}
                {this.props.processing}
                {this.props.files.length}
            </div>
        );
    }
}

export default App;
