/*globals describe it expect */
const Ship = require('../src/cruiseShips.js');

describe ('Ship', () => {
    it('can be initiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });

    it('Has a starting port', () => {
        const boat1 = new Ship('Ferry');

        expect(boat1.startingPort).toBe('Portsmouth')
    });

    it('returns Home post as defult', () => {
        const boat1 = new Ship('Ferry');

        expect(boat1.location).toBe('In Home Port')
    });



    describe ('setSail', () => {
    xit('updates location to at sea when setSail is called', () => {
        const boat1 = new Ship('Ferry');

        boat1.setSail();

        expect(boat1.setSail).toEqual('At Sea')
        });
    });
});