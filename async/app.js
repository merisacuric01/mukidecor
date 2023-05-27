// const fetching = async () => {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//         console.log(response)

//     }catch(error){
//         console.log(error)
//     }
// }
// fetchingData()

//math.random()
// function myFunction(){
//     const osoba = {id: 1, name:"Merisa", age:"21", email:"merisacric@gmail.com" }
//     return osoba

// }
// const fetching = async () => {
//     try{
//         const response = await myFunction()
//             console.log(response)
//         }catch(error){
//             console.log(error)
//         }
//     }
//     fetching()




// class Species {
//     constructor(name, kg){
//         this.name = name
//         this.kg = kg

//     }
//     wakeUp(){
//         return `${this.name} is going to wake up`
//     }
//     eat(){
//         return `${this.name} is going to eat `
//     }
//     sleep(){
//         return `${this.name} is going to sleep`
//     }
//     barking(){
//         return `${this.name} is going to barking`
//     }
// }

// class Elephant extends Species{
//     constructor(name, kg){
//         super(name,kg)

//     }
//     dailyRoutine(){
//         return `${super.wakeUp()} then ${super.eat()} and then ${super.sleep()}`
//     }
// }

// const display = (content) => {
//     console.log(content)

// }
// const elephant = new Elephant("African", "1T")
// display(elephant.dailyRoutine())

// class Dog extends Species{
//     constructor(name, kg){
//         super(name,kg)
//     }
//     dailyRoutine(){
//         return `${super.wakeUp()} then ${super.eat()} and then ${super.sleep()} and then ${super.barking()}`
//     }
// }



// const dog = new Dog("African", "1T")
// display(dog.dailyRoutine())




//Napraviti Klasu Vozilo koja ima boju, brzinu i model i tri metode
//pokreni(), zaustavi(), promeniBrzinu()
//Napraviti klasu Automobil koja nasledjuje klasu Vozilo
//Klasa Automobil ima jedan novi properti: marka
//Napraviti instancu za obe klase i pozvati metode i za Vozilo i Automobil


class Vozilo {
    constructor(boja, brzina, model){
        this.boja = boja
        this.brzina = brzina
        this.model = model
    }
    pokreni(){
        return `${this.model} pokreni vozilo`
    }
    zaustavi(){
        return `${this.model} zaustavi vozilo` 
    }
    promeniBrzinu(){
        return `${this.model} promeni brzinu vozila`
    }


}

class Automobil extends Vozilo{
    constructor(boja, brzina, model){
        super(boja, brzina, model)

    }
    marka(){
        return  `${super.pokreni()} then ${super.zaustavi()} and then ${super.promeniBrzinu()}`
    }
}




const automobil1 = new Automobil("crvena", "80km", "golf")
display(automobil.marka())

const automobil2 = new Automobil("plava", "60km", "golf")
















