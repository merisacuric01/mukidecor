// class Osoba{
//     #ime
//     #godine
//     constructor(ime, godine){
//         this.#ime = ime
//         this.#godine = godine

//     }
// }

// class Osoba{
//     constructor(ime, godine){
//         let _ime = ime;
//         let _godine = godine;

//         this.getIme = function(){
//             return _ime
//         }
//         this.getGodine = function(){
//             return _godine
//         }
//         this.setIme = function(ime){
//             _ime = ime
//         }
//         this.setGodine = function(godine){
//             _godine = godine
//         }
        

//     }

// }
// let osoba = new Osoba("nebitno", 25)
// console.log(osoba.getIme())
// console.log(osoba.getGodine())

// osoba.setIme("neko")
// osoba.setGodine(30)

// console.log(osoba.getIme())
// console.log(osoba.getGodine())


class Student{
    constructor(ime, prezime, brojIndeksa, godineStudija){
        let _ime = ime;
        let _prezime = prezime;
        let _brojIndeksa = brojIndeksa;
        let _godineStudija = godineStudija;

        this.getIme = function(){
            return _ime
        }
        this.getPrezime = function(){
            return _prezime
        }
        this.getBrojIndeksa = function(){
            return _brojIndeksa
        }
        this.getGodineStudija = function(){
            return _godineStudija
            
        }
        this.setIme = function(ime){
            _ime = ime
        }
        this.setPrezime = function(prezime){
            _prezime = prezime
        }
        this.setBrojIndeksa = function(id){
            _brojIndeksa = brojIndeksa
        }
        this.setGodineStudija = function(godineStudija){
            _godineStudija = godineStudija
        }


    }
}
let student = new Student("Merisa", "Curic", "4/440", 4)
console.log(student.getIme())
console.log(student.getPrezime())
console.log(student.getBrojIndeksa())
console.log(student.getGodineStudija())


student.setIme("Ema")
student.setPrezime("Koca")
student.setBrojIndeksa("4-441")
student.setGodineStudija(3)

console.log(student.getIme())
console.log(student.getPrezime())
console.log(student.getBrojIndeksa())
console.log(student.getGodineStudija())