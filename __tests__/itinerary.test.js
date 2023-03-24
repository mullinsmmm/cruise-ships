const Itinerary = require('../src/itinerary.js');
const Port = require('../src/Port.js');

describe ('Itinerary', () => {
    it('can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });

    it('Can have ports', () => {
        const portsmouth = new Port('Portsmouth');
        const calais = new Port('Calais');

        const itinerary = new Itinerary([portsmouth, calais]);

        expect(itinerary.ports).toEqual([portsmouth, calais]);
    })
});