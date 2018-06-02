import React, { Component } from 'react';
import EditForm from './EditForm'
import './Modal.css';

class Modal extends Component{
    constructor(props){
        super(props);
        console.log(this.props.item)
        this.closeModal = this.closeModal.bind(this);
    }
    closeModal(){
        this.props.closeModal();
    }
    render(){
        return(
            <div className='modal-container'>
                <div className='modal-overlay' onClick={this.closeModal}>
                    
                </div>
                <div className='modal-content'>
                    <EditForm item={this.props.item} update={this.props.update}></EditForm>
                </div>
            </div>
        )
    }
}

export default Modal