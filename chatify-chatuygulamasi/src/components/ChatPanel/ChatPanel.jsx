import React, { useState, useRef,useEffect } from 'react'
import { Segment, Header, Icon, Comment, Form, Input, Button, SearchResult } from "semantic-ui-react";
import { useFirebase } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { useFirebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";
import Message from "./Message";
const { uuid } = require("uuidv4");

const ChatPanel = ({ currentChannel }) => {
    useFirebaseConnect([
        {
            path: `/message/${currentChannel.key}`,
            storeAs: "channelMessage",
        },
    ]);
    const channelMessage = useSelector(state => state.firebase.ordered.channelMessage);//useSelector ile redux stor dan kanal mesajlarını aldık 
    const profile = useSelector(state => state.firebase.profile); //name ve avatar bilgileri için
    const currentUserId = useSelector(state => state.firebase.auth.uid) //id bilgisini almak için
    const firebase = useFirebase();
    const [searchTerm, setSearchTerm] = useState("");
    const [content, setContent] = useState("");

    const fileInputRef = useRef(null); //add icon una basılınca input un tetiklenmesi için , inputu da görünmez yaptık sadece add iconu gözüküyor
    const messagesEndRef=useRef(null);

    useEffect(()=>{//sayfa her render edildiğinde scrollu aşağı indirmek için yapıldı 
        messagesEndRef.current.scrollIntoView({ 
            //açıklama yapacaktım fakat hiçbirley anlamadım :( 15. ders son dk larda yapıldı 
            behaviour:"smooth",
            block:"end"
        });
    })

    const hanleSubmit = (event) => {
        event.preventDefault();//forma her veri girilğidinde metod çalışınca sayfayı render etmesin 

        if (content !== "") {
            const message = {
                content,
                timestamp: firebase.database.ServerValue.TIMESTAMP,//mesaj server a kaydolduğunda otomatik olarak timestap verisi oluşturuyor olacak
                user: {// name ve avatar bilgilerini profil verisinden alıyoruz useSelect ile verileri alacağız
                    id: currentUserId,
                    name: profile.name,
                    avatar: profile.avatar
                },
            };
            //mesajı oluşturduk şimdi mesajı firebase ye kaydetmemiz gerekiyor
            //message/currentChannel.key mesajı o an seçili olan kanalın altına kaydetmek için, her kanalın özel anahtarını kullanıyoruz ki mesajlar kanallar arasında karışmasın 
            // message/blabalbal örneğin böyle bi yol daha önce oluşmadığı için ilk kez mesaj kaydedilince önce o yol oluşur sonrasonra da o diğer mesajlar için yol varsa direk oraya kaydolur mesaj 
            firebase.push(`message/${currentChannel.key}`, message) //("mesajı nereye kaydetmek istiyorsak oranın yolu", "kaydedilecek mesaj objemiz                    ")
                .then(() => {
                    setContent(""); //mesajı kaydettikten sonra mesaj yazan yeri temizledik 
                })
                .catch()
        }

    }

    const uploadMedia = (event) => {
        const file = event.target.files[0];//sadece tek dosya yüklemesini sağlıyoruz

        if (file) {
            const storageRef = firebase.storage().ref();
            const fileRef = storageRef.child(`chat/public/${uuid()}.jpg`) //dosyayı kaydedeceğimiz yolu oluşturduk ve belirledik  uuid ile random bir string oluştururuz, 
            return fileRef
                .put(file)// fileRef yoluna kaydet file dosyasını
                .then((snap) => {
                    fileRef.getDownloadURL()//yükledğimiz dosyanın url bilgisine eriştik
                        .then(downloadURL => {
                            sendMediaMessage(downloadURL);
                        })
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    const sendMediaMessage = url => {//firbase e kaydettiğimiz dosyaların url ini de firebase e kaydedelim dedik
        const message = {
            image:url,
            timestamp: firebase.database.ServerValue.TIMESTAMP,//mesaj server a kaydolduğunda otomatik olarak timestap verisi oluşturuyor olacak
            user: {// name ve avatar bilgilerini profil verisinden alıyoruz useSelect ile verileri alacağız
                id: currentUserId,
                name: profile.name,
                avatar: profile.avatar
            },
        };

        firebase.push(`message/${currentChannel.key}`,message)
        .then(()=>{
            console.log("File message sent")
        })
    } 
   /*mesaj filitreleme */
  const filterMessages=()=>{
        const regex=new RegExp(searchTerm,"gi"); //ilk parametrede aranacak kelime ,gi küçük harf büyük harfe dikkat etmemesi için yazıldı 
        const searchResults=[...channelMessage].reduce((acc,message)=>{
            // filitreleme şuan sadece text ler için var çünki value.content dedik , image ler value.image nin altında idi
            if(message.value.content && message.value.content.match(regex) || message.value.user && message.value.user.name.match(regex)){// message.value.content tanımlıysa ve regex i salıyor ise bunu döndür
                 acc.push(message);   //şartları sağlıyor ise bunu döndür
            }
            
            return acc;
        },[]);
        return searchResults
    }

    const renderMessage=searchTerm  !== "" ? filterMessages():channelMessage // kullanıcı search alanına birşey yazmışssa filitrelenmiş measajlar ı göster, alan boş sa channelMesage yi yani tüm mesajları göster

    return (
        <>
            {/* Messages Header */}
            <Segment clearing>
                <Header as="h3" floated="left">
                    <span>
                        <Icon name="hashtag" />
                /////////////////////////////   {currentChannel.createdBy.name}
                    </span>
                </Header>

                {/* Search Messages */}
                <Header as="h3" floated="right">
                    <Input
                        size="mini"
                        icon="search"
                        name="searchTerm"
                        placeholder="Mesajlarda ara..."
                        value={searchTerm} //searchTerm bir arama terimi 
                        onChange={event => setSearchTerm(event.target.value)}
                    />
                </Header>
            </Segment>

            {/*Messages*/}
            <Segment style={{ position: "fixed", top: 55, bottom: 70, width: "81%" }}>
                <Comment.Group
                    style={{
                        height: "80vh",
                        overflowY: "auto",//y ekseninde mesajlar sınırları aştığında otomatik scroll ekler
                        maxWidth: "100%"
                    }}
                >
                    {
                        //Kanal mesajlarını göstereceğimiz alan channelMessage
                        renderMessage && renderMessage.map(({ key, value }) => (//channelMessage eğer varsa(yani yüklendi ise  işlemleri yap dedik && sayesinde)
                            <Message key={key} message={value} />
                        ))
                    }
                    
                    <div ref={messagesEndRef}/>{/*her yeni mesajda scroll çubuğunun otomatik olarak aşağı inmesini sağlamak için*/}

                </Comment.Group>
            </Segment>

            {/* Send New Message  */}
            <Segment style={{ position: "fixed", bottom: 0, width: "85%", display: "flex" }}>
                ////////////////////////////
                 <Button icon onClick={() => fileInputRef.current.click()}>   {/* icon butonuna tıklanınca useRef sayesinde file input una tıklamış gibi oluyoruz, inputu görünmez iconu görünür kılıp daha güzel bir görüntü elde ediyoruz  */}
                    <Icon name="add" />
                    <input
                        type="file"
                        name="file"
                        ref={fileInputRef}
                        onChange={uploadMedia}
                    />
                </Button>
                <Form onSubmit={hanleSubmit} style={{ flex: "1" }}> {/* flex:1 genişleye bildiğin kadar genişle  */}
                    <Input
                        fluid
                        name="message"
                        value={content}
                        labelPosition="left"
                        onChange={event => setContent(event.target.value)} // yazılan mesajı content e kaydet
                        placeholder={`#${currentChannel.name}`} /> {/*fluid: bütün ekranı kaplamasını sağladı value ye content dedik yani mesaj içeriğimiz */}
                </Form>
            </Segment>
        </>
    )
}

export default ChatPanel
