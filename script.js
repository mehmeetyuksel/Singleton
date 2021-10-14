
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
  }

function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex-1].style.display = "block";  
  }

 
  
/*   const url = 'https://api.openweathermap.org/data/2.5/';
  const key  =  'fae7c3f1050db7d484602d10705634f9';
  const sehir ='london';
 
  const getResult = (sehir) => {
  let query = `${url}weather?q=${sehir}&cnt=7&appid=${key}&units=metric&lang=tr`
  fetch(query).then(weather => {
    return weather.json()
  })
  .then(displayResult)
}
  
const displayResult = (result) => {
  console.log(result)

}

getResult (sehir); */
 

const url = `http://api.weatherapi.com/v1/`;
const key = `28193ed4b743490692a92524212408`;
const sehir ='London';

const getResult = (sehir) => {
let query = `${url}forecast.json?key=${key}&q=${sehir}&days=7`
fetch(query).then(weather => {
  return weather.json()
})
.then(displayResult)
}
 const displayResult = (result) => {
document.getElementById("first").textContent += result.location.name
console.log(result)}
getResult(sehir);
