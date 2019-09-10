import React, { Component } from 'react';
import '../App.css';
import { Card, OverlayTrigger, Popover, Button } from 'react-bootstrap';

import rightArrow from '../assets/right-arrow.png';
import downArrow from '../assets/down-arrow.png';
import { default as Layover } from './Layover.js';

class ProcessingLayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            processingColumn: rightArrow,
            isPaneOpen: false,

        }
    }
    componentDidMount() {

    }


    handleClose = () => {
        this.setState({isPaneOpen : false})
    }

    popover = (files) => (
        <Popover id="popover-basic">
            <Popover.Title as="h3" style={{ textAlign: 'center' }}>Files</Popover.Title>
            <Popover.Content>
                {files.map(file => <div>{file.split('/')[file.split('/').length - 1]} <hr /></div>)}
            </Popover.Content>
        </Popover>
    );

    layover = (files) => {
        console.log(files);
        return <Layover data={files} handleClose = {this.handleClose} stateData = {this.state.isPaneOpen}/>
    }

    displayQuantityLayer(data) {
        console.log(data)
        return data.map(quantityData => {
            return (<div className="item2">
                <div className="item3" style={{ float: "left", margin: 'auto', marginLeft: "40px", opacity: 1 }}>{quantityData.quantity} </div>
                    <div className="item3" style={{ textAlign: "center", margin: "auto inherit" }} onClick = {()=>{this.setState({isPaneOpen : true})}}>{quantityData.files.length + " Recipes"} </div>
                    {(this.state.isPaneOpen ? this.layover(quantityData.files) : null)}
                    </div>)
        })
    }

    toggleArrow = (column, height) => {
        if (this.state[column] == rightArrow) {
            this.setState({ [column]: downArrow });
            this.props.changeNameHeight(height, '+')
        } else {
            this.setState({ [column]: rightArrow });
            this.props.changeNameHeight(height, '-')
        }
    }

    processingDataColumnSpan(spanRows) {
        console.log(spanRows)
        if(this.state.processingColumn === rightArrow) {
            return ({
                gridColumn : 2,
                gridRow : 'span ' + 1,
            })
        }
        return ({
            gridRow: 'span ' + spanRows,
            gridColumn: 2
        })
        // if(this.state.)
    }

    render() {
        // return(null);
        let returnDivs = [];
        returnDivs.push(<div style={this.processingDataColumnSpan(this.props.processingData.quantityLayer.length)} className="item2"> <div><img src={this.state.processingColumn} style={{ width: 10, height: 10 }} onClick={() => { this.toggleArrow('processingColumn', this.props.processingData.quantityLayer.length) }} />{this.props.processingData.processing}</div> <br /> <span className="light" style={{ marginTop: "5px" }}>{this.props.processingData.numberOfRecipes} Recipes</span></div>)
        if (this.state.processingColumn === downArrow) {
            returnDivs.push(this.displayQuantityLayer(this.props.processingData.quantityLayer));
        } else {
            returnDivs.push(<div className="item2"> {this.props.processingData.quantityLayer.length + ' items'}</div>)
        }
        console.log(returnDivs)
        return returnDivs;
    }
}

export default ProcessingLayer;