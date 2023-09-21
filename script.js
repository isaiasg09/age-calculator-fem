const yearsElement = document.querySelector(".years");
const monthsElement = document.querySelector(".months");
const daysElement = document.querySelector(".days");

const yearInput = document.getElementById("year_input");
const monthInput = document.getElementById("month_input");
const dayInput = document.getElementById("day_input");

function calculateAge(day, month, year) {
  let currentDate = new Date();

  let days = currentDate.getDate() - day;
  let age = currentDate.getFullYear() - year;
  let months = currentDate.getMonth() + 1 - month;

  console.log(days, currentDate.getDate(), day);
  // if month is negative, then we have not reached the month yet
  if (months < 0) {
    age--;
    months = 12 - Math.abs(months);
  }

  // if day is negative, then we have not reached the day yet
  if (days < 0) {
    months--;
    days = day - Math.abs(days);
  }

  yearsElement.innerHTML = age;
  monthsElement.innerHTML = months;
  daysElement.innerHTML = days;
}

function handleFormSubmit(event) {
  // event.preventDefault();

  const year = yearInput.value;
  const month = monthInput.value;
  const day = dayInput.value;

  calculateAge(day, month, year);
}
