console.log(this)

const osoba = {
    ime: "merisa", 
    prezime:'curic',
    godine: 21,  
    pozdrav:function(){
        console.log(`pozdrav ${this.ime + " " + this.prezime + " " + this.godine}`)
    }

}
osoba.pozdrav()

const ime = "edin"
console.log(`pozdrav ${ime}`)


// call()
