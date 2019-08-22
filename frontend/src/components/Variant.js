import React, { Component } from 'react';
import { Card, OverlayTrigger, Popover, Button } from 'react-bootstrap';

import '../App.css';



class Variant extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    componentDidMount() {

    }
    popover = (files)=> (
        <Popover id="popover-basic">
            <Popover.Title as="h3" style={{textAlign : 'center'}}>Files</Popover.Title>
            <Popover.Content>
                {files.map(file =><div>{file.split('/')[file.split('/').length - 1]} <hr/></div>)}
          </Popover.Content>
        </Popover>
    );
    displayQuantityLayer(data, parentData) {
        console.log(data)
        return data.map(quantityData => {
            try {
                return (<div className="item2">
                    <div className="item2" style={{ float: "left", margin : 'auto' ,marginLeft: "40px", opacity: 1 }}>{quantityData.quantity} </div>
                    <OverlayTrigger trigger="hover" placement="bottom" overlay={this.popover(quantityData.files)}>
                    <div className="item3 light" style = {{textAlign: "center", margin: "auto inherit"}}>{quantityData.files.length + " Recipes"} </div>
                </OverlayTrigger>
                </div>)
            }
            catch (error) {
                console.log(parentData)
                console.log(quantityData)
                console.log(error)
            }
        })
    }
    // <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

    displayProcessingLayer(data, parentData) {
        return data.map(processingData => {
            console.log(processingData)
            let returnDivs = [];
            returnDivs.push(<div style={{ gridRow: 'span ' + processingData.quantityLayer.length, gridColumn: 2 }} className="item2"> <div>{processingData.processing}</div> <br /> <span className="light" style={{ marginTop: "5px" }}>{processingData.numberOfRecipes} Recipes</span></div>)
            returnDivs.push(this.displayQuantityLayer(processingData.quantityLayer, parentData));
            return returnDivs
        })
    }
    render() {
        console.log(this.props.data)
        let nameRowWidth = this.props.data.processingLayer.reduce((accumulator, el) => {
            let length = el.quantityLayer.length;
            return accumulator + length;
        }, 0)
        console.log(nameRowWidth)
        return (
            <div className="grid-container">
                <div style={{ gridRow: '1 / span ' + nameRowWidth }}><div>{this.props.data.name}</div> <br /> <span className="light">{this.props.data.numberOfRecipes} Recipes </span></div>
                {this.displayProcessingLayer(this.props.data.processingLayer, this.props.data)}
            </div>
        );
    }
}



export default Variant;
