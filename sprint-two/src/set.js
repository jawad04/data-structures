var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  
  return set;
};

var setPrototype = {};


//Time complexity O(n)
setPrototype.add = function(item) {
  if(!this._storage.includes(item)){
    this._storage.push(item);
  }  
};


//Time complexity O(n)
setPrototype.contains = function(item) {
  return this._storage.includes(item);
};

//Time complexity O(n)
setPrototype.remove = function(item) {//2
  var itemIndex = this._storage.indexOf(item);//2
  if(itemIndex !== -1){
    this._storage.splice(itemIndex,1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
