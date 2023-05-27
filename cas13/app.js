const count = document.getElementById("count")
const uvecavaButton = document.getElementById("uvecava")
const umanjujeButton = document.getElementById("umanjuje")
const resetujeButton = document.getElementById("resetuje")

let counter = 0

uvecavaButton.addEventListener("click", function(){
    counter++;
    count.innerHTML = counter;
    
    if (counter > 0){
        count.style.color = "green";
    }


})
umanjujeButton.addEventListener("click", function(){
    counter--;
    count.innerHTML = counter; 

    if (counter < 0){
        count.style.color = "red";
    }
})

resetujeButton.addEventListener("click", function(){
    counter = 0;
    count.innerHTML = counter; 

    if (counter === 0){
        count.style.color = "black";
    }
})
