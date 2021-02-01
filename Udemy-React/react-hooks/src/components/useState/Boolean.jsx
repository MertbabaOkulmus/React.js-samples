import React,{useState} from 'react';
//daha fazla oku yapma
const DahaFazlaOku=({text,max})=>{
    const [hidden,setHidden]=useState(true);  // parantez içindeki true ile ilk değer belirnenir, ilk deger true olsun
    if (text.length<=max) {
        return(   
            <span>
                {text}
            </span>
        );
    }
    else{
        return(
        <span>
           {hidden ? `${text.substr(0,max).trim()}...`:text}{/*eğer hidden true dönerse sadece 10 harf göster, eğer hidden false dönerse hepsini göster */}
           {hidden ? (
           <a onClick={()=>setHidden(false)}>Daha fazla göster</a>) //daha fazla göstere tıklandığı anda hidden değerini false yap, bu durumda hidden degeri false olunca bütün text degeri gözükecektir
           :
           (<a onClick={()=>setHidden(true)}>Daha az göster</a>)
           }
       </span>
        );
    }
     
}

export default DahaFazlaOku;
