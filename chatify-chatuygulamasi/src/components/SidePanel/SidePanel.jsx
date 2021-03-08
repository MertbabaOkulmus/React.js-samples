import React,{useState} from 'react'
import { Popup, Menu, Icon, MenuItem, MenuHeader } from "semantic-ui-react";
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
            color="brown"
            fixed="left"//sola yapıştır
            style={{
                width: "346px",
                fontSize: "1.3rem",
            }}
        >
            <MenuItem>
                {/* User Panel : o an login olan kullancının adı üst tarafta yazıcak*/}
                <UserPanel/>
            </MenuItem> 

            <MenuItem>
                <MenuHeader>
                        Kanallar
                        <span style={{float:"right"}}>
                            <Popup 
                            content="Yeni Kanal oluştur" 
                            trigger={<Icon name="add" onClick={event=>handleOpen()}/>}>                               
                            </Popup>
                        </span>
                </MenuHeader>
                {/* Channels: kanalların listelendiği alan  */}
                <ChannelList/>
                
                
            </MenuItem>
        </Menu>

        {/* Create channel form */}
        <CreateChannelForm open={open} onOpen={handleOpen} onClose={handleClose}/>
        </>
    )
}

export default SidePanel
