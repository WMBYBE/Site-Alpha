const enemy = (Name, HP, ...moves) => {
    let name = Name;
    let hp = HP;
    let moveList = moves;

    return {
        getName: function() {
            return name;
        },
        getHP: function() {
            return hp;
        },
        appendMove: function() {
            let movesDiv = document.querySelector('.moves')
            for (let move of moveList){
                let moveParagraph = document.createElement('p');
                moveParagraph.textContent = move;
                movesDiv.appendChild(moveParagraph);
            }
        }

    };
}

let newEnemy = enemy("goblin", 22, "scratch", "snarl", "spit");
newEnemy.appendMove();
console.log("name:", newEnemy.getName());
console.log("HP:", newEnemy.getHP());