let location = ('In Home Port');
const startingPort = ('Portsmouth');

class Ship {
    constructor(name) {
      this.name = name,
      this.startingPort = startingPort,
      this.location = location
    }

    setSail(){}
    
}

const boat1 = new Ship('Ferry');


module.exports = Ship;
  