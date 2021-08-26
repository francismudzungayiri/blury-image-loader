const loadingText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

var load = 0;

function bluring(){
    load++;

    if(load>99){
        clearInterval(interval);
    }
    loadingText.innerHTML = `${load}%`;
    loadingText.style.opacity = scale(load,0, 100, 1,0);
    bg.style.filter = `blur(${scale(load,0, 100, 50, 0)}px)`;
    

    console.log(load);
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }


var interval = setInterval(bluring, 30);
