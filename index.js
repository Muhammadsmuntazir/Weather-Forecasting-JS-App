const locationInput = document.getElementById('locationInput')
const getWeatherButton = document.getElementById('getWeather')
const weatherInfo = document.getElementById('weatherInfo')


getWeatherButton.addEventListener('click', () => {
  const location = locationInput.value
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=dda2f871596c4e5396243457230111&q=${location}&aqi=no`
  )
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const weatherHtml = `<div class='weathercontainer'> 
      <img src = 'https:${data.current.condition.icon}'/>
      <div class='row4'><h4>${data.current.condition.text} </h4> </div>
      <div class='row1'> <h1> ${data?.location?.name}</h1>
      ${data?.location?.localtime}
      <h4> <span> ${data?.location?.lat}  </span> | <span>  ${data?.location?.lon}  </span> </h4> </div>
      <div class='row2'> <span>Temp </span> <span> ${data?.current?.temp_c} <sup>o</sup>C</span> |   <span>Feels </span> <span> ${data?.current?.feelslike_c} <sup>o</sup> C</span>   </div>
      

      </div>`

      weatherInfo.innerHTML = weatherHtml
    })
    .catch(error => {
      weatherInfo.innerHTML = `Error: ${error.message}`
    })
})