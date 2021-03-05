import React,{useState} from 'react'
import { Popup, Menu, Icon, MenuItem, MenuHeader } from "semantic-ui-react";
import CreateChannelForm from "../Channels/CreateChannelForm";
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
                {[... new Array(10)].map((porp,index)=>(
                    <MenuItem key={index} name="A" as="a" icon="hashtag"> </MenuItem>
                ))}
                
                
            </MenuItem>
        </Menu>

        {/* Create channel form */}
        <CreateChannelForm open={open} onOpen={handleOpen} onClose={handleClose}/>
        </>
    )
}

export default SidePanel
