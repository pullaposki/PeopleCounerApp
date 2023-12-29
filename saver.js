// import BondedQueue from "./bounded-queue.js";
//
// export class Saver {
//     constructor(saveDisplayElementId, saveBtnId, counter) {
//         this.saveDisplayElement = document.getElementById(saveDisplayElementId);
//         this.saveButtonElement = document.getElementById(saveBtnId);        
//
//         if (!this.elementsExist) return;
//
//         this.counter = counter;
//         this.previouslySavedValuesQueue = new BondedQueue(3);
//        
//         this.saveButtonElement.addEventListener('click',
//             () => this.displaySaveCount(this.counter.get()));
//     }
//
//     displaySaveCount(count) {
//         this.previouslySavedValuesQueue.enqueue(count);
//         this.saveDisplayElement.innerText = this.previouslySavedValuesQueue.data;
//
//         this.fireSaveEvent();
//     }
//    
//     fireSaveEvent(){
//         this.eventTarget = this.saveButtonElement;
//         let event = new Event("count-saved");
//         this.eventTarget.dispatchEvent(event);
//     }
//
//     elementsExist() {
//         if (!(this.saveDisplayElement && this.saveButtonElement)) {
//             console.log("element not found!");
//             return false;
//         }
//         return true;
//     }
// }