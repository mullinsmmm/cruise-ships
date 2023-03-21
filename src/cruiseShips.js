const startingPort = ['Portsmouth'];

class Ship {
    constructor(name) {
      this.name = name,
      this.startingPort = startingPort
    };

    setSail(){
        this.startingPort = '';
    };
};

class Port {
    constructor(name) {
        this.name = name
    };
};

const boat1 = new Ship('Ferry');
const port1 = new Port('Calais');


module.exports = Ship;
  