const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
    // SHOWING_CN = "showing";
function saveName(text) {
    localStorage.setItem(USER_LS, text);
}
function handleSubmit(event) {
    //기본동작을 막음
    event.preventDefault();
    const currentValue =  input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
function askForName() {
    form.classList.add("showing");
    form.addEventListener("submit", handleSubmit);
}
function paintGreeting(text) {
    form.classList.remove("showing");
    greeting.classList.add("showing");
    greeting.innerText = `Have a nice day, ${text} !`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();