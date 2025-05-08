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

    let subcard = document.createElement("div");
    subcard.classList.add("subcard");
    let values = [name.value, title.value, price.value, date.value];
    for(val of values) {
        let p = document.createElement("p");
        p.innerText = val;
        subcard.appendChild(p);

    }
    let btn = document.createElement("button");
    btn.classList.add("btn", "btn-success");
    btn.innerText = "Edit";
    let btn2 = document.createElement("button");
    btn2.classList.add("btn", "btn-danger");
    btn2.innerText = "Delete";
    
    subcard.appendChild(btn);
    subcard.appendChild(btn2);
    ul.appendChild(subcard);

    form.reset(); 
});

