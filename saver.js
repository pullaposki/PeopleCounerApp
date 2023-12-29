export class Saver {
    constructor(saveDisplayElementId, saveBtnId, counter) {
        this.saveDisplayElement = document.getElementById(saveDisplayElementId);
        this.counter = counter;

        if (this.saveDisplayElement) {
            document.getElementById(saveBtnId).addEventListener('click',
                () => this.displaySaveCount(this.counter.get())); // Use the accessor method
        }
    }

    displaySaveCount(count) {
        this.saveDisplayElement.innerText = count;
    }
}