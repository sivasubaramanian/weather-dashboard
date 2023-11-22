let a=document.getElementById("se");



let weatherapi= async(city)=>{
    let url='https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=yourapi&units=metric'
    let we= await fetch(url);
    let res=we.json();
    return res;
}
async function callwe(){
    let a=document.getElementById("se");
    weatherapi(a.value)
    .then((res)=>{
        console.log(res);
        let locat=res['name'];
        let temperature=res['main']['temp']
        let Wind1=res['wind']['speed']
        let hum = res['main']['humidity']
        let d=res['weather'][0]['description']
        var locat1=document.getElementById("nameloc");
        document.getElementById("temploc").innerHTML="Temprature: "+temperature+" °C";
        document.getElementById("windloc").innerHTML="Wind: "+Wind1+" M/S";
        document.getElementById("humloc").innerHTML="Humidity: "+hum+" %";
        let daa=document.getElementById("Description");
        daa.textContent=d;
        locat1.textContent=locat;
        


    })

}


