describe("Weather", function() {

  beforeEach(function() {
    weather = new Weather();
  });

  describe('weather', function() {
    it("should get stormy", function() {
      expect(weather._weatherArray.pop()).toBe('stormy');
    });
  });
});
