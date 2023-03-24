/*globals describe it expect */
const Ship = require('../src/cruiseShips.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/itinerary.js');

describe ('Ship', () => {
    it('can be initiated', () => {
        const port = new Port('Portsmouth');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);

        expect(ship).toBeInstanceOf(Object);
    });

    it('Has a starting port', () => {
        const port = new Port('Portsmouth');
        const itinerary = new Itinerary([port]);
        const boat1 = new Ship(port);

        expect(boat1.currentPort).toBe(port);

    });

    it('can set sail', () => {
        const port = new Port('Portsmouth');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([port]);
        const boat1 = new Ship(itinerary);
    
        boat1.setSail();
    
        expect(boat1.previousPort).toBe(port);
        expect(boat1.currentPort).toBeFalsy();
     });

     it('Can dock at a diferent port', () => {
        const portsmouth = new Port('Portsmouth');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([portsmouth, calais]);
        const boat1 = new Ship(itinerary);

        boat1.setSail();
        boat1.dock();

        expect(boat1.currentPort).toBe(calais);
     });

     it('Cant sail further that its itinerary', () => {
        const portsmouth = new Port('Portsmouth');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([portsmouth, calais]);
        const boat1 = new Ship(itinerary);

        boat1.setSail();
        boat1.dock();

        expect(() => boat1.setSail()).toThrowError('End of itinerary reached');
     });
});

