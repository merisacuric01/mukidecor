// definisanje klase

class Osoba {
    constructor(prezime, ime, godine){
        this.prezime = prezime;
        this.ime = ime;
        this.godine = godine;
    }
    sayHello(){
        console.log(`Zdravo ja sam ${this.prezime} ${this.ime} i imam ${this.godine} godinu`);
    }
}
const osoba1 = new Osoba('curic', 'merisa', 21)

osoba1.sayHello();


class Auto {
    constructor(naziv, model, boja, godiste){
        this.naziv = naziv;
        this.model = model;
        this.boja = boja;
        this.godiste = godiste;
    }
    sayHello(){
        console.log(`u punudi imamo novi model ${this.naziv} model ${this.model} u boji ${this.boja} i ${this.godiste} godiste`)
    }
}
const auto1 = new Auto('golf', "10", "crvenoj", 2022)
const auto2 = new Auto('golf', 12, "plavoj",  2023)

auto1.sayHello();
auto2.sayHello();

class Telefon{
    constructor(naziv, model, boja){
        this.naziv = naziv;
        this.model = model;
        this.boja = boja;

    }sayHello(){
        console.log(`${this.naziv} model ${this.model}, boja ${this.boja}`)
    }
}
const telefon1 = new Telefon('14 pro Max', 'iphone', 'ljubicasta')

telefon1.sayHello();