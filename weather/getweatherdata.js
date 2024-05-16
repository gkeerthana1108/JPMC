city="delhi"
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cbdafd96a66508b940bf64e72f600915`)
.then((res)=>res.json())
.then((data)=>console.log(data))