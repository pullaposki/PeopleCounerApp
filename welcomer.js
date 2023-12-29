import {ElementValidator} from "./element-validator.js";

export class Welcomer{
    constructor(welcomeElement) {
        ElementValidator.validateElements(welcomeElement);
        
        this.welcomeElement = welcomeElement;
        
        this.name = "Janne Soikkeli";
        this.greeting = "Welcome";    
        
        this.displayWelcome();
    }    

    displayWelcome(){
        this.welcomeElement.innerText = this.greeting + " " + this.name + "✌️";
    }
}