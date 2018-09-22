var BinarySearchTree = function(value) {
  var obj = {};
  obj.value = value;
  obj.left = null;
  obj.right = null;
  _.extend(obj, binaryMethods)
  return obj;
};
//Time complexity O(n)
var binaryMethods = {};
binaryMethods.insert = function(value){
  var root = BinarySearchTree(value);
  recurseFunc(this);
  function recurseFunc(node){
    if(value < node.value){
      if(node.left === null ){
        node.left = root;
      }else{
        recurseFunc(node.left);
      }
    }
    if(value > node.value){
      if(node.right === null){
        node.right = root;
      }else{
        recurseFunc(node.right);
      }
    }
  }
};
//Time complexity O(n)
binaryMethods.contains = function(value){
  if(value > this.value && this.right !== null){
    return this.right.contains(value);
  }else if(value < this.value && this.left !== null){
    return this.left.contains(value);
  }else if(this.value === value){
    return true;
  }else{
    return false;
  }
};

//Time complexity O(n)
binaryMethods.depthFirstLog = function(cb,node){
 if(node === undefined){
   node = this;
 }else if(node === null){
    return;
 }
 cb(node.value);
 node.depthFirstLog(cb,node.left);
 node.depthFirstLog(cb, node.right);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
