// Define the Counter class
export class Counter {
    
    // Define the constructor function for the Counter class
    constructor(elementId, buttonId) {
        
        // Initialize a property 'currentCount' of the Counter instance to 0
        this.currentCount = 0;

        // Get the HTML element with the provided elementId and 
        // set it to a property 'countElement' of the Counter instance
        this.countElement = document.getElementById(elementId);
        
        // Get the button using provided buttonId. This is a private variable.
        let button = document.getElementById(buttonId);

        // If both HTML elements are successfully accessed, 
        // bind the 'click' event of the button to the incrementCount method
        // Note: .bind(this) is used to ensure that 'this' in incrementCount() refers to the Counter instance
        if (this.countElement && button) {
            button.addEventListener('click', function () {
                this.incrementCount();
            }.bind(this));
        }
    }

    // Define the incrementCount method for the Counter class
    incrementCount() {
        // Increment the 'currentCount' property of the Counter instance
        this.currentCount++;
        // Update the innerText of 'countElement' to the updated 'currentCount'
        this.countElement.innerText = this.currentCount;
    }
}