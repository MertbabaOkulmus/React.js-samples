import React,{useState,useEffect,useRef} from 'react'
import moment from "moment";
import {makeStyles} from "@material-ui/core/styles";
import { localeData } from 'moment';

const useStyles = makeStyles(theme =>({
    counter:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        color:"#fff",
        fontSize:22,
        border:"1px solid #fff",
        borderRadius:4,
        background:"rgba(0,0,0,0.5)",
    },
}))
const GeriSayim =()=>{
    const classes=useStyles();
    const [date,setDate]=useState(()=>{
        const localDate=localStorage.getItem("date");//local storage den key i date olan veriyi çek
        return localDate ? moment(JSON.parse(localDate)):moment().add(10,'hours')//localDate de veriler tanımlı ise onu kullan veri tanımlanmamış ise moment add kullan
        //moment().add(10,'hours')  şuanda ki saatin üzerine 10 saat ekle, dönen return u date e eşitler
    })

    const [hours,setHours]=useState("00");//başlangıç saati
    const [minutes,setMinutes]=useState("00");//başlangıç dakikası
    const [seconds,setSeconds]=useState("00");//başlangıç saati

    let aralık=useRef();

    useEffect(()=>{
        geriSayimBaslat();
        return clearInterval(aralık.current);
    },[date]);//sürekli çalışma sadece date değeri değiştiği zaman çalış

    const geriSayimBaslat=()=>{
        aralık=setInterval(()=>{
            localStorage.setItem("date",JSON.stringify(date));//her dk local storage e date ı kaydet
            const now=moment();//şu an ın tarihini now a attık
            const zamanAralıgı=date-now;//şuan ile 10 saat arasındaki fark  
            const hours =moment.duration(zamanAralıgı).hours();//zamanAralıgı parametresinin saatini
            const minutes=moment.duration(zamanAralıgı).minutes();// zamanAralıgı parametresinin dk
            const seconds=moment.duration(zamanAralıgı).seconds();// zamanAralıgı parametresinin sn

            if(zamanAralıgı<0){//zaman aralığı dolduysa
                clearInterval(aralık.current);//aralık(interval) ı temizle
            }
            else{//zamanAralığı dolmadyısa useState leri set ederiz  
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            }

        },1000)//içerideki kodu bir saniyede bir tekrar et
    }

    return(
        <div className={classes.counter}>
            <div>
                <p>{hours}</p>
                <p><small>Saat</small></p>
            </div>
            <div>
                <p>{minutes}</p>
                <p><small>Dakika</small></p>
            </div>
            <div>
                <p>{seconds}</p>
                <p><small>Saniye</small></p>
            </div>
        </div>
    )
}
export default GeriSayim;