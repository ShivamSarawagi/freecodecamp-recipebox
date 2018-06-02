import React, { Component } from 'react';
import Section from './Section';
import './Accordion.css';

class Accordion extends Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            id:null
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(key){
        if(this.state.id === key){
            this.setState({
                id: null
            });
        }else{
            this.setState({
                id: key
            });
        }
    }
    render (){
        return (
            <div>
                <ul>
                    {this.props.list.map(
                        (item,index) => <Section item = {item} handleEditClick = {this.props.handleEditClick} handleClick={this.handleClick} id={this.state.id} rowId={index} key={index}></Section>)
                    }
                </ul>
            </div>
        )
    }
}

export default Accordion;