import React, { Component } from 'react';
import { Card, OverlayTrigger, Popover, Button } from 'react-bootstrap';
import ProcessingLayer from './ProcessingLayer';
import { StickyContainer, Sticky } from 'react-sticky';

import '../App.css';
import rightArrow from '../assets/right-arrow.png';
import downArrow from '../assets/down-arrow.png';
import $ from 'jquery';



class Variant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: rightArrow,
            nameRowHeight: 0,
            isPaneOpen: false,
            isPaneOpenLeft: false
        }
    }
    componentDidMount() {
        // $(function () {
        //     $(window).scroll(sticky_relocate);
        //     sticky_relocate();

        //     function sticky_relocate () {
        //         var window_top = $(window).scrollTop();
        //         var div_top = $('#sticky-anchor').offset().top;
        //         if (window_top > div_top && this.state.name == downArrow) {
        //             $('#name-container').addClass('stick');
        //         } else {
        //             $('#name-container').removeClass('stick');
        //         }
        //     }
        // });
    }

    changeNameHeight = (height, sign) => {
        if (sign == '+') {
            this.setState({ nameRowHeight: this.state.nameRowHeight + height - 1 });
        } else {
            this.setState({ nameRowHeight: this.state.nameRowHeight - height + 1 });

        }
    }

    toggleArrow = (column, height) => {
        if (this.state[column] == rightArrow) {
            this.setState({ [column]: downArrow, nameRowHeight: this.state.nameRowHeight + height });
        } else {
            this.setState({ [column]: rightArrow, nameRowHeight: 0 });
        }
    }

    displayProcessingLayer(data, parentData) {
        if (this.state.name == rightArrow) {
            let returnDivs = [];
            returnDivs.push(<div style={{ gridColumn: 2, gridRow: 'span ' + 1 }} className="item2"> <div>{data.length + " Processing" + (data.length > 1 ? "s" : "")}</div> </div>);
            returnDivs.push(<div className='item2'><div>{data.reduce((sum, processingData) => sum = sum + processingData.quantityLayer.length, 0) + " Variants"} </div> </div>)
            return returnDivs;
        }
        return data.map(processingData => {
            let returnDivs = [];
            returnDivs.push(this.displayEachProcessing(processingData));
            return returnDivs
        })
    }

    displayEachProcessing(processingData) {
        return <ProcessingLayer processingData={processingData} changeNameHeight={this.changeNameHeight} />
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

                <div className="item2" id="name-container" style={this.getRowSpan('name', nameRowWidth, this.props.data)}>
                    <div>
                        <StickyContainer>
                            <Sticky>{({ style }) => <span style={style}> <img src={this.state.name} style={{ width: 10, height: 10 }} onClick={() => { this.toggleArrow('name', this.props.data.processingLayer.length) }} />{this.props.data.name}</span>}</Sticky>
                        </StickyContainer>
                    </div>
                    <br /> <span className="light">{this.props.data.numberOfRecipes} Recipes </span>


                </div>
                {this.displayProcessingLayer(this.props.data.processingLayer, this.props.data)}
            </div>
        );
    }





    getRowSpan(column, rowHeight, data) {
        // return({ gridRow: '1 / span ' + this.state.nameRowHeight })
        if (this.state.nameRowHeight === 0) {
            return ({ gridRow: '1 / span ' + 1 })
        }
        return ({ gridRow: '1 / span ' + this.state.nameRowHeight })
    }

    processingDataColumnSpan(spanRows) {
        return ({
            gridRow: 'span ' + spanRows,
            gridColumn: 2
        })
    }
}

export default Variant;