function updateTime() {
  //Addis Ababa
  let addisAbabaElement = document.querySelector("#Addis-Ababa");
  if(addisAbabaElement){
  let addisAbabaDateElement = document.querySelector("#Addis-Ababa .date");
  let addisAbabaTimeElement = document.querySelector("#Addis-Ababa .time");
  let addisAbabaTime = moment().tz("Africa/Addis_Ababa");
  addisAbabaDateElement.innerHTML = moment().format("MMMM Do YYYY");
  addisAbabaTimeElement.innerHTML = addisAbabaTime.format("h:mm:ss [<small>]A[</small>]");}
  
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = document.querySelector("#los-angeles .date");
    let losAngelesTimeElement = document.querySelector("#los-angeles .time");
    let losAngelesTime = moment().tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
updateTime();
setInterval(updateTime, 1000);
function updateCity(event){
  let cityTimeZone=event.target.value
  if(cityTimeZone==="Current"){
    cityTimeZone=moment.tz.guess()
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime=moment().tz(cityTimeZone)
  let citiesElement=document.querySelector("#cities")
  citiesElement.innerHTML = `
  <div class="city">
        <div>
          <h2>${cityName} </h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
      </div>`;
}
let citiesSelectElement=document.querySelector("#city")
citiesSelectElement.addEventListener("change",updateCity)