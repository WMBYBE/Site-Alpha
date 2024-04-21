class Leaf {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const head = new Leaf(5);
const leaf1 = new Leaf(3);
const leaf2 = new Leaf(8);
const leaf3 = new Leaf(2);
const leaf4 = new Leaf(4);
const leaf5 = new Leaf(7);
const leaf6 = new Leaf(9);
const leaf7 = new Leaf(1);
const leaf8 = new Leaf(6);
const leaf9 = new Leaf(10);

head.left= leaf1;
head.right= leaf2;
leaf1.left= leaf3;
leaf1.right= leaf4;
leaf2.left= leaf5;
leaf2.right= leaf6;
leaf3.left= leaf7;
leaf5.right= leaf8;
leaf6.left = leaf9;

let breadth = [];
let depth = [];

function depthFirstSearch(node = head) {
    if (node !== null) {
        depthFirstSearch(node.left);
        depth.push(node.value);
        depthFirstSearch(node.right);
    }
    displayOutput();
}

function breadthFirstSearch() {
    const queue = [head];
    breadth = [];
    while (queue.length > 0) {
        const node = queue.shift();
        breadth.push(node.value);
        if (node.left !== null) queue.push(node.left);
        if (node.right !== null) queue.push(node.right);
    }
    displayOutput();
}

function displayOutput() {
    document.getElementById('output').innerText = `Depth: [${depth.join('.')}]\nBreadth: [${breadth.join('.')}]`;
}