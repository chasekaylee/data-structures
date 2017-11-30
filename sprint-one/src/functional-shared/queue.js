var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};
  extend(someInstance, queueMethods);
  return someInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[Object.keys(this.storage).length] = value; 
  },
    
  dequeue: function() {
    var dq = this.storage[0];
    delete Object.keys(this.storage)[0];
    
    for (var i = 0; i < this.size(); i++) {
      this.storage[i] = this.storage[i + 1];
    }
    
    delete this.storage[this.size() - 1];
    
    return dq;
  },
    
  // INPUT: n/a
  // OUTPUT: returns a number 
  size: function() {
    return Object.keys(this.storage).length;
  }
};


