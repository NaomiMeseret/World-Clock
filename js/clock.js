function updateTime() {
  //Addis Ababa
  let addisAbabaElement = document.querySelector("#Addis-Ababa");
  let addisAbabaDateElement = document.querySelector("#Addis-Ababa .date");
  let addisAbabaTimeElement = document.querySelector("#Addis-Ababa .time");
  let addisAbabaTime = moment().tz("Africa/Addis_Ababa");
  addisAbabaDateElement.innerHTML = moment().format("MMMM Do YYYY");
  addisAbabaTimeElement.innerHTML = addisAbabaTime.format("h:mm:ss [<small>]A[</small>]");
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = document.querySelector("#los-angeles .date");
  let losAngelesTimeElement = document.querySelector("#los-angeles .time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML= losAngelesTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
