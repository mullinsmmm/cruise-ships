/*globals describe it expect */
const Ship = require('../src/cruiseShips.js');
const Port = require('../src/cruiseShips.js');

describe ('Ship', () => {
    xit('can be initiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });

    xit('Has a starting port', () => {
        const boat1 = new Ship('Ferry');

        expect(boat1.startingPort).toBe('Portsmouth')
    });

    xit('can set sail', () => {
        const boat1 = new Ship('Portsmouth');
    
        boat1.setSail();
    
        expect(boat1.startingPort).toBeFalsy();
     });
});

describe ('Port', () => {
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    })
});