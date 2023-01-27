function updateTime() {
  /// Vilnius time
  let vilniusElement = document.querySelector("#vilnius");
  if (vilniusElement) {
    let vilniusDateElement = vilniusElement.querySelector(".date");
    let vilniusTimeElement = vilniusElement.querySelector(".time");
    let vilniusTime = moment().tz("Europe/Vilnius");

    vilniusDateElement.innerHTML = vilniusTime.format("MMMM D, YYYY");
    vilniusTimeElement.innerHTML = vilniusTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  /// New York time
  let NewYorkElement = document.querySelector("#new-york");
  if (NewYorkElement) {
    let newYorkDateElement = NewYorkElement.querySelector(".date");
    let newYorkTimeElement = NewYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = newYorkTime.format("MMMM D, YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  /// Sydney time
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("MMMM D, YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM D, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small> ${cityTime.format("A")}</small></div>
        </div>
        `;
}

updateTime();
setInterval(updateTime, 1000);

let cityElement = document.querySelector("#select-city");
cityElement.addEventListener("change", updateCity);
