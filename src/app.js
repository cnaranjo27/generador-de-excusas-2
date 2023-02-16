/* eslint-disable */
import "bootstrap";
import "./style.css";

//cuando el navegador renderice el html, entonces
//ejecutará lo siguiente
window.onload = function() {
  //write your code here
  console.log("vengo de jupiter?");
  let who = ["Mi perro", "Mi abuela", "Mi tortuga", "Mi gecko"];
  let action = ["se comio", "se robo", "trituro", "vomito"];
  let what = ["mi tarea", "las llaves", "mi libro"];
  let when = [
    "antes de clase",
    "durante el almuerzo",
    "durante mis vacaciones",
    "en misa",
    "despues de mi fiesta"
  ];

  let a = Math.floor(Math.random() * who.length);
  let b = Math.floor(Math.random() * action.length);
  let c = Math.floor(Math.random() * what.length);
  let d = Math.floor(Math.random() * when.length);

  let resultado = who[a] + " " + action[b] + " " + what[c] + " " + when[d];

  document.getElementById("excusa").innerHTML = resultado;
};
