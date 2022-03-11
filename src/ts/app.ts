import generate from "novaultpw";

const pwlength  = 16;
const lower   = `abcdefghijklmnopqrstuvwxyz`;
const upper   = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
const digits  = `1234567890`;
const special = `~!@#$%^&*_-+=|\\(){}[]:;"'<>,.?/` + "`";
const chars   = lower+upper+digits+special;

let password = <HTMLInputElement>document.getElementById("password");
let resource = <HTMLInputElement>document.getElementById("resource");
let button = document.getElementById("submit");
let output = <HTMLInputElement>document.getElementById("resource_password");
let error = document.getElementById("error");
let reset = document.getElementById("reset");

if (button) {
    button.onclick = function() {
        let pw = password.value;
        let re = resource.value;

        if (error) {
            if(pw == "" || re == "") {
                error.innerHTML = "Please enter a password and a resource.";
                error.classList.remove("hide");
                return
            }
            error.innerHTML = "";
            error.classList.add("hide");
        }

        output.value = generate(pwlength, chars, pw, re);

        password.type = "password";
    }
}

if (reset) {
    reset.onclick = function() {
        password.value = "";
        resource.value = "";
        output.value = "";

        if (error) {
            error.classList.add("hide");
        }

        password.type = "text";
    }
}
