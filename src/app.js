const seedrandom = require('seedrandom');

const length = 16;
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!_-";

let password = document.getElementById("password");
let resource = document.getElementById("resource");
let button = document.getElementById("submit");
let output = document.getElementById("output");
let error = document.getElementById("error");
let reset = document.getElementById("reset");

button.onclick = function() {
    let pw = password.value;
    let re = resource.value;

    if(pw == "" || re == "") {
        error.innerHTML = "Please enter a password and a resource.";
        error.classList.remove("hide");
        return
    }
    error.innerHTML = "";
    error.classList.add("hide");

    let rng = seedrandom(pw+re);

    let max = chars.length;
    let newpw = "";
    for(let i=0; i<length; i++) {
        index = Math.floor(rng() * max);
        newpw += chars[index];
    }

    output.value = newpw;
}

reset.onclick = function() {
    password.value = "";
    resource.value = "";
    output.value = "";
}
