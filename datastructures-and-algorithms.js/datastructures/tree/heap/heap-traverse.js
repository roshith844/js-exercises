class HeapGraph {
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
      if (index > 0 && this.heap[index] < this.heap[parentIndex]) {
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        this._bubbleUp(parentIndex);
      }
    }
  
    _bubbleDown(index) {
      const leftChildIndex = index * 2 + 1;
      const rightChildIndex = index * 2 + 2;
      let minIndex = index;
      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[minIndex]) {
        minIndex = leftChildIndex;
      }
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[minIndex]) {
        minIndex = rightChildIndex;
      }
      if (minIndex !== index) {
        [this.heap[index], this.heap[minIndex]] = [this.heap[minIndex], this.heap[index]];
        this._bubbleDown(minIndex);
      }
    }
  
    bfs(start) {
      const visited = new Set();
      const queue = [start];
      while (queue.length > 0) {
        const node = queue.shift();
        if (!visited.has(node)) {
          visited.add(node);
          const neighbors = this.getNeighbors(node);
          for (let neighbor of neighbors) {
            queue.push(neighbor);
          }
        }
      }
      return visited;
    }
  
    dfs(start) {
      const visited = new Set();
      const stack = [start];
      while (stack.length > 0) {
        const node = stack.pop();
        if (!visited.has(node)) {
          visited.add(node);
          const neighbors = this.getNeighbors(node);
          for (let neighbor of neighbors) {
            stack.push(neighbor);
          }
        }
      }
      return visited;
    }
  
    getNeighbors(node) {
      const neighbors = [];
      const nodeIndex = this.heap.indexOf(node);
      if (nodeIndex !== -1) {
        const leftChildIndex = nodeIndex * 2 + 1;
        const rightChildIndex = nodeIndex * 2 + 2;
        if (leftChildIndex < this.heap.length) {
          neighbors.push(this.heap[leftChildIndex]);
        }
        if (rightChildIndex < this.heap.length) {
          neighbors.push(this.heap[rightChildIndex]);
        }
      }
      return neighbors;
    }
  }
  
  