const element = document.getElementById("attack");
element.addEventListener("click", attack);

function attack() {
    let hp = document.getElementById("damage").value;
    var dragon = document.getElementById("dragon")
    let result;
    let combat;
    var i = hp%2;
    dragon.style.display = "none";

    if(hp > 75){
        while (i < 5)
        {
            combat = "Clang!\n"
            document.getElementById("battle").innerHTML += combat;
            i++
        }
        result = "You defeated the dragon! Congrats!"
    }
    else{
        result = "Not good enough. The dragon has defeated you! boohoo!"
    }
    document.getElementById("post").innerHTML = result;
};
