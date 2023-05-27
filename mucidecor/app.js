function imgSlider(anything){
    document.querySelector('.zidovi').src = anything;
}
function changeBgColor(color){
    const sec = document.querySelector('.sec');
    sec.style.background = color;
}



 


document.querySelectorAll('.image-container img').forEach(image =>{
    image.onclick = () =>{
        
    document.querySelector('.popup-image').style.display = 'block';
    document.querySelector('.popup-image img').src = image.getAttribute('src');

    }
});

document.querySelector('.popup-image span').onclick = function () {
    document.querySelector('.popup-image').style.display = 'none';

}







//dugme
let mybutton = document.getElementById("btn-back-to-top");

// Kada korisnik skroluje nadole 20 piksela od vrha dokumenta, prikažite dugme

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// Kada korisnik klikne na dugme, skrolujte do vrha dokumenta
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}