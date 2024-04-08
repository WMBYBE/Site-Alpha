let arr = [];

function update() {
    const outputParagragh = document.getElementById('output');
    outputParagragh.innerHTML = "";
    arr.forEach((item, index) => {
        outputParagragh.innerHTML += `${index + 1}. ${item}<br>`;
    }, '')
}

function pushItem() {
    const inputValue = document.getElementById('inputValue').value;
    arr.push(inputValue);
    update();
}

function popItem() {
    arr.pop();
    update();
}

function unshiftItem() {
    const inputValue = document.getElementById('inputValue').value;
    arr.unshift(inputValue);
    update();
}

function shiftItem() {
    arr.shift();
    update();
}

function arrMap() {
    const inputValue = document.getElementById('inputValue').value;
    arr = arr.map(item => inputValue + item);
    update();
}