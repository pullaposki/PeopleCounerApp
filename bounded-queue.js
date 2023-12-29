class BoundedQueue {
    constructor(maxSize = 10) {
        this.maxSize = maxSize;
        this.data = [];
    }

    enqueue(item) {
        if (this.data.length >= this.maxSize) {
            this.data.shift();
        }
        this.data.push(item);
    }

    getItems() {
        return this.data;
    }
}

export default BoundedQueue;