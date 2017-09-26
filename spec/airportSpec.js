describe("Airport", function() {
  var plane;
  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  describe('#land', function() {
    it("should accept landing planes", function() {
      plane = new Plane();
      airport.land(plane);
      expect(airport._planes.length).toEqual(1);
    });
  });

  describe('#takeoff', function() {
    it('should allow planes to leave the airport', function() {
      plane = new Plane();
      airport.land(plane);
      expect(airport._planes.length).toEqual(1);
      airport.takeoff(plane);
      expect(airport._planes.length).toEqual(0);
    });
  });
});
