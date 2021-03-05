import React,{useEffect} from 'react'
import { Modal, Form, Button, ModalContent, FormInput } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { useFirebase } from "react-redux-firebase";
import { useSelector } from "react-redux";

const CreateChannelForm = (props) => {
    const firebase = useFirebase();
    const  profile=useSelector(//ana state imiz den bir sellect döndürüyor, redux da bilgi çekme yöntemi
          (state)=>state.firebase.profile // profil bilgisinin kesin olarak yüklendğinden eminiz çünki profil bilgisi yok ise zaten sayfa açılmıyor render olmuyor
    );
    const {register, errors, handleSubmit, setValue}=useForm();

    useEffect(()=>{
        register({name:"name"}, {required:true});
        register({name:"description"},{required:true, minLength:10});
    },[]);

    const onSubmit=({name, description})=>{
        firebase.push("channels",{
            name,
            description,
            createBy:{
                name:profile.name,
                avatar:profile.avatar
            },
        });

       props.onClose();//formu kapatmak için
    }

    return (
        <Modal open={props.open} onOpen={props.onOpen} onClose={props.onClose}>
            <Modal.Header>Yeni Kanal Oluştur</Modal.Header>
            <ModalContent>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormInput
                        fluid
                        icon="hashtag"
                        iconPosition="left"
                        name="name"
                        placeholder="#Genel"
                        onChange={(e,{name,value})=>{
                            setValue(name,value);
                        }}
                        error={errors.name ? true:false}
                    />
                    <FormInput
                        fluid
                        icon="hashtag"
                        iconPosition="left"
                        name="description"
                        placeholder="#Genel her türlü konunun konuşulabileceği bir kanaldır"
                        onChange={(e,{name,value})=>{
                            setValue(name,value);
                        }}
                        error={errors.description ? true:false}
                    />

                </Form>
            </ModalContent>
            <Modal.Actions>
                    <Button color="black" onClick={()=>props.onClose()}> Vazgeç </Button>
                    <Button  icon="checkmark" positive onClick={()=>handleSubmit(onSubmit)}> Oluştur </Button>

            </Modal.Actions>
        </Modal>
    )
}

export default CreateChannelForm
