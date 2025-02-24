const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox=document.querySelector(".search input");
        const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

        async function checkWeather(city){
            const response=await fetch(apiUrl + city + '&appid=73298a3a96937f747a004acf8e1ee68e');

            if(response.status==404)
            {
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none";
            }
            else{
            var data=await response.json();

            console.log(data);

            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML=data.main.temp + "°C";
            document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
            document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";

            if(data.weather[0]=="Clouds"){
                weatherIcon.src="./clouds.png";
            }
           else if(data.weather[0]=="Clear"){
                weatherIcon.src="./clear.png";
            }
           else if(data.weather[0]=="Rain"){
                weatherIcon.src="./rain.png";
            }
           else if(data.weather[0]=="Drizzle"){
                weatherIcon.src="./drizzle.png";
            }
          else if(data.weather[0]=="Mist"){
                weatherIcon.src="./mist.png";
            }

            document.querySelector(".weather").style.display="block";
            document.querySelector(".error").style.display="none";
        }
        }

        searchBtn.addEventListener("click",()=>{
            checkWeather(searchBox.value);
        });