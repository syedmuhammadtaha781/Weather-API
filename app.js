let city = document.getElementById("city");
let btn = document.getElementById("btn");
let addin = document.querySelector(".addin");
let heading = document.getElementById("heading");
let temp = document.getElementById("temp");
let Feel_like = document.getElementById("feel-like");
let strong1 = document.getElementById("strong1");
let strong2 = document.getElementById("strong2");
btn.addEventListener("click",()=>{
    let t_city = city.value.trim();
    if (!t_city) {
        alert("Please Enter city name");
        return;
    }
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${t_city}&appid=20bf211dc0a1a61bb923e4adc757173e`)
    .then(resp => resp.json())
    .then(data => {
       if (data.message == "city not found") {
        alert("Please Enter correct city name")
        strong1.textContent = ""; 
        strong2.textContent = ""; 
        temp.innerHTML = "";
        Feel_like.innerHTML = "";
        heading.textContent = "";
        addin.style.backgroundColor = "transparent";
        return;
       }
       addin.style.backgroundColor = "white";
       strong1.textContent = "Temperature:";
       strong2.textContent = "Feel-like:";
       let temp_c = (data.main.temp - 273).toFixed(1);
       let feels_c = (data.main.feels_like - 273).toFixed(1);
       heading.textContent = data.name;
       temp.innerHTML = `${temp_c}<sup>o</sup>C`;
       Feel_like.innerHTML = `${feels_c}<sup>o</sup>C`;
       city.value = "";
    })
    .catch(err => console.log(err))
    
})