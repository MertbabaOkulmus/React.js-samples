import React,{useState} from "react";

const ilkdeger=()=>{
    console.log("çalışıyor");
    return 0;
}

const UseStates=()=>{
    const [sayac,setSayac]=useState(()=>{//sürekli ilk değer alma işlemi yapmaması için bu işlemi yaptık
        console.log("useState çalışıyor!");
        return 0;
    });

    const artır=()=>{
        setSayac(prev=> prev + 1)
    }

   const  azalt=()=>{
        setSayac(prev => prev - 1)
    }
    return(
        <div>
            <button onClick={artır}>+</button>
            <p>{sayac}</p>
            <button onClick={azalt}>-</button>
        </div>
    )
}

export default UseStates;
