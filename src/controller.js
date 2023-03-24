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
    portsElements.style.width = '0px';
  };
};

if(typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
} else {
    window.Controller = Controller;
}
}());