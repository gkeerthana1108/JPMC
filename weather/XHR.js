let xhr = new XMLHttpRequest();
city='hyderabad';

xhr.open('GET',`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cbdafd96a66508b940bf64e72f600915`)
xhr.send()
xhr.onload = function(){
    data = JSON.parse(xhr.response)
    console.log(data)
    console.log(data.main.temp)
    console.log(data.weather[0].main)
}