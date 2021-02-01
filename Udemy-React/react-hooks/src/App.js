import React, { Component } from 'react'
import UseReducer_2 from "./components/useReducer/UseReducer_2";
//import UseReducer_1 from "./components/useReducer/UseReducer_1";
//import Apps from "./components/useCallback/Apps";
//import MemoizedSayac from "./components/useMemo/MemoizedSayac";
//import FocusInput from "./components/useRef/FocusInput";
//import Apps from "./components/useContext/Apps";
//import Cleanup from "./components/useEffect/Cleanup";
//import Posts from "./components/useEffect/Posts";
//import KosulluCalistirma from "./components/useEffect/KosulluCalistirma";
//import SayacOrnegi from "./components/useEffect/SayacOrnegi";
//import ArrayveString from "./components/useState/ArrayveString";
//import Object from "./components/useState/Object";
//import DahaFazlaOku from "./components/Boolean";
//import ClassSayac from "./components/ClassSayac";
//import HookSayac from "./components/HookSayac";

export default class App extends Component {
 /* cleanup.jsx için kullanıldı
 state={
    show:true
  }

  durum =()=>{
    this.setState(prev=>({
      show:!prev.show
    }));
  }*/
  render() {
    //const {show}=this.state
    return (
      <div>
       {/*  <ClassSayac/>{/*Class companent leri kullanarak yapma */}
       {/*  <HookSayac/>{/*Hook ları kullanarak yapma */}

       {/*<DahaFazlaOku 
          text={"selam ben mert react çalışıyorum :)"}
          max={10}
        />*/}

        {/* <Object/> */}

        {/* <ArrayveString/> */}
        
        {/* <SayacOrnegi/> */}

        {/* <KosulluCalistirma/> */}
        
        {/* <Posts/> */}

        {/* <button onClick={this.durum}>{show ? "Gizle":"Göster"}</button>
        {show && <Cleanup/>}   Show metodu doğru olduğu sürece cleanup metodunu göster */}

        {/* <Apps/> */}
     
        {/* <FocusInput/> */}

        {/* <MemoizedSayac/>   */}
        
        {/* <Apps/> */}

        {/* <UseReducer_1/> */}

        <UseReducer_2/>

      </div>
    )
  }
}
