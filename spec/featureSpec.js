'use strict';

describe('Feature Test:', function(){
    var plane;
    var airport;
  
    beforeEach(function(){
      plane = new Plane();
      airport = new Airport();
    });
  
    it('planes can be instructed to land at an airport', function(){
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });
    it('blocks takeoff when weather is stormy', function(){
      plane.land(airport)
      spyOn(airport,'isStormy').and.returnValue(true);
      expect(function(){ plane.takeoff();}).toThrowError('cannot takeoff durin storm');
      expect(airport.planes()).toContain(plane);
    });
  });