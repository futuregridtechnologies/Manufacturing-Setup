import React, { Component } from 'react';
import '../App.css';
import { default as Layover } from './Layover.js';

class ProcessingLayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPaneOpen: false,
        }
    }
    componentDidMount() {

    }
    handleClose = () => {
        this.setState({isPaneOpen : false})
    }

    layover = (files) => {
        console.log(files);
        return <Layover data={files} handleClose = {this.handleClose} stateData = {this.state.isPaneOpen}/>
    }

    render() {
            return (<div className="item2">
                <div className="item3" style={{ float: "left", margin: 'auto', marginLeft: "40px", opacity: 1 }}>{this.props.quantityData.quantity} </div>
                    <div className="item3" style={{ textAlign: "center", margin: "auto inherit" }} onClick = {()=>{this.setState({isPaneOpen : true})}}>{this.props.quantityData.files.length + " Recipes"} </div>
                    {(this.state.isPaneOpen ? this.layover(this.props.quantityData.files) : null)}
                    </div>)
    }
}

export default ProcessingLayer;