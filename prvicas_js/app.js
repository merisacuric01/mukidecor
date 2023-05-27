
// console.log("hello0");
// alert("hello")
// document.write("hello");

// prosti tipovi podataka
// 1.string -> predstavlja tekst, prikazuje se ""
// 2.number -> predstavlja brojeve
// 3.boolean -> predstavlja logicke operacije i kontrolise flow aplikacije
// 4.undifined -> prikazuje vrednost koja nije definisana
// 5.null -> null prikazuje da nesto nema vrednost
// 6.symbol
// 7.bigint

// var x = 5;
// var y = 2;
// console.log("zbir je", x + y);


// const voce = ["banana", "jabuka", "kruska", "kiwi", "mandarina"];
// voce.push("pomarandza[2]");


// // 1
// var niz = ["Merisa", 21, "IT", 5, true];
// console.log(niz);

// // 2

// let myArray = ["a", "b", "c", "d"];
// myArray[1] = "m"
// console.log(myArray);


// // 3
// let mixedNumbers = ["Iv", 5, "six"];
// mixedNumbers.unshift(1, "II", "thre");
// mixedNumbers.push(7, "VIII", 9);
// console.log(mixedNumbers);




// // 4
// let nesto = [1, 2, 3, 4, 5];
// niz.shift();
// niz.pop();
// console.log(nesto)

// // 5

// let userActivity = {
//     id: 09877,
//     date: "JAN 1, 2022",
//     data: {
//         totalUser: 51,
//         online: 42,
    
//     },
// };
// userActivity.data.online = 45;
// console.log(userActivity)

// const sat = new.getHours();
// let poruka;


// if(sat < 11) {
//     poruka = "Dobro jutro"
// }
// else{
//     poruka = "Dobar dan"
// }

// console.log()


// uvecanje
// for (let i = 10; i >= 1; i--) {
//     console.log("Hello world", i);
// }


const companies = [
    { name: "company one", category: "merisa", start: 1992, and: 2003 },
    { name: "company two", category: "erna", start: 1992, and: 2003 },
    { name: "company five", category: "ema", start: 1992, and: 2003 },

];

const  Company = companies.filter(function(company){
    if(company.category === "Erna"){
        return true
    }
})
console.log(companyOne)
// companies.forEach(function(company){
//     console.log(company)
// })

// const companiesNames = companies.map(function(company){
//     return company.name
// })

// console.log(companiesNames)