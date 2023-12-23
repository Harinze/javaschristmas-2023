/**
 * 🎄 Challenge: 
 * 1. The Christmas tree's lights should switch 
 *    on and off every 800 miliseconds.
 * 
 * Stretch Goal:
 *    Make the blue and red lights flash alternately.
 **/ 

document.addEventListener('DOMContentLoaded', function() {
    const blueLights = document.querySelectorAll('.lights.blue');
    const redLights = document.querySelectorAll('.lights.red');

    function turnOnLights(lights) {
        lights.forEach(light => {
            light.classList.add('lights-on');
        });
    }

    function turnOffLights(lights) {
        lights.forEach(light => {
            light.classList.remove('lights-on');
        });
    }

    function toggleBlueRedLights() {
        turnOnLights(redLights);
        turnOffLights(blueLights);

        setTimeout(() => {
            turnOnLights(blueLights);
            turnOffLights(redLights);
        }, 800); 
    }

    setInterval(() => {
        toggleBlueRedLights();
    }, 1600);
});

