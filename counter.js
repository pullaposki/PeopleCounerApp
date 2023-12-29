export class Counter {
    constructor(elementId, incrementButtonId, saveButtonId) {
        this.incrementButton = document.getElementById(incrementButtonId);
        this.saveButton = document.getElementById(saveButtonId);
        this.countElement = document.getElementById(elementId);
        
        if(!this.incrementButton || !this.saveButton || !this.countElement){
            console.log("element not found");
            return;
        }        
        
        this.currentCount = 0;
        
        this.incrementButton.addEventListener("click", () => this.increment());
        this.saveButton.addEventListener("count-saved", () => this.resetCounter());
    }

    // Accessor method that returns the currentCount
    get() {
        return this.currentCount;
    }

    increment() {
        this.currentCount++;
        this.countElement.innerText = this.currentCount;
    }
    
    resetCounter(){
        this.currentCount = 0;
        this.countElement.innerText = this.currentCount;
    }
}