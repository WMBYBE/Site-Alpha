const array = [45, 38, 17, 108];
let number = 1;
function Viper(){
    number++;
    console.log(number)
}

function Helmet(){
    if (number %2 == 0)
        console.log(number)
    else
    console.log("this number is Odd")
}

for (let i in array) {
    number = array[i];
    Helmet();
}
