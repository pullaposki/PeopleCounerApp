export class Saver {
    constructor(saveDisplayElementId, saveBtnId, counter) { // passing counter instance as parameter
        this.saveDisplayElement = document.getElementById(saveDisplayElementId);
        this.counter = counter; // saving counter instance to a property

        if (this.saveDisplayElement) {
            document.getElementById(saveBtnId).addEventListener('click',
                () => this.displaySaveCount(this.counter.currentCount)); // use counter.count as parameter
        }
    }

    displaySaveCount(currentCount) {
        this.saveDisplayElement.innerText = currentCount;
    }
}