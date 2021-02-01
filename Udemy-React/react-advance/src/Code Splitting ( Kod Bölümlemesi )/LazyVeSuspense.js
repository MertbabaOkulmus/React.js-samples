import React, { Component, Suspense } from 'react'
//import Foto from "./Foto"; kullanmasak da daima yüklü

const Foto=React.lazy(()=>import("./Foto")) //buda lazy yönetmi ile dynamic import dur, React.lazy() sadece bu companent in yüklenileceğini anladığı zaman import eder
const Foto2=React.lazy(()=>import("./Foto2"))
const Foto3=React.lazy(()=>import("./Foto3"))

export default class LazyVeSuspense extends Component {
    render() {
        return (
            <div>
                <Suspense fallback={<h1>Loading... Suspense sayesinde yapılmıştır</h1>}>{/*
                Lazy ile alınan companentlerin yüklenmesinde bir gecikme olduğu zamana, fallback propu sayesinde bir mesaj göstere biliriz yükleme tamamlanana kadar.
                Sadece Lazy ile import edilen tag lar  Suspense tag ları arasında yazıla bilir.
                */}
                 <Foto/> 
                 <Foto2/>
                 <Foto3/>{/*İçerdeki companentlerin hepsinin aynı anda yüklenmesi beklenir, herhangi biri yüklenmediği takdirde fallback 
                 içerisi çalışır, fallback içerisine img de konulabilir gif de 
                  */}
                </Suspense>
            </div>
        )
    }
}
