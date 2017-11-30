var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};
  extend(someInstance, Queue.queueMethods);
  return someInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

Queue.queueMethods = {};


Queue.queueMethods.enqueue = function(value) {
  this.storage[Object.keys(this.storage).length] = value; 
},
  
Queue.queueMethods.dequeue = function() {
  var dq = Object.keys(this.storage)[0];
  
  delete Object.keys(this.storage)[0];
  
  return dq;
},
  
// INPUT: n/a
// OUTPUT: returns a number 
Queue.queueMethods.size = function() {
  return Object.keys(this.storage).length;
};