import React,{useCallback,useEffect,useState} from "react";
//useCallback de useMemo gibi performans arttırmak için kullanılır memo da return un çıktısı dönerken callback de fonksiyon döner geriye 
const Apps =()=>{

    const [sayi,setSayi]=useState(0);
    const [theme,setTheme]=useState("dark");

    const getItems=useCallback( ()=>{
        return [sayi,sayi+1,sayi+2]
    },[sayi])/*sadece sayı değiştiği zaman burdaki fonksiyon yeniden oluşturulur,
    useCallback kullanmaz isek  theme değeri de değiştiği zaman bu fonksiyon çalışır
    useMemo dese idik geri dönüşte returnu döndürürdü getItems e
    useCallback de ise direk fonksiyonu atar getItems in içine*/
    
    const backgroundColor= theme === "dark" ? "#000":"#fff";

    const temaKolu=()=>{
        if(theme==="dark"){
            setTheme("light");
        }
        else{
            setTheme("dark");
        }
    }

    return(
        <React.Fragment>
            <input type="number" value={sayi} onChange={e=>setSayi(parseInt(e.target.value))}/>
            <button onClick={()=>temaKolu()} style={{background:`${backgroundColor}`}}>Tema Değiştir</button>
            <ItemsList getItems={getItems}/>
        </React.Fragment>
    )
}

const ItemsList=({getItems})=>{
        const [items,setItems]=useState([]);

        useEffect(()=>{
            setItems(getItems());//getItems hala bir fonksiyon, memo kullansa idik fonksiyon olmazdı ve () kaldırırıdık memodaki örnk de yazptığımız gibi
            console.log("Itemleri Güncelliyorum!");
        },[getItems]);

        return(
            <div>
                <ul>
                    {items.map((item,index)=>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        );
}

export default Apps;
