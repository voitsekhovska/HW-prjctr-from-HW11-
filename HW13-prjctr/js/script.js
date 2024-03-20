"use strict";

// DOM variables

let switchButton = document.querySelector(".btn");
let underButtonTextStatus = document.querySelector(".switcher-status");

// functions

// змінює текст кнопки і фон

function switchTheme() {
  if (document.body.classList.contains("dark-mode")) {
    turnLightMode();
  } else {
    turnDarkMode();
  }
  updateModeStatus();
}

function turnDarkMode() {
  document.body.classList.add("dark-mode");
  switchButton.textContent = "Turn on";
}

function turnLightMode() {
  document.body.classList.remove("dark-mode");
  switchButton.textContent = "Turn off";
}

// форматування дати

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
}

// виводить текст під кнопку

function updateModeStatus() {
  const formattedDate = formatDate(new Date());
  const currentModeStatus = document.body.classList.contains("dark-mode")
    ? "off"
    : "on";

  const storedModeStatus = localStorage.getItem("mode");
  let storedTheme = storedModeStatus
    ? JSON.parse(storedModeStatus).theme
    : null;

  if (storedTheme === null) {
    storedTheme = currentModeStatus;
  }

  const displayedTheme = storedTheme === "dark" ? "off" : "on";
  underButtonTextStatus.textContent = `Last turn ${displayedTheme}: ${formattedDate}`;

  localStorage.setItem(
    "mode",
    JSON.stringify({
      theme: currentModeStatus === "off" ? "light" : "dark",
      lastUpdatedDate: formattedDate,
    })
  );
}

const storedModeStatus = localStorage.getItem("mode");

if (storedModeStatus !== null) {
  const { theme, lastUpdatedDate } = JSON.parse(storedModeStatus);

  if (theme === "light") {
    turnLightMode();
  } else {
    turnDarkMode();
  }
  underButtonTextStatus.textContent = `Last turn ${
    theme === "dark" ? "off" : "on"
  }: ${lastUpdatedDate}`;
}

// event listeners

switchButton.addEventListener("click", switchTheme);
