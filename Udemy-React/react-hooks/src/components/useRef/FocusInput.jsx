import React,{useState,useRef,useEffect} from "react";

//referanslar genelde dom a erişmek için kullanılırlar

const FocusInput =()=>{
    const inputRef=useRef(null);
    const sayac=useRef(0);
    //const btnRef=useRef(null); örnek yapıldı inp basılınca btn seçili olsun diye
    //const [deger,setDeger]=useState("");
    const focuss=()=>{
        inputRef.current.focus();
        inputRef.current.value="dnlfsdnlf"
        //setDeger("mertbaba"); current.value ile de yapabildik aynı işlemi
    }
   
    /*const btn_foc=()=>{
        btnRef.current.focus();
    }*/
     
     useEffect(()=>{
         sayac.current =sayac.current + 1; //component her Rrender ettdiğinde sayacı bir artıtması gerek fakat
         //burda asla buttona basılınca sayaç artmaz, çünkü useRef işlemlerinde componentler Rrender olmaz bu yüzden useEffect sadece ilk sefer çalışır
     })

    return(
        <React.Fragment>
            <input  ref={inputRef} type="text"/>
            <button onClick={()=>focuss() } > Odakla </button>
            <p>{sayac.current}</p>
        </React.Fragment>
    )
}

export default FocusInput;