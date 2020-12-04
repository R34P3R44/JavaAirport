'use strict';

describe('PLane', function(){
    var plane;
    var airport;
    beforeEach(function(){
        plane = new Plane();
        airport = jasmine.createSpyObj('airport',['clearForLanding']);
    });
    it('can land at an airport', function(){
        plane.land(airport);
        expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
    });
    it('can take off form an airport', function(){
        plane.land(airport);
        plane.takeoff();
        expect(airport.clearForTakeOff).toHaveBeenCalled();
    });
});