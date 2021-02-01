import React, { Component } from 'react'

const UserContext=React.createContext();
//Provider,Consumer döndürür bize

export  class UserProvider extends Component {

    state={
        users:[
            {
                'Adı':'Mertbaba',
                'Soyadı':'Okulmuş',
                'No':413
            },
            {
                'Adı':'Alim',
                'Soyadı':'Ahmet',
                'No':895
            },
            {
                'Adı':'Rasim',
                'Soyadı':'Ozan',
                'No':743
            },    
            {
                'Adı':'Keatip',
                'Soyadı':'Çelebi',
                'No':951
            },
        ]
    }

    render() {
        return (
            //burda bir html tag ı dönmüyücek, burda UserContext in bize sağladığı Provider ı kullanmak için bizim Provider ı dönmemiz gerekicek
            <UserContext.Provider value={this.state}>
                {this.props.children}{/*Biz prop göndermemiştik fakat react da otomatik olarak children propsu gönderilir
                 UserProvider ın altına yazılan herşey UserProvider ının birer children ı olup props.children ile döner */}
            </UserContext.Provider>
        )
    }
}

const UserConsumer=UserContext.Consumer;// uygulamaların value yı kullana bilmesi için UserContext in içindeki Consumer a ihtiyacımız var, normal bir değişken gibi tanımladık

export default UserConsumer;//value yı yani içindeki state yi kullanmak istediğimiz zaman companenetlerin içinde UserConsumer ı kullanmamız gerek