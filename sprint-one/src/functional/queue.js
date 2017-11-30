var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var deleteCounter = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function() {
    var dequeued = storage[deleteCounter];
    delete storage[deleteCounter];
    deleteCounter++;
    return dequeued;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};