// noinspection SpellCheckingInspection

//import {Saver} from "./saver.js";
import {Counter} from "./counter.js";
import {Welcomer} from "./welcomer.js";

let counter = instantiateCounter();

new Welcomer("welcome-el");
//new Counter(document.getElementById("increment-btn"), "save-btn", "count-el", "save-el");
//const counter = new Counter("count-el", "increment-btn", "save-btn");
//const saver = new Saver("save-el", "save-btn", counter); // Pass counter instance to Saver constructor

function instantiateCounter(){
    let incrementButton = document.getElementById('increment-btn');
    let saveButton = document.getElementById('save-btn');
    let countElement = document.getElementById('count-el');
    let saveDisplayElement = document.getElementById('save-el');

    return new Counter(incrementButton, saveButton, countElement, saveDisplayElement);
}