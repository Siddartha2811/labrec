function getWeather(){
    let city=document.getElementById("city").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&metrics&units&appid=8986123ea7ad600f01f598cb1b93ed5d`)
    .then(response=>response.json())
    .then(data=>{
        document.getElementById("container").innerText=`${city}
        
        Tempurature : ${data.main.temp}

        Pressure : ${data.main.pressure}
        
        Humidity : ${data.main.humidity}`;
        
    })
    .catch(error=>console.log(error))
}

// function getWeather(){
//     let city=document.getElementById("city").value;
//     let fetcher=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid="8986123ea7ad600f01f598cb1b93ed5d"`);
//     fetcher.then(response=>response.json())
//         .then(data=>{
//             document.getElementById("container").innerText=`${city}
            
//             Tempurature : ${data.main.temp}
    
//             Pressure : ${data.main.pressure}
            
//             Humidity : ${data.main.humidity}`;
            
//         })
//         .catch(error=>console.log(error))
// }
// getWeather();