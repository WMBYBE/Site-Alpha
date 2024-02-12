html.setAttribute("class", "red");

i = 0;
while(i<5) {
    const newparagraph = document.createElement("p");
    const text = document.createTextNode("Middle paragraph");
    newparagraph.appendChild(text);
    i++;

}