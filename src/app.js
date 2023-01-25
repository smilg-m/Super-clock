function updateTime() {
  /// Vilnius time
  let vilniusDateElement = document.querySelector("#vilnius .date");
  let vilniusTimeElement = document.querySelector("#vilnius .time");
  let vilniusTime = moment().tz("Europe/Vilnius");

  vilniusDateElement.innerHTML = vilniusTime.format("MMMM DD, YYYY");
  vilniusTimeElement.innerHTML = vilniusTime.format(
    "H:mm:ss [<small>]A[</small>]"
  );

  /// New York time
  let newYorkDateElement = document.querySelector("#new-york .date");
  let newYorkTimeElement = document.querySelector("#new-york .time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = newYorkTime.format("MMMM DD, YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    "H:mm:ss [<small>]A[</small>]"
  );

  /// Sydney time
  let sydneyDateElement = document.querySelector("#sydney .date");
  let sydneyTimeElement = document.querySelector("#sydney .time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("MMMM DD, YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "H:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
