/* William Brouillette
1/17/2024
1. Add another new page to your portfolio site, or add to your existing testing page
    2. Create a new function that takes 1 parameter. If that value is odd, it should print it. Then, regardless of odd or even, 
    it should add 1 to it, and then return it
    3. Create a new variable starting at a number of your choice
    4. Create a for loop that iterates 5 times, calling the function that you made each time. The value given to the function should be the variable from step 3
    5. When you run the site, you should see 5 console logs, starting at what you set the variable to in step 3, and incrementing each successive log
    6. Publish your changes to github, screenshot the console, and return the screenshot here*/

let test = 25

test += 100;

let answer = prompt("What is your favorite day of the week?");

console.log("variable labeled test started with a value of 25 and is now at" + " " + test)
console.log("The variable labeled answer was prompted and return" + " " + answer);

function oddGuy(){
    if (number % 2 ==1) 
        { console.log(number)}
    return number++;
}

let number = 1;
for ( number; number <= 10;)
    {
        oddGuy();
    }