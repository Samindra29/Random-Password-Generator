let generateBtn = document.getElementById("generate-btn")
let container = document.getElementsByClassName("container")

let box1 = document.getElementById("box1")
let box2 = document.getElementById("box2")
let box3 = document.getElementById("box3")
let box4 = document.getElementById("box4")


function generate(){
    box1.textContent = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);;
    box2.textContent = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);;
    box3.textContent = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);;
    box4.textContent = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);;

}


