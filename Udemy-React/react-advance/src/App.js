import './App.css';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Strictmodee from './Strictmodee';
import Counter from "./render-props/Counter";
import HoverCounter from "./render-props/HoverCounter";
import ClickCounter  from "./render-props/ClickCounter";
import DynamicImport from './Code Splitting ( Kod Bölümlemesi )/DynamicImport';
import LazyVeSuspense from './Code Splitting ( Kod Bölümlemesi )/LazyVeSuspense';

const themes={
  light:{
    foreground:'#000000',
    background:'#eeeeee'
  },
  dark:{
    foreground:'#ffffff',
    background:'#222222'
  }
}

// 1. Adım context oluşturalım.
const ThemeContext=React.createContext(themes.dark);

const ThemedButton=()=>{
  return (
    <ThemeContext.Consumer>{/*3. Adım Consumer oluşturma*/}
     {
       value =>(
        <button>Themed button :D {value.background}</button>    
       )
     }
    </ThemeContext.Consumer>
  );
}

const Toolbar=()=>(
  <ThemedButton/>
)

export default class App extends Component {
  render() {
    return (
      <div>
        <ThemeContext.Provider value={themes.dark}>{/*2. Adım Provider oluşturalım*/}
          <Toolbar/>
          <Strictmodee/>
        </ThemeContext.Provider>
        <PordalOrnek/>{/*Portal kullanılmıştır portal sayesinde index.html de ki root harisinde de başka div lere müdahale edilip render edile bilmektedir */}
     
        <Counter 
          render={(count,incrementCount)=>
          <HoverCounter count={count} incrementCount={incrementCount} />}/>
        <Counter 
          render={(count,incrementCount)=>
          <ClickCounter count={count} incrementCount={incrementCount} />}/>


          <DynamicImport/>
          <LazyVeSuspense/>
      </div>
    )
  }
}

const portal=document.getElementById('portal');

class PordalOrnek  extends Component {
  render() {
    return ReactDOM.createPortal(<h1>Portal Ornek</h1>,portal);
  }
}






