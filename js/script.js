"use strict";

// 1. Напишіть функцію яка буде використовуватись для сортування масиву фільмів

const movies = [
  {
    movieName: "The Thing",
    releaseYear: 1982,
    directedBy: "Carpenter",
    runningTimeInMinutes: 109,
  },
  {
    movieName: "Aliens",
    releaseYear: 1986,
    directedBy: "Cameron",
    runningTimeInMinutes: 137,
  },
  {
    movieName: "Men in Black",
    releaseYear: 1997,
    directedBy: "Sonnenfeld",
    runningTimeInMinutes: 98,
  },
  {
    movieName: "Predator",
    releaseYear: 1987,
    directedBy: "McTiernan",
    runningTimeInMinutes: 107,
  },
];

function byProperty(property, direction) {
  return (a, b) => {
    if (direction === ">") {
      return a[property] < b[property] ? -1 : 1;
    } else {
      return a[property] > b[property] ? 1 : -1;
    }
  };
}

console.log(movies.sort(byProperty("releaseYear", ">")));
console.log(movies.sort(byProperty("runningTimeInMinutes", "<")));
console.log(movies.sort(byProperty("movieName", ">")));
console.log(movies.sort(byProperty("directedBy", ">")));

// 2. Напишіть функцію-декоратор яка вповільнює виконання довільної функції на вказану кількість секунд.

function addition(a, b) {
  return a + b;
}

function slower(func, seconds) {
  return function (...args) {
    console.log("Chill out, you will get you result in 5 seconds");
    setTimeout(() => {
      const result = func(...args);
      console.log("result:", result);
    }, seconds * 1000);
  };
}

let slowedAddition = slower(addition, 5);

slowedAddition(2, 3);
