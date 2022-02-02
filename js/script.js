let counter = 0;
let timer;
let counterlimit = 8;
const button = document.querySelector('button');
const count = document.querySelector('span.count');

button.addEventListener('click', () => {
    timer = setInterval(counting, 1000);
    button.disabled = true;
    counter = 0;
    
});

function counting() {
    let seconds = (Math.floor(counter % 60));
    count.innerHTML = `${seconds}`;
    counter++;
    
    if (counter === counterlimit) {
        test();
    }
};

function test() {
    clearInterval(timer);
    button.disabled = false;
};

