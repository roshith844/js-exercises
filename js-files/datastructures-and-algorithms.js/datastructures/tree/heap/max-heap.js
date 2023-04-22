class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(val) {
      this.heap.push(val);
      this._bubbleUp(this.heap.length - 1);
    }
  
    delete() {
      if (this.heap.length === 0) return null;
      const root = this.heap[0];
      this.heap[0] = this.heap.pop();
      this._bubbleDown(0);
      return root;
    }
  
    peek() {
      return this.heap.length === 0 ? null : this.heap[0];
    }
  
    _bubbleUp(index) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (index > 0 && this.heap[index] > this.heap[parentIndex]) {
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        this._bubbleUp(parentIndex);
      }
    }
  
    _bubbleDown(index) {
      const leftChildIndex = index * 2 + 1;
      const rightChildIndex = index * 2 + 2;
      let maxIndex = index;
      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[maxIndex]) {
        maxIndex = leftChildIndex;
      }
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[maxIndex]) {
        maxIndex = rightChildIndex;
      }
      if (maxIndex !== index) {
        [this.heap[index], this.heap[maxIndex]] = [this.heap[maxIndex], this.heap[index]];
        this._bubbleDown(maxIndex);
      }
    }
  }
  