// const promise = new Promise((resolve, reject) => {
//     const number = 3
//     if(1 + 2 == number){
//         resolve("Success")

//     }else{
//         reject("Fail")
//     }
// })

// promise.then((_message) => {
//     console.log("Ovo je "  + javiMiGresku)
// }).catch((error) => {
//     console.log("Ovo je " + error)
// })


const fetchingData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

}



