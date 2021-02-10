export const EKLE="EKLE";
export const TEMIZLE="TEMİZLE";
export const ISARETLE="ISARETLE";

export const listeyeEkle=(text)=>{
        return{
            type:EKLE,
            payload:text
        }
}

export const listeyiIsaretle=(id)=>{
    return{
        type:ISARETLE,
        payload:id
    }
}

export const temizle=()=>{
    return{
        type:TEMIZLE,
        payload:true
    }
}