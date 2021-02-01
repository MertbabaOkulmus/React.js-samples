import React,{useState} from "react";

const ArrayveString =()=>{
    const [isim,setIsim]=useState("");
    const [malzemelerim,setMalzemelerim]=useState([]);//her ismi diziye eklemek için malzemelerim diye boş bir arry açıldı
   
    const listeyeEkle=(event)=>{
        event.preventDefault();
        setMalzemelerim(prevMalzemelerim =>[
            ...prevMalzemelerim,//önce içindeki eski malzemeleri diziye yazdırıyoruz
            {id:malzemelerim.length, item: isim}//eklenecek yeni malzemede eklenir  
        ]);
        setIsim();// listeye elaman eklendikten sonra, input kısmını sıfırlama 
    }
    return(
        <React.Fragment>
        <form onSubmit={listeyeEkle}>
            <input name="malzeme" type="text" value={isim} onChange={(event)=>setIsim(event.target.value)}/>
        </form>

        <ul>
            {
                malzemelerim.map(malzeme=>(
                   <li key={malzeme.id}>{malzeme.item}</li>     
                ))
            }
        </ul>
        </React.Fragment>
    )
}

export default ArrayveString;