import React,{useState, useEffect} from 'react';

const SayacOrnegi =()=>{
    //hook lar herzaman en tepede çağrılır
    const [sayac,setSayac]=useState(0);
    
    useEffect(//her render dan sonra useEffect çalışır, useeffect çalışıncada içindeki fonksiyon çağrılır(çalıştırılır)
        ()=>{       
        document.title=sayac;
    })

    function arttir() {
        setSayac(sayac + 1);
    }

     return(
        <button onClick={arttir}>{sayac}</button>

     )
}

export default SayacOrnegi; 