import { render } from "@testing-library/react";
import React,{useEffect,useState} from "react";

const Cleanup =()=>{

    useEffect(()=>{
        const interval=setInterval(seyHello,1000);//seyHello metodunu her bir sn de bir çalıştır

        return ()=>{//return deyip bir fonk döndürüyoruz bu fonksiyonun içerisinde de o an ne yaptı isek onun temizleme islemini gerçekleştiriyoruz
            //temizleme işlemi yapmaz isek bir kere başlatınca birdaha durduramayız, örneğin Cleanup.jsx dosyası app de çalışma anında  gizlense dahi interval değeri artar
            // fakat return ile clearInterval yapılırsa temzilenir ve durur
            clearInterval(interval);//interval ı temizle
        }

    },[])//sadece bir defa çalışmasını istediğimiz için boş dizi yaptık

   const  seyHello=()=>{
        console.log("hello");
    }

    return(
        <div>
        Merhaba
        </div>
    )
}

export default Cleanup;