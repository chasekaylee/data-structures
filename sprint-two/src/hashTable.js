

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var value, changed;

  if (!(Array.isArray(this._storage.get(index)))) {
    this._storage.set(index, []);
  } 
  value = this._storage.get(index);
  //if statement to prevent unneccessary looping
  if (value.length > 0) {
    for (var i = 0; i < value.length; i++) {
      if (value[i][0] === k) {
        value[i][1] = v;
        changed = true;
      }
    }
  }
  //if nothing was found, nothing was changed, is new key
  if (!changed) {
    value.push([k, v]);
  }
  this._storage.set(index, value);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var value = this._storage.get(index);
  for (var i = 0; i < value.length; i++) {
    if (value[i][0] === k) {
      return value[i][1];
    }
  }
};
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var value = this._storage.get(index);
  for (var i = 0; i < value.length; i++) {
    if (value[i][0] === k) {
      value.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert: best case O(1), average O(n)
 retrieve: O(n)
 remove: O(n)
 */


