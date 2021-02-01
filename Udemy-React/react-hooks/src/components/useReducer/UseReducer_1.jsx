import { render } from "@testing-library/react";
import React,{useState,useEffect,useReducer} from "react";

const baslangic_durumu={// Usereducer karmaşık yapılarda kullanıldığı için ilk değer ataması bir obje şeklinden birden fazla değişkenin atması yapılarak da kullanıla bilir, zaten tek değer varsa usereducer yerine usestate kullanmak daha mantıklı
    count:0
}

const reducer=(state,action)=>{//action form üzerinde bişey değiştirme yazı yazma sayı arttırma azaltma bunlar birer action dur
    switch(action.type){
      case 'artir':
          return {count: state.count+1}
      case 'azalt':
          return {count: state.count-1}
    }
}

const useReducer_1=()=>{
    // const [deger,setDeger]=useState(0);  useState kullanım örneği
    const [state,dispacth]=useReducer(reducer,baslangic_durumu ); // state: obje string int herşey olabilir, dispact: state i güncelleyen fonksiyon görevi görür
    //useReducer; iki parametre alır ilki reducer: bunun yapacağı iş state i güncellemek dir
    // baslangic_durumu objesi direk state e aktarılır 
    const Arttır=()=>{
        //setDeger(prevDeger=>prevDeger+1) useState kullanım örneği

        dispacth({type:"artir"});//reducer a tpye ı artır olan bişey gönderiyor
    }

   const Azalt=()=>{
        //setDeger(prevDeger=>prevDeger-1) useState kullanım örneği

        dispacth({type:"azalt"});//reducer a tpye ı azalt olan bişey gönderiyor
    }
    
    return(
        <React.Fragment>
            <div>{state.count}</div>
            <button onClick={()=>Arttır()}>+</button>
            <button onClick={()=>Azalt()}>-</button>
        </React.Fragment>
    )
}

export default useReducer_1;