var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  extend(someInstance, stackMethods);
  return someInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {
  push: function(value) {
    if (Object.keys(this.storage).length === 0) {
      this.storage[0] = value;
    } else {
      this.storage[this.size()] = value;
    }
  },
  
  pop: function() {
    var popped = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return popped;
  },
  
  size: function() {
    return Object.keys(this.storage).length;
  }
};


