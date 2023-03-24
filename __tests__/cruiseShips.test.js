/*globals describe it expect */
const Ship = require('../src/cruiseShips.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/itinerary.js');

describe ('Ship', () => {
    describe ('with ports and an itinerary', () =>{
        let boat1;
        let portsmouth;
        let calais;
        let itinerary;

        beforeEach(() => {
            portsmouth = new Port('Portsmouth');
            calais = new Port('Calais');
            itinerary = new Itinerary([portsmouth, calais]);
            boat1 = new Ship(itinerary);
        });

        it('can be instantiated', () => {
            const port = new Port('Portsmouth');
            const itinerary = new Itinerary([port]);
            const ship = new Ship(itinerary);
    
            expect(ship).toBeInstanceOf(Object);
        });

        it('Has a starting port', () => {
            const portsmouth = new Port('Portsmouth');
            const itinerary = new Itinerary([portsmouth]);
            const boat1 = new Ship(itinerary);
    
            expect(boat1.currentPort).toBe(portsmouth);
        });

        it('can set sail', () => {
            const portsmouth = new Port('Portsmouth');
            const calais = new Port('Calais');
            const itinerary = new Itinerary([portsmouth, calais]);
            const boat1 = new Ship(itinerary);
        
            boat1.setSail();
        
            expect(boat1.currentPort).toBeFalsy();
            expect(portsmouth.ships).not.toContain(boat1);
         });

         it('Gets added to port on instantiation', () => {
            const portsmouth = new Port('Portsmouth');
            const itinerary = new Itinerary([portsmouth]);
            const boat1 = new Ship(itinerary);
    
            expect(portsmouth.ships).toContain(boat1);
         });
    })



     it('Can dock at a diferent port', () => {
        const portsmouth = new Port('Portsmouth');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([portsmouth, calais]);
        const boat1 = new Ship(itinerary);

        boat1.setSail();
        boat1.dock();

        expect(boat1.currentPort).toBe(calais);
        expect(calais.ships).toContain(boat1);
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

