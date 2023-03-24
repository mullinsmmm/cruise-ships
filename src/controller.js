(function exportController() {
function Controller () {
    this.initialiseSea();
}

Controller.prototype.initialiseSea = function initialiseSea() {
    const backgrounds = [
        './images/water0.png',
        './images/water1.png',
    ];

    let backgroundIndex = 0;

    window.setInterval(() => {
    document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
    backgroundIndex += 1;
  }, 1000);

  renderPorts (ports){
    const portsElement = document.querySelector('#ports');
    portsElement.style.width = '0px';
  };

  //This section could be in the wrong place
  ports.forEach((port, index) => {
    const newPortElement = document.createElement('div');
    newPortElement.className = 'port';
  
    portsElement.appendChild(newPortElement);
  })
};

if(typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
} else {
    window.Controller = Controller;
}
}());