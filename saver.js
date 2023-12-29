import BondedQueue from "./bounded-queue.js";

export class Saver {
    constructor(saveDisplayElementId, saveBtnId, counter) {
        this.saveDisplayElement = document.getElementById(saveDisplayElementId);
        
        this.counter = counter;
        
        this.previouslySavedValuesQueue = new BondedQueue(3);
        //this.previouslySavedValues = [];

        if (this.saveDisplayElement) {
            document.getElementById(saveBtnId).addEventListener('click',
                () => this.displaySaveCount(this.counter.get())); // Use the accessor method
        }
    }

    displaySaveCount(count) {
        this.previouslySavedValuesQueue.enqueue(count);
        
        this.saveDisplayElement.innerText = this.previouslySavedValuesQueue.data;
    }
}