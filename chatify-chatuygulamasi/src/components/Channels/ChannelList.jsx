import React,{useState,useEffect} from 'react'
import { useFirebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";
import { useSelector, useDispatch } from "react-redux";
import { Menu} from "semantic-ui-react";
import Fallback from '../Fallback';
import { setCurrentChannel } from "../../store/actions/channel";

const ChannelList = () => { 
    const dispatch = useDispatch();
    useFirebaseConnect([{ path: "channels" }]);//path e dinleyeceğimiz alanı belirtiyoruz
   
    const channels = useSelector((state) => state.firebase.ordered.channels); //channels ları redux tan aldık
    const currentChannel = useSelector((state) => state.channels.currentChannel);
    const [mounted, setMounted] = useState(false);//ilk render ın yapılıp yapılmadığı kontrolü

    useEffect(()=>{//sürekli çalışıyor yaşam döngüsü boyunca
            if(!mounted && !isEmpty(channels)){// ilk render da ve chanallar  boş değilse
                const {key, value}=channels[0];//ilk kanalın key value sini al
                setActiveChannel({key,...value});// ve setActive ye gönder 
                setMounted(true);//ilk render dan sonra ture olur
                //sayfa ilk yüklendiğinde hermzaman ilk kanal seçili olarak gelemsi için ayarlandı 
            }
            
    }, [isLoaded(channels)])
    const setActiveChannel = (channel) =>{
            // setCurrentChannel(channel);// malesef böyle çalışmaz
            dispatch(setCurrentChannel(channel));
    }

    if (!isLoaded(channels)) {//channels yüklenmedi ise 
        return <Fallback/>
    }

    if (!isEmpty(channels)) {//channels verisi boş ise
        return "No channels...";
    }

    return (

        // <Menu.Menu>
        //     {
        //         channels.map(({ key, value }) => {
        //             <Menu.Item key={key}
        //                 name={value?.name}//value nin name ini alır, ? nin görevi eğer value tanımlıysa demek oluyor
        //                 as="a"
        //                 icon="hashtag"
        //                 active={currentChannel?.key===key}//curentcahnnel null değilse key bilsini al 
        //                 onClick={()=>setActiveChannel({key,...value})}
        //             />
        //         })
        //     }
        // </Menu.Menu>

        <Menu.Menu>
        {channels.map(({ key, value }) => (
          <Menu.Item
            key={key}
            name={value?.name}
            as="a"
            icon="hashtag"
            active={currentChannel?.key === key}
            onClick={() => setActiveChannel({ key, ...value })}
          />
        ))}
      </Menu.Menu>
    );
};

export default ChannelList;
