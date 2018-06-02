import React, { Component } from 'react';
import Ingredients from './Ingredients';
import './Section.css';

class Section extends Component{
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.handleClick(this.props.rowId);
    }
    render(){
        let className = this.props.id === this.props.rowId ? 'open' : 'close';
        return(<li >
                    <div className='header' onClick={this.handleClick}>{this.props.item.title}</div>
                    <Ingredients className={className} handleEditClick = {this.props.handleEditClick} rowId = {this.props.rowId} ing = {this.props.item.ingredients}></Ingredients>
                </li>)
    }
}

export default Section