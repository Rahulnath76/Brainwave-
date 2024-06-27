'use strict'

let input = document.querySelector(".input-to");
let ul = document.querySelector(".to-do");
let removeButton = document.querySelectorAll(".btn-remove");

function addList(){
    if(input.value == ""){
        alert("Please Write something");
    }
    else{
        let text = input.value;

        let html =   `<li class="list">
        <span class="box" ></span>
        <div class="li-text-box">
            <span class="li-text">${text}</span>
            <button class="btn-remove">Remove</button>
         </div>
        </li>`

        ul.insertAdjacentHTML('afterbegin', html);
        input.value = "";
    }
}

input.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        addList();
    }
})

// remove element

ul.addEventListener("click", function(event){
    if(event.target.classList.contains("btn-remove")){
        let container = event.target.closest(".list");
        if(container){
            container.remove();
        }
    }
});


ul.addEventListener("click", function(event){
    if(event.target.classList.contains("box")){
        let container = event.target.closest(".list");
        if(container){
            container.classList.toggle("box-fill");
        }
    }
});


