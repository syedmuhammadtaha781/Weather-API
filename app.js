let city = document.getElementById("city");
let btn = document.getElementById("btn");
let addin = document.querySelector(".addin");
btn.addEventListener("click",()=>{
    let t_city = city.value.trim();
    if (!t_city) {
        alert("Please Enter city name");
        return;
    }
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${t_city}&appid=20bf211dc0a1a61bb923e4adc757173e`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        
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
       let temp_c = (data.main.temp - 273).toFixed(1);
       let feels_c = (data.main.feels_like - 273).toFixed(1);
    addin.innerHTML = `
    <h2>${data.name}</h2>
    <p><strong>Temperature: </strong>${temp_c}<sup>o</sup>C</p>
    <p><strong>Feel-like: </strong>${feels_c}<sup>o</sup>C</p>
    <p><strong>Weather: </strong>${data.weather[0].main}</p>
    <p><strong>Wind: </strong>${data.wind.speed} m/s from ${data.wind.deg}<sup>o</sup></p>
    <p><strong>Visibility: </strong>${data.visibility}</p>
    <p><strong>Cloud Cover: </strong>${data.clouds.all}%</p>
    `;
       city.value = "";
    })
    .catch(err => console.log(err))  
})