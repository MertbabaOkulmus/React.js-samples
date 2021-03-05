import React, { useState, useEffect } from "react";
//import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Form, Grid, Message, Segment } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import styles from "./signup.module.css";
import { useFirebase } from "react-redux-firebase";

const SignUp = () => {
    const firebase = useFirebase();
    const { register, errors, handleSubmit, setValue } = useForm();
    const [fbErrors, setFbErrors] = useState([]);//firbase hatalarını tutuğumuz alan.
    const [submitting, setSubmitting] = useState(false); //submit butonunun tıklandığında loding yada disabele durumunu göstermek için

    useEffect(() => {
        register({ name: "username" }, { required: true });
        register({ name: "email" }, { required: true });
        register({ name: "password" }, { required: true, minLength: 6 });
    }, []);

    const onSubmit = ({ username, email, password }, e) => {
        setSubmitting(true);//her submit yaptığımızda submittingi true hale getir 
        setFbErrors([]);//her submit yaptığımızda hata mesajlarını sıfırla 

        const [first, last] = username.split(" ");//username ı ad soyad diye ayırmamıza yaradı

        firebase.createUser(//createUser, firebase ile yani useFirebase ile hazır gelen bir metod dur react-redux-firebase dökümanında buna benzer bir sürü var
            { email, password },
            {
                name: username,
                avatar: `https://ui-avatars.com/api/?name=${first}+${last}&background=random&color=fff`,
            }
        )
            .then((user) => {
                console.log(user)
                setSubmitting(false);//submiti false çevirdik çünki artık işlemimiz burda bitti
            })
            .catch((error) => {
                setFbErrors([{ message: error.message }])
                setSubmitting(false);
            });
    };

    const displayErrors = () => 
            fbErrors.map((error,index)=><p key={index}>{ error.message}</p>);
    

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
                            icon="user"
                            iconPosition="left"
                            name="username"
                            onChange={(e, { name, value }) => {
                                setValue(name, value);
                            }}
                            error={errors.username ? true : false}
                            placeholder="Kullanıcı Adı"
                            type="text"
                        />
                        <Form.Input
                            fluid
                            icon="mail"
                            iconPosition="left"
                            placeholder="Email Adresi"
                            name="email"
                            onChange={(e, { name, value }) => {
                                setValue(name, value);
                            }}
                            error={errors.email ? true : false}
                            type="email"
                        />
                        <Form.Input
                            fluid
                            icon="lock"
                            iconPosition="left"
                            placeholder="Şifre"
                            name="password"
                            onChange={(e, { name, value }) => {
                                setValue(name, value);
                            }}
                            error={errors.password ? true : false}
                            type="password"
                        />

                        <Button color="purple" fluid size="large" disabled={submitting}> {/* submitting ise btn disabled olsun yani btn a basıldı ise tekrar tekrar basamayalım */}
                            Kaydol
                        </Button>
                    </Segment>
                </Form>
                {
                    // eğer fberrors alanı 0 dan büyükse yani hata var ise o zaman
                    fbErrors.length > 0 && (
                        <Message error>{displayErrors()}</Message>//görünen mesajın hata mesajı olmasını kırmızı ile gözükmesini error ile sağladık
                    )
                }
                <Message>
                    Zaten bir hesabın var mı? <Link to="/login">Giriş Yap</Link>
                </Message>
            </Grid.Column>
        </Grid>
    );
};

export default SignUp;