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
            portsmouth = {
                addShip: jest.fn(),
                removeShip: jest.fn(),
                name: 'Portsmouth',
                ships: []
              };
            
              calais = {
                addShip: jest.fn(),
                removeShip: jest.fn(),
                name: 'Calais',
                ships: []
              };

              itinerary = {
                ports: [portsmouth, calais]
              };

            boat1 = new Ship(itinerary);
        });

        it('can be instantiated', () => {
            expect(boat1).toBeInstanceOf(Object);
        });

        it('Has a starting port', () => {
            expect(boat1.currentPort).toBe(portsmouth);
        });

        it('can set sail', () => {
            boat1.setSail();
        
            expect(boat1.currentPort).toBeFalsy();
            expect(portsmouth.removeShip).toHaveBeenCalledWith(boat1);
         });

         it('Gets added to port on instantiation', () => {
            expect(portsmouth.addShip).toHaveBeenCalledWith(boat1);
         });

     it('Can dock at a diferent port', () => {
        boat1.setSail();
        boat1.dock(calais);

        expect(boat1.currentPort).toEqual(calais);
        expect(calais.addShip).toHaveBeenCalledWith(boat1);
     });

     it('Cant sail further that its itinerary', () => {
        boat1.setSail();
        boat1.dock();

        expect(() => boat1.setSail()).toThrowError('End of itinerary reached');
     });

   });

});

