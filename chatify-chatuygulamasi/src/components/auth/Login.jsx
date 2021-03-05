import React, { useState, useEffect } from "react";
import { Button, Form, Grid, Message, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import styles from "./login.module.css";
import { useFirebase } from "react-redux-firebase";

const Login = () => {
    const firebase = useFirebase();
    const [fbErrors, setFbErrors] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const { register, errors, handleSubmit, setValue } = useForm();

    useEffect(() => {
        register({ name: "email" }, { required: true });
        register({ name: "password" }, { required: true, minLength: 6 });
    }, []);

    const onSubmit = ({ email, password }, e) => {
        setSubmitting(true);
        setFbErrors([]);

        firebase.login(
            { email, password }
        )
            .then((data) => {//login işlemi başarılı ise bir user datası dönecek
                console.log(data);
                //setSubmitting(false); hertürlü finally e giricek orda hallettik
            })
            .catch((error) => {
                setFbErrors([{ message: error.message }]);
               // setSubmitting(false); hertürlü finally e giricek 
            })
            .finally(()=>{
                setSubmitting(false);
            })         
    };
 
    const displayErrors=()=>
        fbErrors.map((error, index) => <p key={index}>{error.message}</p>);
    
    return (
        <Grid
            textAlign="center"
            verticalAlign="middle"
            className={styles.container}
        >
            <Grid.Column style={{ maxWidth: 450 }}>
                <h1 className={styles.formHeader}>
                    Chatify
          <span>.io</span>
                </h1>
                <Form
                    size="large"
                    className={styles.form}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Segment>
                        <Form.Input
                            fluid
                            icon="mail"
                            iconPosition="left"
                            name="email"
                            onChange={(e, { name, value }) => {
                                setValue(name, value);
                            }}
                            placeholder="Email Adresi"
                            error={errors.email ? true : false}
                            type="email"
                        />
                        <Form.Input
                            fluid
                            icon="lock"
                            iconPosition="left"
                            name="password"
                            onChange={(e, { name, value }) => {
                                setValue(name, value);
                            }}
                            placeholder="Şifre"
                            error={errors.email ? true : false}
                            type="password"
                        />

                        <Button color="purple" fluid size="large" disabled={submitting} >
                            Giriş Yap
                        </Button>
                    </Segment>
                </Form>
                {
                    fbErrors.length > 0 &&( <Message error>{displayErrors()}</Message>)
                       
                    
                }
                <Message>
                    Yeni misin? <Link to="/signup">Hesap Oluştur</Link>
                </Message>
            </Grid.Column>
        </Grid>
    );
};

export default Login;