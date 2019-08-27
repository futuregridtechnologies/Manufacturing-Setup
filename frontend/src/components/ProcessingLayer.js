import React, { Component } from 'react';
import '../App.css';
import { Card, OverlayTrigger, Popover, Button } from 'react-bootstrap';

import rightArrow from '../assets/right-arrow.png';
import downArrow from '../assets/down-arrow.png';

class ProcessingLayer extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            processingColumn: rightArrow,
        }
    }
    componentDidMount() {

    }

    popover = (files) => (
        <Popover id="popover-basic">
            <Popover.Title as="h3" style={{ textAlign: 'center' }}>Files</Popover.Title>
            <Popover.Content>
                {files.map(file => <div>{file.split('/')[file.split('/').length - 1]} <hr /></div>)}
            </Popover.Content>
        </Popover>
    );

    displayQuantityLayer(data) {
        console.log(data)
        return data.map(quantityData => {
            return (<div className="item2">
                <div className="item3" style={{ float: "left", margin: 'auto', marginLeft: "40px", opacity: 1 }}>{quantityData.quantity} </div>
                <OverlayTrigger trigger="click" placement="bottom" overlay={this.popover(quantityData.files)}>
                    <div className="item3 light" style={{ textAlign: "center", margin: "auto inherit" }}>{quantityData.files.length + " Recipes"} </div>
                </OverlayTrigger>
            </div>)
            // console.log(parentData)
            // console.log(quantityData)
            // console.log(error)

        })
    }

    toggleArrow = (column) => {
        if (this.state[column] == rightArrow) {
            this.setState({ [column]: downArrow });
        } else {
            this.setState({ [column]: rightArrow });
            if (column == 'processingColumn') {
                this.setState({ [column]: rightArrow })
            }
        }
    }

    processingDataColumnSpan(spanRows) {
        console.log(spanRows)
        return ({
            gridRow: 'span ' + spanRows,
            gridColumn: 2
        })
        // if(this.state.)
    }

    render() {
        // return(null);
        let returnDivs = [];
        returnDivs.push(<div style={this.processingDataColumnSpan(this.props.processingData.quantityLayer.length)} className="item2"> <div><img src={this.state.processingColumn} style={{ width: 10, height: 10 }} onClick={() => { this.toggleArrow('processingColumn') }} />{this.props.processingData.processing}</div> <br /> <span className="light" style={{ marginTop: "5px" }}>{this.props.processingData.numberOfRecipes} Recipes</span></div>)
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