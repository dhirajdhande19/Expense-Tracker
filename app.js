let form = document.querySelector("form");

let ul = document.querySelector("ul");
let name = document.querySelector("#name");
let title = document.querySelector("#title");
let price = document.querySelector("#price");
let date = document.querySelector("#date");

let add_btn = document.querySelector("#add_btn");
let edit_btn = document.querySelector("#edit_btn");
let delete_btn = document.querySelector("#delete_btn");



add_btn.addEventListener("click", (e) => {
    e.preventDefault();

    // let item1 = document.createElement("p");
    // item1.innerText = name.value;
    // let item2 = document.createElement("p");
    // item2.innerText = title.value;
    // let item3 = document.createElement("p");
    // item3.innerText = price.value;
    // let item4 = document.createElement("p");
    // item4.innerText = date.value;


    let subcard = document.createElement("div");
    subcard.classList.add("subcard");
    let values = [name.value, title.value, price.value, date.value];
    for(val of values) {
        let p = document.createElement("p");
        p.innerText = val;
        subcard.appendChild(p);
    }

    ul.appendChild(subcard);

    form.reset(); 
});

