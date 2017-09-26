function Weather() {
  this._weatherArray = ['sunny', 'rainy', 'windy', 'stormy']

}

Weather.prototype.sample = function () {
  weatherForecast = this._weatherArray[Math.floor(Math.random()*this._weatherArray.length)];
  return weatherForecast;
};
