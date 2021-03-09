import React from 'react'
import {Grid} from "semantic-ui-react";
import SidePanel from './components/SidePanel/SidePanel';
import ChatPanel from "./components/ChatPanel/ChatPanel";
import { useSelector } from "react-redux";
const App =()=> {
    const currentChannel=useSelector((state)=>state.channels.currentChannel)   

    return (
      <Grid columns="2" style={{background:"#eee", height:"110vh"}}>
        <Grid.Column width="3">
          {/* Sidebar */}
          <SidePanel></SidePanel>
        </Grid.Column>

        <Grid.Column width="13" style={{background:"#fff" }}>
          {/* Chat Panel */}
         {currentChannel && <ChatPanel currentChannel={currentChannel} />}  {/* eğer currentChannel(mevcut kanal) tanımlı değilse gösterme, eğer tanımlı ise ChatPanel ı hem göster hemde   prop olarak currentChannel(mevcut kanal) bilgisini gönder ChatPanel a*/}
        </Grid.Column>
      </Grid>
    )
  
}

export default App
