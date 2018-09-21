

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};
//Time complexity O(1)
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = {};//ex:{5: {}}
};

//Time complexity O(1)
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {//5
  return this.nodes[node] !== undefined;
};

//Time complexity O(n)
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) { //5
  for (var key in this.nodes[node]) {//{4:{},5: {}}
    this.removeEdge(key, node);//{4:{},5: {}}.removeEdge(4,5)
  }
  delete this.nodes[node];
};

//Time complexity O(1)
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {//(4,5)
  return this.nodes[fromNode][toNode] !== undefined;
};

//Time complexity O(1)
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) { 
  this.nodes[fromNode][toNode] = true;
  this.nodes[toNode][fromNode] = true;
};

//Time complexity O(1)
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[fromNode][toNode]; 
  delete this.nodes[toNode][fromNode];
};


//Time complexity O(n)
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.nodes) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


