import React,{ useState } from "react";

const Object =()=>{
    const [isim, setIsim]=useState({
        ad : "",
        soyad : ""
    }); //isim diye bir obje oluşturuldu, ad ve soyad parametreleri belirlendi ve bunlara ilk değer olarak boş atandı
    
    return(
        <form>
            <input name="ad" type="text" value={isim.ad} onChange={event =>setIsim({...isim ,ad: event.target.value})}/> {/*...isim isim state de ne varsa aynısını yaz sadece ad için value den gelene değerle değiştir
                                                                                                                          eğer sadece ad:event.target.value kullanırsak herseferinde sadece ad değerini yazar önceki soyad değerini yazmamz 
                                                                                                                          aynı durum soyad içinde ğeçerli sadece soyad: event.target.value  yazarsak herseferinde sadece soyad yazılır ad silinir*/}
            <br/>
            <input name="soyad" type="text" value={isim.soyad} onChange={event =>setIsim({...isim,soyad: event.target.value})} /> {/*benim state imi olduğu gini kopyala aynısı olsun, sadece soyad degerini event.target.value değerine eşitle */}
            <div>
                Ad:{isim.ad}
                <br/>
                Soyad:{isim.soyad}
            </div>
        </form>
    );
}

export default Object;