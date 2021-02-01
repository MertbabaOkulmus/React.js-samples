import React,{useEffect, useMemo,useState} from "react";

//uzun süren pahalı fonksiyon çağrılarının sonuçlarını saklayarak ve aynı girdiler tekrar 
//oluştuğunda önbelleğe alınan sonuçları geri döndürerek programları hızlandırmayı amaçlayan bir tekniktir

const MemoizedSayac =()=>{
    const [sayacBir,setSayacBir]=useState(0);
    const [sayacIki,setSayacIki]=useState(0);

    const CiftMi= useMemo(()=>{
        console.log("pahali işlem çalışıyor");
        let i=1
        while(i<500000000) i++;
        if(sayacBir %2==0){
            return "Çift"
        }
        else return "Tek"},[sayacBir]); // içerdeki fonksiyon sadece sayaçbir in değeri değişince execute et dedik
   

    return(

        <React.Fragment>
        <div>
             <button onClick={()=>setSayacBir(sayacBir+1)}>{sayacBir}</button>
             <span>{CiftMi}</span>
        </div>

        <div>
             <button onClick={()=>setSayacIki(sayacIki+1)}>{sayacIki}</button>   
        </div>
        </React.Fragment>
    )
}

export default MemoizedSayac;