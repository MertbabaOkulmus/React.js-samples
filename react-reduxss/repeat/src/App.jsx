import React from 'react';
import './App.css';
import {connect} from "react-redux";
import {sayaciArttir,sayaciAzalt} from "./actions";

const  App=(props)=> {
  return (
    <div className="App">
    <button onClick={()=>{props.sayaciArttir()}}>Arttır</button>
    <div>{props.sayac}</div>
    <button onClick={()=>{props.sayaciAzalt()}}>Azalt</button>
    </div>
  );
}

const mapStateToProps=state=>{
    return{
      sayac:state.sayac
    };
};

export default connect(mapStateToProps,{sayaciArttir,sayaciAzalt})(App);
