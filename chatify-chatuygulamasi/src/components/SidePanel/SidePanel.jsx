import React,{useState} from 'react'
import { Popup, Menu, Icon, MenuItem, MenuHeader } from "semantic-ui-react";
//import { TwitterPicker } from "react-color";
import CreateChannelForm from "../Channels/CreateChannelForm";
import ChannelList from "../Channels/ChannelList";
import UserPanel from "../UserPanel/UserPanel";
//Menu nün ilk hali yatay yani horizantal, dikey yapmak için vertical yazıyoruz
const SidePanel = () => {
    const [open,setOpen]=useState(false);
    const handleOpen=()=>{
           setOpen(true);
    }
    const handleClose=()=>{
        setOpen(false);
    }
    return (
        <>
        <Menu
            vertical
            inverted
            secondary
            fixed="left"
            style={{
              width: "346px",
              fontSize: "1.2rem",
              background:"" ,
              height: "100vh",
            }}
        >
            <MenuItem>
                {/* User Panel : o an login olan kullancının adı üst tarafta yazıcak*/}
                <UserPanel/>
            </MenuItem> 

            <Menu.Item>
                <Menu.Header>
                        Kanallar
                        <span style={{float:"right"}}>
                            <Popup 
                            content="Yeni Kanal oluştur" 
                            trigger={<Icon name="add" onClick={event=>handleOpen()}/>}>                               
                            </Popup>
                        </span>
                </Menu.Header>
                {/* Channels: kanalların listelendiği alan  */}
                <ChannelList/>
                
                
            </Menu.Item>
        </Menu>

        {/* Create channel form */}
        <CreateChannelForm
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
        />
        </>
    )
}

export default SidePanel
