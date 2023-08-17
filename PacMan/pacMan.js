function up() {
    let element = document.getElementById('cheems');
    if (parseInt(element.style.top) >= 1) {
        element.style.top = parseInt(element.style.top) - 5 + 'px'
    }
}

function down() {
    let element = document.getElementById('cheems');
    if (parseInt(element.style.top) <= 445) {
        element.style.top = parseInt(element.style.top) + 5 + 'px'
    }
}

function left() {
    let element = document.getElementById('cheems');
    if (parseInt(element.style.left) >= -4) {
        element.style.left = parseInt(element.style.left) - 5 + 'px'
    }
}

function right() {
    let element = document.getElementById('cheems');
    if (parseInt(element.style.left) <= 450) {
        element.style.left = parseInt(element.style.left) + 5 + 'px'
    }
}

function move(evt) {
    switch (evt.keyCode) {
        case 38:
            up();
            break
        case 40:
            down();
            break
        case 37:
            left();
            break
        case 39:
            right();
            break
    }
}

function docReady() {
    window.addEventListener('keydown', move)
}

let food = document.getElementById('food');
food.style.left = Math.random()*500 +'px';
food.style.top = Math.random()*500 + 'px';