function Airport() {
  this._planes = [];
}

Airport.prototype.land = function(plane) {
    this._planes.push(plane);
};

Airport.prototype.takeoff = function(plane) {
  this._planes.pop(plane);
};

Airport.prototype.countPlanes = function() {
  console.log(this._planes.length);
};
