var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = []; 

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children[this.children.length] = Tree(value);
};

treeMethods.contains = function(target) {
  var isFound = false; 
  
  if (JSON.stringify(this.value) === JSON.stringify(target)) {
    return true;
  }
  
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      isFound = true;
    }    
  }
  
  return isFound;
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild: O(1)
 contains: O(n)
 */
