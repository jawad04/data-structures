var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  //O(1) time complexity
  list.addToTail = function(value) {
    var newNode = Node(value);
    if (this.tail) {
     this.tail.next = newNode; 
    } else if(!this.tail) {
      this.head = newNode;//4
    }
    this.tail = newNode;
    
  };

  list.removeHead = function() {
    var currentHead = this.head.value;
    this.head = this.head.next;
    return currentHead;
  };

  list.contains = function(target) {
    var compareEl = this.head;
    while(compareEl !== null){
      if(compareEl.value === target){
         return true;
      }
    compareEl = compareEl.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
