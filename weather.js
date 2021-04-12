function fetchWeather(){
    var table=document.createElement("TABLE");
    table.border="2";
    var request=new XMLHttpRequest();
    var apiKey='2578a5dfba20e6f114d57a2840d9561f';
    var city=document.getElementById("city").value;
    var url=`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
    // console.log("running");
    request.open('GET',url,true);
    request.onload=function()
    {
        var result=JSON.parse(this.response);
        result.list.forEach((day)=>{
            row=table.insertRow(-1);
            c1=row.insertCell(-1);
            c2=row.insertCell(-1);
            c3=row.insertCell(-1);
            // console.log(day.dt_txt);
            // console.log(day.main.temp);
            c1.innerHTML=day.dt_txt;
            c2.innerHTML=day.main.temp_max;
            c3.innerHTML=day.main.temp_min;
        })
    }
    var div=document.getElementById("table");
    div.append(table);
    request.send();
}