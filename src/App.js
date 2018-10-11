import React, { Component } from 'react';
import './App.css';
import {GoogleApiWrapper} from 'google-maps-react';





class App extends Component {

  render() {
    return (
      <div className="App">

<header>
  <br />
    <br />
      <h1 className='display-1'>I am Angelica</h1>
    <br />
  <br />
</header>


<img src={require('./image(1).jpeg')} alt="Lamada" height="700"/>

<img src={require('./VR.webp')} alt="Lamada" height="700"/>


    <div className="card" id="negrita">
      <div className="card-body">
        <br/><br/><br/>
        <img src={require('./logo.jpg')} alt="Lamada" height="300"/>
          <br/>
            <br/>
              <br/>
              <a href="https://quien-quiere-ser-millonario.herokuapp.com" className="btn btn-primary">Lets play</a>
              <a href="https://github.com/angelicapenaloza?tab=repositories" className="btn btn-primary ml-4">GitHub</a>
              <br />
            <br />
      </div>
    </div>

    <div className="card" id="azul">
      <div className="card-body">
        <h5 className="card-title">The fox, the cabbage and the rabit</h5>
        <img src={require('./Fox.jpeg')} alt="Lamada" height="200"/>
          <br/><br/><br/>
            <a href="#" className="btn btn-primary">Lets play</a>
          <br/>
        <br/>
      </div>
    </div>


    <br/><br/><br/>
          <iframe width="966" height="386" src="https://www.youtube.com/embed/q4k8ZHwkc40" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <br/><br/><br/>


      </div>
    );
  }
}

export default App;
