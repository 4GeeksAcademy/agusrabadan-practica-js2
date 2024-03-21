/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //Variables Familia

  let person1 = {
    name: "Agus",
    age: 38,
    gender: "male",
    hobbie: ["music", "videogames", "chess"]
  };

  let person2 = {
    name: "Reme",
    age: 41,
    gender: "female",
    hobbie: ["reading", "running", "cinema"]
  };

  let person3 = {
    name: "Agustin",
    age: 68,
    gender: "male",
    hobbie: ["travel", "soffing", "football"]
  };

  let person4 = {
    name: "Remedios",
    age: 65,
    gender: "female",
    hobbie: ["dance", "cooking", "yoga"]
  };

  let family = [person1, person2, person3, person4];

  //Loop Map
  family.map(item => {
    console.log(item.gender);
  });
}; /* Fin */
