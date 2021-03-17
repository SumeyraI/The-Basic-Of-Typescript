export {}
//console.log("hello");

//STRING VERİ TİPİ
let k : string;
k = "hello world";
let d : boolean = true; //BOOLEAN VERİ TİPİ
console.log(k,d);

//NUMBER VERİ TİPİ
let sayi : number;
sayi = 12;
console.log(sayi);
let s : any; //ANY DERSEK BU DEĞİŞKEN BÜTÜN VERİ TİPLERİNDEN BİRİ OLABİLİR.KISITLAMA YOK!
s = 34;
//s = "selam dunya"; bu şekilde de yapabiliriz.
console.log(s);

//ARRAY VERİ TİPİ
let dizi : string[];
dizi = ["hello","javascrpt","java"];
console.log(...dizi); //ECMASCRIPT ES6 ÖZELLİĞİ
console.log(dizi[2]);

let sayiDizisi : number[]; //NUMBER TİPİNDE ARRAY
sayiDizisi = [1,2,3,4,5];
console.log(sayiDizisi);

let booleanDizisi : Array<boolean>; // BU ŞEKİLDE DE ARRAY TANMLAYABİLİRİZ.
booleanDizisi = [true,false,true];
console.log(booleanDizisi);
let a : Array<number> = [1,2,3,4,5,6];
console.log(a);

//FONKSİYONLAR 
function addNumbers(num1 : number, num2 : number)
{
    console.log(num1 + num2);
}
addNumbers(2,3); //FONK. ÇAĞIRDIK.

function multipleNumbers(num3 : number, num4 : number)
{
    console.log(num3 * num4);

}
multipleNumbers(3,4);

function geriDonusluMetod(num5 : number, num6?: number) : number
{
    if(typeof num6 === "undefined")
    {
        return num5;
    }

    //num6? yani biz burada num6 'ya değer göndermesek de olur yani undefined oldu,bu yüzden sonuç NaN olur.
    return num5 + num6 ;

}
console.log( geriDonusluMetod(2,5));
console.log( geriDonusluMetod(2)); //num6 ya denk gelecek bir değer vermediğimiz için sonuç NaN olur.

function geriDonusluMetodDevam(num5 : number, num6: number = 10) : number
{

    //num6: number = 10 bu şekilde de ilk değer ataması yapabiliriz.
    return num5 + num6 ;

}
console.log( geriDonusluMetodDevam(3));


/// CLASS OLUŞTURMA
class Person {

    name : string;
    age : number;
    phone : string;

    constructor(name : string, age : number ,phone : string){
        this.name = name;
        this.age = age;
        this.phone = phone;

        console.log("kişi oluşturuldu");
    }

    showInfos(){
        console.log(`İsim : ${this.name} Yaş : ${this.age} Phone : ${this.phone} `);

    }
}
 let person1 = new Person("ayse",3,"123455");
 person1.showInfos();







