import React, { Component } from 'react';


class Cartas extends Component {
  render(){
    return(

      <div className="card mt-4">
        <div className="card-body">
          <img src={require('../logo.jpg')} alt="Lamada" height="100"/>
          <br/>
          <a href="https://quien-quiere-ser-millonario.herokuapp.co" className="btn btn-primary">Lets play</a>
        </div>
      </div>

    )
  }
}

export default Cartas;
