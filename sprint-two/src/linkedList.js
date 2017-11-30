var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // creating new node with value 
    var node = Node(value);
    if (list.tail) {
      list.tail.next = node;
      list.tail = node;
    } else {
      list.tail = node;
      list.head = node;
    }     
  };

  list.removeHead = function() {
    // storing the value of what was removed
    var removed = list.head.value;
    // changing head reference to next node (garbage collector should remove old head *no reference*)
    list.head = list.head.next;
    //returns removed value
    return removed;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    
    while (currentNode.next !== null) {
      // check if current value is the target
      if (currentNode.value === target) {
        // return true
        return true;
      } 
      currentNode = currentNode.next;
    }
    
    return list.tail.value === target ? true : false;
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
 addTail : O(n)
 removeHead : O(1)
 contains: O(n)
 */
