// pass by value vazi za proste tipove podataka

// let a = 10
// let b = "test"
// let c = a
// c = 11

// console.log(c)
// console.log(a)

// pass by reference vazi za slozene tipove podataka

let a = [1,2]
let b = a

b.push(3)
 console.log("niz a", a)
 console.log("niz b", b)