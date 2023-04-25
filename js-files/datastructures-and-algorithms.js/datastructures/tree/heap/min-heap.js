// parent = (i - 1) / 2
// child = 2 * i + 1
// root = this.heap[0]
class MinHeap {
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
      // return root;
    }
  
    peek() {
      return this.heap.length === 0 ? null : this.heap[0];
    }
  
    _bubbleUp(index) {
      // find parent 
      const parentIndex = Math.floor((index - 1) / 2)
      // parent should be less than child. if child less than parent , swap
      if (index > 0 && this.heap[index] < this.heap[parentIndex]) {
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        this._bubbleUp(parentIndex);
      }
    }
  
    _bubbleDown(index) {
      const leftChildIndex = index * 2 + 1;
      const rightChildIndex = index * 2 + 2;
      let minIndex = index;
      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[index]) {
        minIndex = leftChildIndex;
      }
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[index]) {
        minIndex = rightChildIndex;
      }
      if (minIndex !== index) {
        [this.heap[index], this.heap[minIndex]] = [this.heap[minIndex], this.heap[index]];
        this._bubbleDown(minIndex);
      }
    }
  }
  