//generate random color


const randomcolor = function () {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;    //console.log(randomcolor());
};



//code
function startChangeColor() {
    document.querySelector("body").style.backgroundColor = randomcolor();
}
let intervalid = null;

document.querySelector('#start').addEventListener('click', function () {
    if (!intervalid) {
        intervalid = setInterval(startChangeColor, 1000);
    }
});

document.querySelector('#stop').addEventListener('click', function () {
    clearInterval(intervalid);
    intervalid = null;
});

