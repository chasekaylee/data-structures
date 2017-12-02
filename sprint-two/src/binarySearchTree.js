var BinarySearchTree = function(value) {
  var bst = Object.create(BinarySearchTree);
  bst.value = value; 
  bst.left = null;
  bst.right = null;
  return bst;
};

BinarySearchTree.left = function() {
  return this.left;
};

BinarySearchTree.right = function() {
  return this.right;
};

BinarySearchTree.insert = function(value) {
  var node = BinarySearchTree(value);
  if (node.value < this.value) {
    if (!this.left) {
      this.left = node;
    } else {
      this.left.insert(node.value);
    }
  }
  if (node.value > this.value) {
    if (!this.right) {
      this.right = node;
    } else {
      this.right.insert(node.value);
    }
  }
};

BinarySearchTree.contains = function(target) {
  if (this.value === target) {
    return true;
  }

  if (target < this.value) {
    if (!this.left) {
      return false;
    } else {
      if (this.left.contains(target)) {
        return true;
      }
    }
  }

  if (target > this.value) {
    if (!this.right) {
      return false;
    } else {
      if (this.right.contains(target)) {
        return true;
      }     
    }
  }
  return false;
};

BinarySearchTree.depthFirstLog = function(func) {
  func(this.value);

  if (this.left) {
    this.left.depthFirstLog(func);
  } 
  if (this.right) {
    this.right.depthFirstLog(func);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
