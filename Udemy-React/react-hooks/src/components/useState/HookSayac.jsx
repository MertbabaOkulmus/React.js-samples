import React,{useState} from "react";
//state kullanmak için kullandığımız zamana, useState hook unu kullanırız adından da anlaşılacağı gibi(state i kullan)

const HookSayac =()=>{
    //Hook kurallarından dolayı hook lar en yukarda çağrılır herzaman
    const[sayac,setSayac]=useState(0)//0 useState in default değeri olur
    //useState den bir sayac ve bir setSayac döner
    //sayac :0 değeri ile başlatılmış bir değişken dir
    //setSayac: sayac ı update edebilmek için setSayac metodunu döndürür

    return(
        <div>
            {/* <button onClick={()=>setSayac(sayac+1)}>{sayac}</button>  sayacı direk değiştirmek sağlıklı değildir*/} 
            <button onClick={()=>setSayac(prevSayac =>prevSayac+1)}>{sayac}</button> {/*direk değiştirmek yerine hook larda da previse kullanmak gerekir*/}

        </div>
    )
}
export default HookSayac;