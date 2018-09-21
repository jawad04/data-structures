var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; 
  _.extend(newTree,treeMethods); 

  return newTree;
};

var treeMethods = {};

//Time complexity  O(1)
treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

//Time complexity O(n)
treeMethods.contains = function(target) {
  var node = this.value;
  if(node === target){
    return true;
  }
  if(this.children.length > 0){
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].contains(target)){
        return true;
      }
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
