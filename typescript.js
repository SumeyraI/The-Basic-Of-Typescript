//export {}
//console.log("hello");
//STRING VERİ TİPİ
var k;
k = "hello world";
var d = true; //BOOLEAN VERİ TİPİ
console.log(k, d);
//NUMBER VERİ TİPİ
var sayi;
sayi = 12;
console.log(sayi);
var s; //ANY DERSEK BU DEĞİŞKEN BÜTÜN VERİ TİPLERİNDEN BİRİ OLABİLİR.KISITLAMA YOK!
s = 34;
//s = "selam dunya"; bu şekilde de yapabiliriz.
console.log(s);
//ARRAY VERİ TİPİ
var dizi;
dizi = ["hello", "javascrpt", "java"];
console.log.apply(console, dizi); //ECMASCRIPT ES6 ÖZELLİĞİ
console.log(dizi[2]);
var sayiDizisi; //NUMBER TİPİNDE ARRAY
sayiDizisi = [1, 2, 3, 4, 5];
console.log(sayiDizisi);
var booleanDizisi; // BU ŞEKİLDE DE ARRAY TANMLAYABİLİRİZ.
booleanDizisi = [true, false, true];
console.log(booleanDizisi);
var a = [1, 2, 3, 4, 5, 6];
console.log(a);
//FONKSİYONLAR 
function addNumbers(num1, num2) {
    console.log(num1 + num2);
}
addNumbers(2, 3); //FONK. ÇAĞIRDIK.
function multipleNumbers(num3, num4) {
    console.log(num3 * num4);
}
multipleNumbers(3, 4);
function geriDonusluMetod(num5, num6) {
    if (typeof num6 === "undefined") {
        return num5;
    }
    //num6? yani biz burada num6 'ya değer göndermesek de olur yani undefined oldu,bu yüzden sonuç NaN olur.
    return num5 + num6;
}
console.log(geriDonusluMetod(2, 5));
console.log(geriDonusluMetod(2)); //num6 ya denk gelecek bir değer vermediğimiz için sonuç NaN olur.
function geriDonusluMetodDevam(num5, num6) {
    if (num6 === void 0) { num6 = 10; }
    //num6: number = 10 bu şekilde de ilk değer ataması yapabiliriz.
    return num5 + num6;
}
console.log(geriDonusluMetodDevam(3));
/// CLASS OLUŞTURMA
var Person = /** @class */ (function () {
    function Person(name, age, phone) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        console.log("kişi oluşturuldu");
    }
    Person.prototype.showInfos = function () {
        console.log("\u0130sim : " + this.name + " Ya\u015F : " + this.age + " Phone : " + this.phone + " ");
    };
    return Person;
}());
var person1 = new Person("ayse", 3, "123455");
person1.showInfos();
