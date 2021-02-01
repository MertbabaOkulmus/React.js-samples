import React, { Component } from "react";
//import Bir from './Bir'
//import {İki,Üç} from './İki'

//#region 
/*function App() {
  return (
    <div className="App">
       <Karsilama ad="mertbaba" yas="23"/>
       <KarsilamaClass ad="tuba" yas="23"/>
    </div>
  );
}

export default App;*/

//Functional component (Statless)
/*const Karsilama=(props)=>{
  return(
    <p>Merhaba Funciton component senin Adın {props.ad} ve Yaşın {props.yas}</p>
  )
}*/

//Class Component (stateful)
/*class KarsilamaClass extends Component{
  constructor(props){
    super(props)
    this.state={
      durum:"iyi",
      deger:33
    }
  }
  Artir=()=>{
     this.setState((previousState=>({
       deger:previousState.deger+1
     })))
  }
  Azalt=()=>{
   this.setState((previousState=>({
     deger:previousState.deger-1
   })))
  }
  render(){
    return(
      <div>
        Merhaba Class Component seni Adın {this.props.ad} ve Yaşın {this.props.yas}
        <p>{this.state.durum}</p>
        <p>{this.state.deger}</p>
        <button onClick={this.Artir}>Arttır</button>
        <button onClick={this.Azalt}>Azalt</button>
      </div>
    )
  }
}*/

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       durum: false,
//     };
//   }
//   durumBelirle = () => {
//     this.setState(previousState => ({
//       durum: !previousState.durum
//     }));
//   };
//   render() {
//     const {durum}=this.state;
//     if (durum) {
//       return (
//         <div className="App">
//           <button>Gizli button</button>
//           <button onClick={this.durumBelirle}>Button Göster</button>
//         </div>
//       );
//     } else {
//       return (
//         <div className="App">
//           <button onClick={this.durumBelirle}>Button Göster</button>
//         </div>
//       );
//     }
//   }
// }

// export default App;

/*export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      durum: false,
    };
  }
  durumBelirle=()=>{
    this.setState(preSte=>({
        durum:!preSte.durum
    }))
  }
  render() {
    const { durum }=this.state;
    return (
      <div className="App">
        {durum}
        <button>Gizli Button</button>
        <button className={this.durumBelirle}>Button Göster</button>
      </div>
    );
  }
}*/
//#endregion

const Kitap=props=>(
  <div>{props.kitap.isim} -- {props.kitap.adet}</div>
)
class App extends Component { 
  render() {
    const kitaplar=[
      {
        isim:'Suç ve Ceza',
        adet:30
      },
      {
        isim:'Dava',
        adet:12
      },
      {
        isim:'İnce Memed',
        adet:16
      }
    ]
    return (
     <React.Fragment> {/*iç içe yazılmış olan div tag larının önüne geçebilmek adına yazılır*/}
      <div>
        {kitaplar.map((item,key)=><Kitap kitap={item} key={key} />)}
        {/* <Bir/> */}
        {/* <İki/> */}
        {/* <Üç/> */}
      </div>
      </React.Fragment>
    )
  }
}
export default App;

