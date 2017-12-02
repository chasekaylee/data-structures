

// Instantiate a new graph
var Graph = function() {
  this.storage = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {value: node, edges: []};
  this.storage.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i].value === node) {
      this.storage.splice(i, 1);
    }
  }
  for (var i = 0; i < this.storage.length; i++) {
    for (var j = 0; j < this.storage[i].edges.length; j++) {
      if (this.storage[i].edges[j].includes(node)) {
        this.storage[i].edges.splice(j, 1);
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.storage.length; i++) {
    for (var j = 0; j < this.storage[i].edges.length; j++) {
      if (this.storage[i].edges[j].includes(fromNode) && this.storage[i].edges[j].includes(toNode)) {
        return true;
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i].value === fromNode) {
      this.storage[i].edges.push([fromNode, toNode]);
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.storage.length; i++) {
    for (var j = 0; j < this.storage[i].edges.length; j++) {
      if (this.storage[i].edges[j].includes(fromNode) && this.storage[i].edges[j].includes(toNode)) {
        this.storage[i].edges.splice(j, 1);
      }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.storage.length; i++) {
    cb(this.storage[i].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode: O(1)
 contains: O(n)
 removeNode: O(n^2)
 hasEdge: O(n^2)
 addEdge: O(n)
 removeEdge: O(n^2)
 forEachNode: O(n)
 */


