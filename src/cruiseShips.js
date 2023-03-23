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

const boat1 = new Ship('Ferry');

module.exports = Ship;
  