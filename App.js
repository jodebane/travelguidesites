import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
       maintitle: "",
       content: ""
    }
 }


  render() {
    return (
      <div className="App">

      <div className="app-main">
      <div className="App-header"> Washington DC - Travel Guide </div>
      <div className="App-info">

        <div className="App-image-block">


        </div>

        <div className="App-title-block">

        
        
        </div>


      

      </div>

      <div className="App-menu">

        <div className="btn">Getting There</div>


        

      </div>


      </div>

     

     

      </div>
    );
  }
}

export default App;
