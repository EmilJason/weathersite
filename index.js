let cardBody = document.querySelector(".card-body")
let card = document.querySelector(".card")
let searchBtn = document.getElementById('searchBtn')
let search = document.getElementById("search")
let weatherMain = document.getElementById("weatherMain")
let description = document.getElementById("description")
let wind = document.getElementById("wind")
let humidity = document.getElementById("humidity")
let weatherIcon = document.getElementById("weatherIcon")
let iconmain = document.getElementById("iconmain")

const apiKey = "15cf656999a9f2ebf3916efbfaecf991"

searchBtn.addEventListener("click",()=>{
    card.style.height = "500px"
    cardBody.style.display = "block"
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=${apiKey}`)
    .then(res=>res.json()).then(data=>{
        console.log(data)
        weatherMain.innerText = data.weather[0].main
        description.innerText = data.weather[0].description
        iconmain.class="fa-solid"
        switch(data.weather[0].main){
            case "Rain":
                iconmain.classList.add("fa-raindrops")
                break;
            case "Clouds":
                iconmain.classList.add("fa-cloud")
                break;
            case "Clear":
                iconmain.classList.add("fa-sun")
                break;
            case "Snow":
                iconmain.classList.add("fa-snowflake")
                break;
        
            default:
                return null
        }
        
        wind.innerText = data.wind.speed
        humidity.innerText = data.main.humidity
    })
})