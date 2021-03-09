import React from 'react'
import moment from "moment";
import {Comment, CommentAvatar, Image} from "semantic-ui-react";
import styles from "./message.module.css";

const Message = ({key,message}) => {
    const timeFromNow= timestamp => moment(timestamp).fromNow();
    return (<>///////////////////////
            <Comment>
               <Comment.Avatar src={message.user.avatar}/> {/*message.user.avatar redux store ya bakarsan bir url i temsil ediyor  */}
               <Comment.Content>
                   {/* mesajı yazan kişi */}
                   <Comment.Author as="a"> {message.user.name} </Comment.Author> 
                   {/* zaman bilgisi */}
                   <Comment.Metadata>  {timeFromNow(message.timestamp)} </Comment.Metadata>
                   {/* mesaj içeriğinin gözükeceği kısım */}
                   <Comment.Text>{message.content}</Comment.Text>
        
               </Comment.Content>
    
            </Comment>
            </>
        )
}

export default Message
