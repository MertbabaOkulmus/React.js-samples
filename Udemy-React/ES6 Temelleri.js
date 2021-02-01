//eskiden
const dizi="bu birinci satır\nbu ikinci satır"
console.log(dizi);

//Yeni hali
const dizi2=
`bu birnci satır
bu ikinci satır
`
console.log(dizi2);


//eskiden
const a=5
const b=7
const ifade="a ile b nin toplamı"+(a+b)+"dır"
console.log(ifade);

//yeni hali
const ifade2 =`a ile b nin toplamı ${a+b} dir`
console.log(ifade2);


//eskiden
function degisken(fu){
    console.log(fu);
}
degisken();// boş parametre gelince undefined yazar

// yeni hali
function degisken2(fu=2){
    console.log(fu);
}
degisken2();//undefined yerine 2 yazar boş parametre gelince


//eski hali
function topla(a,b){
    return a+b;
}

//Arrow Function yeni hali
const toplama =(a,b)=>{a+b}
//const toplama =(a,b)=>{
//   return(a+b);
//}

//eski hali
function rastgele(){
    return Math.random();
}
console.log(rastgele());

//yeni hali
const rastgele2 =()=>{ return Math.random()}
console.log(rastgele2());

//Dizi İmhası [...dizi]          ÖNEMLİ
//[...array] yayma operatörü ...

function topl(a,b,c){
    return a+b+c
}
const dizin=[4,5,6,8,10]
console.log(topl(...dizin));//dizi elamanını içindeki elamanları topl fonksiyonunun içine yaydı , en baştan gerekitği kadar elamanı alır, devamını almaz

// [...dizi] yöntemi ile dizi Kopyalama 

const dizinCopy = [...dizin] // dizinCopy e dizin i yaydık
console.log(dizinCopy);

// [...dizi] ile  dizi leri birleştirme
const numbers1=[1,2,3,4]
const numbers2=[5,6,7,8]
const birleşmişNumbers=[...numbers1,...numbers2] // önce number1 i sonradan number2 ekler
console.log(numbers1);
console.log(numbers2);
console.log(birleşmişNumbers);


// [...dizi] ile dizi ye eleman ekleme

const ary=[1,2,3]
const aryNew=[...ary,5]

//Nesne İmhası {...nesne}      ÖNEMLİ

const kisi={
    isim:'Mert',
    soyisim:'Okulmuş'
}
const nmbr={
    no:170542010
}

//Kopyalama
const yeniObje={...kisi}
console.log(yeniObje);

//Birleştirme
const birleştirme={...kisi,...nmbr}
console.log(birleştirme);

// Ekleme
const eklenen={...kisi,tlf:5511090435}
console.log(eklenen);

// Çıkarma
const {soyisim,...rest}=kisi
console.log("-------");
console.log(birleştirme);
console.log("-------");
console.log(rest);