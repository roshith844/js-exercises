class Graph {
    constructor() {
      this.vertices = [];
      this.edges = {};
    }
  
    addVertex(vertex) {
      if (!this.vertices.includes(vertex)) {
        this.vertices.push(vertex);
        this.edges[vertex] = [];
      }
    }
  
    addEdge(v1, v2) {
      if (this.vertices.includes(v1) && this.vertices.includes(v2)) {
        this.edges[v1].push(v2);
        this.edges[v2].push(v1);
      }
    }
  
    getVertices() {
      return this.vertices;
    }
  
    getEdges() {
      return this.edges;
    }
  
    toString() {
      let output = '';
      for (let vertex of this.vertices) {
        const adjacents = this.edges[vertex].join(', ');
        output += `${vertex} -> ${adjacents}\n`;
      }
      return output;
    }
  
    dfs(startVertex, visited = {}) {
      visited[startVertex] = true;
      console.log(startVertex);
  
      const neighbors = this.edges[startVertex];
      for (let neighbor of neighbors) {
        if (!visited[neighbor]) {
          this.dfs(neighbor, visited);
        }
      }
    }
  
    bfs(startVertex) {
      const visited = {};
      const queue = [];
  
      visited[startVertex] = true;
      queue.push(startVertex);
  
      while (queue.length > 0) {
        const vertex = queue.shift();
        console.log(vertex);
  
        const neighbors = this.edges[vertex];
        for (let neighbor of neighbors) {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
          }
        }
      }
    }
  }
  
  