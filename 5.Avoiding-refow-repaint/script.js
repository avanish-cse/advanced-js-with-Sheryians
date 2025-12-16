const ul = document.querySelector("ul")

let space = document.createDocumentFragment(); // creating a space

for (i = 0; i < 101; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    space.appendChild(li); // appending in the space


}

// now appending in ul

ul.appendChild(space);