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

    // check if head ! exists
    // if (!list.head) {
    //   // set head equal to tail
    //   list.head = node;
    // }     
  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
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
