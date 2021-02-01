import React, { Component } from 'react'
import { ekle } from './math';

// import { ekle } from "./math"; bu durumda math companentini ister kullan ister kullanma her iki durumda dahi import edilmiş ve uygulama çalışma zamanında yer kaplamaktadır
// console.log(ekle(5,6))
/**
 * Dynamic import sisteminde ise
 */

 import ('./math').then(math=>{//sadece math fonksiyonu çağrıldıpı ihtiyaç duyulduğu halde çalışmak için devreye girer
     console.log(ekle(8,11));
 }
 )


export default class DynamicImport extends Component {
    render() {
        return (
            <div>
            </div>
        )
    }
}
