export class Counter {
    constructor(elementId, buttonId) {
        this.currentCount = 0;
        this.countElement = document.getElementById(elementId);
        let button = document.getElementById(buttonId);
        if (this.countElement && button) {
            button.addEventListener('click', function () {
                this.increment();
            }.bind(this));
        }
    }

    // Accessor method that returns the currentCount
    get() {
        return this.currentCount;
    }

    increment() {
        this.currentCount++;
        this.countElement.innerText = this.currentCount;
    }
}