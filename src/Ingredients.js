import React, { Component } from 'react';

class Ingredients extends Component{
    constructor(props){
        super(props);
        this.handleEditClick = this.handleEditClick.bind(this);
    }
    handleEditClick(){
        this.props.handleEditClick(this.props.rowId)
    }
    render (){
        console.log(this.props.ing);
        return (
            <div className={this.props.className}>
                {this.props.ing.map((ing,index) => <div key={index}>{ing}</div>)}
                <button onClick={this.handleEditClick}>
                    Edit
                </button>
            </div>
        )
    }
}

export default Ingredients;