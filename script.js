"use strict";
const userDate = document.querySelector("#date");
const btnCalculate = document.querySelector(".btn-calculate");
const getAge = document.querySelector(".age");
const getMonth = document.querySelector(".month");
const getDay = document.querySelector(".day");
const hidden = document.querySelector(".age-info.hidden");

userDate.max = new Date().toISOString().split("T")[0];

const calculatorAge = function () {
  const birthDate = new Date(userDate.value);
  const yr1 = birthDate.getFullYear();
  const mn1 = birthDate.getMonth() + 1;
  const dy1 = birthDate.getDate();

  const currentBirthDate = new Date();
  const yr2 = currentBirthDate.getFullYear();
  const mn2 = currentBirthDate.getMonth() + 1;
  const dy2 = currentBirthDate.getDate();

  let day, month, year;

  year = yr2 - yr1;

  if (mn2 >= mn1) {
    month = mn2 - mn1;
  } else {
    year--;
    month = 12 + mn2 - mn1;
  }

  if (dy2 >= dy1) {
    day = dy2 - dy1;
  } else {
    month--;
    day = getDaysInMonth(yr1, mn1) + dy2 - dy1;
  }

  if (month < 0) {
    month = 11;
    year--;
  }

  return [year, month, day];
};

btnCalculate.addEventListener("click", (e) => {
  if (userDate.value !== "") {
    const [year, month, day] = calculatorAge();
    getAge.textContent = year;
    getMonth.textContent = month;
    getDay.textContent = day;
    hidden.classList.remove("hidden");
    console.log(userDate.value);
  }
});

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
