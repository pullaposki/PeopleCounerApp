// export class Counter {
//     constructor(incrementButton, saveButton, countElement){
//         if(!incrementButton || !saveButton || !countElement){
//             throw new Error("element is missing");
//         }
//
//         this.incrementButton = incrementButton;
//         this.saveButton = saveButton;
//         this.countElement = countElement;
//         this.currentCount = 0;
//
//         this.incrementButton.addEventListener("click", () => this.increment());
//         this.saveButton.addEventListener("count-saved", () => this.reset());
//     }
//
//     get() {
//         return this.currentCount;
//     }
//
//     increment() {
//         this.currentCount++;
//         this.updateCountDisplay();
//     }
//
//     reset(){
//         this.currentCount = 0;
//         this.updateCountDisplay();
//     }
//
//     updateCountDisplay() {
//         this.countElement.innerText = this.currentCount;
//     }
// }

import BondedQueue from "./bounded-queue.js";

export class Counter {
    constructor(incrementButton, saveButton, countElement, saveDisplayElement) {
        if (!incrementButton || !saveButton || !countElement || !saveDisplayElement) {
            throw new Error("All elements are required");
        }

        this.incrementButton = incrementButton;
        this.countElement = countElement;
        this.currentCount = 0;

        this.saver = new CountSaver(saveButton, saveDisplayElement, this);

        this.incrementButton.addEventListener("click", () => this.increment());
        this.saver.saveButton.addEventListener("count-saved", () => this.reset());
    }

    get() {
        return this.currentCount;
    }

    increment() {
        this.currentCount++;
        this.updateCountDisplay();
    }

    reset() {
        this.currentCount = 0;
        this.updateCountDisplay();
    }

    updateCountDisplay() {
        this.countElement.innerText = this.currentCount;
    }
}

class CountSaver {
    constructor(saveButton, saveDisplayElement, counter) {
        this.saveButton = saveButton;
        this.saveDisplayElement = saveDisplayElement;

        console.log(this.saveButton instanceof HTMLElement); // Should print true if saveButton is a DOM Element
        console.log(typeof this.saveButton.addEventListener === 'function'); // Should print true if addEventListener method exists
        
        this.counter = counter;
        
        this.previouslySavedValuesQueue = new BondedQueue(3);

        this.saveButton.addEventListener("click", () => this.save(this.counter.get()));
    }

    save(count) {
        this.previouslySavedValuesQueue.enqueue(count);
        this.saveDisplayElement.innerText = this.previouslySavedValuesQueue.data;
        this.fireSaveEvent();
    }

    fireSaveEvent() {
        let event = new Event("count-saved");
        this.saveButton.dispatchEvent(event);
    }
}