const Port = require('../src/Port.js');

describe ('Port', () => {
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });

    it('has a name', () => {
        const port1 = new Port('Calais');

        expect(port1.name).toBe('Calais');
    });
});