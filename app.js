var weekday = new Array(7)
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var d = new Date();
let i = 0;
$('.day').get().forEach((b)=>{
b.textContent = weekday[parseInt((i+d.getDay())%7)]
i+=1;
})

let api_key = "cd67a4a13fee8f9cb600802e4817ff8d"
const https = require('https')
// console.log(https)
$("button").click(()=>{
  
  let city_name=$("#search_item").val()

let url = "https://api.openweathermap.org/data/2.5/weather?q="+ city_name + "&units=metric&appid="+api_key
let url2 = "https://api.openweathermap.org/data/2.5/forecast?q="+ city_name + "&units=metric&appid="+api_key
console.log(url)
https.get(url,(res)=>{
  
  let data=""
  res.on('data',(d)=>{
    data+=d.toString()
  })
  res.on('end',()=>{
    let out = JSON.parse(data)
    console.log(out)
    let temp = out["main"]["temp"]
    let name = out["name"]
    let humidity = out["main"]["humidity"]
    let wind = out["wind"]["speed"]
    let icon = out["weather"][0]["icon"]
    console.log(temp)
    console.log(icon)
    $("#main-temp").html(parseInt(temp)+"<sup>o</sup>C")
    $("#main-name").text(name)
    $("#main-humidity").text(humidity)
    $("#main-wind").text(wind+"Km/h")
    $("#m-icon").attr("src","http://openweathermap.org/img/w/"+icon+".png")
    $("#weather-name").text(out["weather"][0]["main"])
  })
})
})

