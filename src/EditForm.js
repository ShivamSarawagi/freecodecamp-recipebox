import React, { Component } from 'react';

class EditForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: props.item.title,
            ingredients: props.item.ingredients
        };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleIngChange = this.handleIngChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleTitleChange(e){
        this.setState({title:e.target.value});
    }
    handleIngChange(e){
        this.setState({ingredients:e.target.value});
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.update({title:this.state.title, ingredients:this.state.ingredients.split(",")});
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                Recipe:
                <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
                </label>
                <label>
                Ingredients:
                <textarea type="text" value={this.state.ingredients.toString()} onChange={this.handleIngChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default EditForm