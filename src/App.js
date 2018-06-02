import React, { Component } from 'react';
import './App.css';
import Accordion from './Accordion';
import Modal from './Modal';

class App extends Component {
  constructor() {
    super()
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      openModal: false,
      index: 0
    };
    this.handleEditClick = this.handleEditClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.update = this.update.bind(this);
  }

  update(item){
    var i = this.state.index;
    var items = [...this.state.items];
    items[i] = item;
    this.setState({items:items});
  }
  
  handleEditClick(index){
    this.setState({openModal:true,index:index});
  }

  closeModal(){
    this.setState({openModal:false});
  }

  componentDidMount() {
    fetch("https://api.myjson.com/bins/k8kju")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      /*var a = [{"title":"Pumpkin Pie","ingredients":["Pumpkin Puree","Sweetened Condensed Milk","Eggs","Pumpkin Pie Spice","Pie Crust"]},{"title":"Spaghetti","ingredients":["Noodles","Tomato Sauce","(Optional) Meatballs"]},{"title":"Onion Pie","ingredients":["Onion","Pie Crust","Sounds Yummy right?"]}];
      this.setState({
        isLoaded: true,
        items: a
      });*/
    }

  render() {
    const { error, isLoaded, items, index } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Recipe Box</h1>
          </header>
          <Accordion list={items} handleEditClick = {this.handleEditClick}>

          </Accordion>
          {
            this.state.openModal?<Modal item={items[index]} closeModal = {this.closeModal} update={this.update}></Modal>:null
          }
        </div>
      );
    }
  }
}

export default App;