import React, { useState } from 'react'
import { Segment, Header, Icon, Comment, Form, Input, Button } from "semantic-ui-react";
import { useFirebase } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { useFirebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";
import Message from "./Message";

const ChatPanel = ({ currentChannel }) => {
    useFirebaseConnect([
        {
            path:`/message/${currentChannel.key}`,
            storeAs:"channelMessage",
        },
    ]);
    const channelMessage=useSelector(state=>state.firebase.ordered.channelMessage);//useSelector ile redux stor dan kanal mesajlarını aldık 
    const profile = useSelector(state => state.firebase.profile); //name ve avatar bilgileri için
    const currentUserId = useSelector(state => state.firebase.auth.uid) //id bilgisini almak için
    const firebase = useFirebase();
    const [searchTerm, setSearchTerm] = useState("");
    const [content, setContent] = useState("");
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
                    setContent() //mesajı kaydettikten sonra mesaj yazan yeri temizledik 
                })
                .catch()
        }

    }
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
                        channelMessage && channelMessage.map(({key,value})=>(//channelMessage eğer varsa(yani yüklendi ise  işlemleri yap dedik && sayesinde)
                            <Message key={key} message={value}/>
                        ))
                    }
                </Comment.Group>
            </Segment>

            {/* Send New Message  */}
            <Segment style={{ position: "fixed", bottom: 0, width: "85%", display: "flex" }}>
                ////////////////////////////
                 <Button icon>
                    <Icon name="add" />
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
