(function exportController() {

function Controller (ship) {
    this.ship = ship;

    this.initialiseSea();

    document.querySelector('#sailbutton').addEventListener('click', () => {
        this.setSail();
      });
};

Controller.prototype = {

    initialiseSea() {
    const backgrounds = ['./images/water0.png', './images/water1.png'];
    let backgroundIndex = 0;
  
    //finds div id viewport and returns DOM object
        window.setInterval(() => {
        document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
        backgroundIndex += 1;
        }, 1000);
    },
  
    renderPorts(ports) {
    const portsElement = document.querySelector('#ports');
    portsElement.style.width = '0px';
  
        ports.forEach((port, index) => {
            //new DOM element
        const newPortElement = document.createElement('div');
        newPortElement.className = 'port';

        newPortElement.dataset.portName = port.name;
        newPortElement.dataset.portIndex = index;

        portsElement.appendChild(newPortElement);

        const portsElementWidth = parseInt(portsElement.style.width, 10);
        portsElement.style.width = `${portsElementWidth + 256}px`;
        });
    },

    renderShip() {
        this.ship = ship

        const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
        const portElement = document.querySelector(`[data-port-index='${shipPortIndex}']`);

        const shipElement = document.querySelector('#ship');
        shipElement.style.top = '${portElement.offsetTop + 32}px';
        shipElement.style.left = '${portElement.offsetLeft - 32}px';
    },

    setSail() {
        const ship = this.ship

        const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
        const nextPortIndex = currentPortIndex + 1;
        const nextPortElement = document.querySelector(`[data-port-index='${nextPortIndex}']`);

        if (!nextPortElement) {
            return alert('End of the line!');
            }

        const shipElement = document.querySelector('#ship');
        const sailInterval = setInterval(() => {
        const shipLeft = parseInt(shipElement.style.left, 10);
        if (shipLeft === (nextPortElement.offsetLeft - 32)) {
            ship.setSail();
            ship.dock();
            clearInterval(sailInterval);
    }
        shipElement.style.left = `${shipLeft + 1}px`;
        }, 20);
    },
};

        if(typeof module !== 'undefined' && module.exports) {
            module.exports = Controller;
        } else {
            window.Controller = Controller;
        }
    }());