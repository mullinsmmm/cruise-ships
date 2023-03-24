const Port = require('../src/Port.js');

describe ('Port', () => {
    describe ('with ports and ships', () => {
        let port;
        let ships;
        let titanic;
        let queenMary;

        beforeEach(() => {
            port = new Port('Portsmouth');
            port = new Port('Calais');
            ships = jest.fn();
            titanic = jest.fn();
            queenMary = jest.fn();
        });

    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });

    it('has a name', () => {
        expect(port.name).toBe('Calais');
    });

    it('can add a ship', () => {
        port.addShip(titanic);
        port.addShip(queenMary);

        expect(port.ships).toContain(titanic, queenMary);
    });

    it('Can remove a ship', () => {
        port.addShip(titanic);
        port.addShip(queenMary);

        port.removeShip(titanic);

        expect(port.ships).toEqual([queenMary]);
    });
  });
});