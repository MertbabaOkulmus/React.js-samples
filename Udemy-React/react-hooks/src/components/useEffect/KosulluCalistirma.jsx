import React,{useState,useEffect} from "react";

const KosulluCalistirma =()=> {

    const [sayac,setSayac]=useState(0);
    const [name,setName]=useState("");
    useEffect(()=>{
        console.log("Sayaca Basıldı!!");
        document.title=sayac;
    },[sayac]);//ikinci parametre [] ile bu dizinin içine yazılan ne varsa sadece onun değişiminde harekete geçer useEffect
    
    useEffect(()=>{
        console.log("İnput a yazı yazıldı!!");
    },[name])
    
    return(
        <div>
              <input
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />

              <button onClick={()=>setSayac(sayac+1)} > {sayac} </button>           
        </div>
    ); 
};

export default KosulluCalistirma;