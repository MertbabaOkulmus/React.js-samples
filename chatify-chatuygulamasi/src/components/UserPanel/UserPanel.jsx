import React from 'react'
import {useSelector} from "react-redux";
import { useFirebase } from "react-redux-firebase";
import {Icon} from "semantic-ui-react"
const UserPanel = () => {
    const firebase=useFirebase();

    const profile=useSelector(state=>state.firebase.profile);//privateroute den dolayı profil bilgilerinin kesin olarak yüklendiğinden eminiz, o yüzden boşsa kontrolü yapmıyoruz

    const signOut=()=>{
         firebase.logout();//fonksiyon çağrılınca bizi direk dışarı atacaktır
    }
    return (
        <div style={{padding:"2px", display:"flex", justifyContent:"space-between"}}>
            <p>{profile?.name}</p>
            <div>
               <Icon name="sign out" onClick={()=>signOut()}/>  {/*çıkış yap icon u , tıklanınca login ekranına yönlendirme yapıyor*/}
            </div>
        </div>
    );
};

export default UserPanel
