// noinspection SpellCheckingInspection

//import {Saver} from "./saver.js";
import {Counter} from "./counter.js";
import {Welcomer} from "./welcomer.js";

instantiateCounter();
instantiateWelcomer()

function instantiateCounter(){
    let incrementButton = document.getElementById('increment-btn');
    let saveButton = document.getElementById('save-btn');
    let countElement = document.getElementById('count-el');
    let saveDisplayElement = document.getElementById('save-el');

    new Counter(incrementButton, saveButton, countElement, saveDisplayElement);
}

function instantiateWelcomer(welcomeElementId){
    let welcomeElement = document.getElementById("welcome-el")
    
    new Welcomer(welcomeElement);
}