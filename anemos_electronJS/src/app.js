if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else{ 
    console.log("Geolocation is not supported by this browser.");
    lon = 83.21;
    lat = 17.69;
   lat_lon(lat,lon);
  }
  function showPosition(position) {
  lat=position.coords.latitude;
  lon=position.coords.longitude;
lat_lon(lat,lon);
}


function lat_lon(lat,lon){
     $.getJSON("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=44b49841348652147838415f47e21fcb",function(data){
          console.log(data);
     var icon = "http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
     var theme = "";
     if(icon.includes("d",2)){
        theme = "day";
        document.getElementById("theme").href="day.css";
     }
     else{
        theme="night";
        document.getElementById("theme").href="night.css";
     }
     console.log("It is "+theme);
     $('.icon').attr('src',icon);
     var temp = data.main.temp-273.15;
     var t = Math.floor(temp);
     $('.temp').append(t+"°C");
     var w = data.weather[0].main;
     $('.weather').append(w);
     var city = data.name;
     $('.city-name').text(city);
     }
     );
}

function myfunc() {
     var city_name=$("input:text").val();
      console.log(city_name);
      
      $.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+city_name+"&appid=44b49841348652147838415f47e21fcb",function(data){
 console.log("Weather report for "+city_name+" :");
 console.log(data);
 var icon = "http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
 if(icon.includes("d",2)){
      theme = "day";
      document.getElementById("theme").href="day.css";
 }
 else{
      theme="night";
      document.getElementById("theme").href="night.css";
 }
 console.log("It is "+theme);
 $('.icon').attr('src',icon);
 var temp = data.main.temp-273.15;
 var t = Math.floor(temp);
 $('.temp').text(t+"°C");
 var w = data.weather[0].main;
 $('.weather').text(w);
 var c = data.name;
 $('.city-name').text(c);
 }
 );
      $("input:text").val("");
 }