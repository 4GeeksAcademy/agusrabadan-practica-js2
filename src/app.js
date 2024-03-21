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
    hobbie: ["music", "v-games", "chess"]
  };

  let person2 = {
    name: "Reme",
    age: 41,
    gender: "female",
    hobbie: ["reading", "running", "cine"]
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

  /*Loop Map

  family.map(item => {
    console.log(item.name, item.age);

    item.hobbie.map(element => {
      console.log("-" + element);
    });
  });*/

  //Lista Familiar sin card

  /* const tag = document.querySelector("#list");
  let text = " ";
  family.map(item => {
    text += "<h2>" + item.name + " " + item.age + "</h2>";
    item.hobbie.map(element => {
      text += "<p>" + element + "</p>";
    });
  });
  tag.innerHTML = text;
  */

  //Para Card

  const myCard = document.querySelector("#card");

  let textHTML = "";
  family.map((item, id) => {
    textHTML += `<div class="card" style="width: 20rem;">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvyBCVWGqUDX9dL9RzRJgzKBKE2eqztcy66w&usqp=CAU" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"> ${item.name} ${item.age} </h5>
    <p class="card-text"> I´m a ${item.gender} and I love to ${item.hobbie} </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;
  });
  myCard.innerHTML = textHTML;
}; /* Fin */
