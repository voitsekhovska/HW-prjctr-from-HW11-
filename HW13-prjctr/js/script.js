"use strict";

// DOM variables

let switchButton = document.querySelector(".btn");
let textStatus = document.querySelector(".switcher-status");

// functions

// змінює текст кнопки і фон

function themeSwitcher() {
  if (document.body.classList.contains("dark-mode")) {
    lightMode();
  } else {
    darkMode();
  }
}

function darkMode() {
  document.body.classList.add("dark-mode");
  switchButton.textContent = "Turn on";
}

function lightMode() {
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
  const modeStatus = document.body.classList.contains("dark-mode")
    ? "off"
    : "on";

  let updatedStatusText = `Last turn ${modeStatus}: ${formattedDate}`;
  textStatus.textContent = updatedStatusText;

  localStorage.setItem("updatedStatus", updatedStatusText);
}

// event listeners

switchButton.addEventListener("click", function() {
  themeSwitcher();
  updateModeStatus();
});

document.addEventListener("DOMContentLoaded", function () {
  const updatedStatusText = localStorage.getItem("updatedStatus");
  if (updatedStatusText) {
    textStatus.textContent = updatedStatusText;
  }
});