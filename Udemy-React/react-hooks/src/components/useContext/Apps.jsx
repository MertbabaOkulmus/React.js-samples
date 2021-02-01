import React,{useState,useContext} from "react";
import {render} from "@testing-library/react";

export const lightTheme={
    type:"light",
    body:"#E2E2E2",
    text:"#363537",
    toggleBorder:"#FFF",
    gradient:"linear-gradient(#39598A,#79D7ED)",
};

export const darkTheme={
    type:"dark",
    body:"#363537",
    text:"#FAFAFA",
    toggleBorder:"6B8096",
    gradient:"linear-gradient(#091236,#1E215D)"
};

const ThemeContext=React.createContext(null);

function Apps(){
    const [tema,setTema]=useState(darkTheme); 
    const temaDegisim=()=>{
        if (tema.type==="dark") {
            setTema(lightTheme);
        }
        else{
            setTema(darkTheme);
        }
    }
    return(
        <div className="App">
            <button onClick={()=>temaDegisim()}>{tema.type==="dark" ? "Light Team a geç":"Dark Team a geç"}</button>
            <ThemeContext.Provider value={tema}>
                <Kare/>
            </ThemeContext.Provider>
        </div>
    );
}

export default Apps;


const Kare=()=>{
    const tema=useContext(ThemeContext);//tema degerim ThemeContext deki value ile aynı değeri tutuyor 
    return(
        <div style={{background:`${tema.gradient}`}}>
            Tema:{tema.type}
        </div>
    )
}