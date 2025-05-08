let form = document.querySelector("form");
let name = document.querySelector("#name");
let title = document.querySelector("#title");
let price = document.querySelector("#price");
let date = document.querySelector("#date");

let add_btn = document.querySelector("#add_btn");
let edit_btn = document.querySelector("#edit_btn");
let delete_btn = document.querySelector("#delete_btn");




add_btn.addEventListener("click", (e) => {
    e.preventDefault(); 
    console.log(name.value);
    console.log(title.value);
    console.log(price.value);
    console.log(date.value);
    form.reset();
});