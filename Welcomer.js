export class Welcomer{
    constructor(welcomeElementId) {
        this.welcomeElement = document.getElementById(welcomeElementId);
        this.name = "Janne Soikkeli";
        this.greeting = "Welcome";    
        
        this.displayWelcome();
    }
    

    displayWelcome(){
        this.welcomeElement.innerText = this.greeting + " " + this.name;
    }
}