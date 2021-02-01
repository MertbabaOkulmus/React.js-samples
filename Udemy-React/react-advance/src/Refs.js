import React, { Component } from 'react'

export default class Refs extends Component {
    constructor(props){
        super(props);
        this.MyRef=React.createRef();
    } 
    focusOn=()=>{
        this.MyRef.current.focus();
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.MyRef} placeholder="Focus on me"/>
                <button onClick={this.focusOn}>Focus</button>
            </div>
        )
    }
}


/*
 * Ref ler  render metodu içerisinde oluşturulan DOM düğümlerine veya React elamanlarına erişmeyi sağlar.
 * Ref;
 * Focus olayını, metin seçmeyi veya yeniden ortam oynatmayı yönetmek,
 * Animasyonları tetiklemek,
 * Üçüncü-parti DOM kütüphanelerini entegre etmek için kullanılır
 */