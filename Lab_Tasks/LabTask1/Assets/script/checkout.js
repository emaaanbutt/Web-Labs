function submitForm(event) {
    event.preventDefault();
}

function handleKeyDownForName(event, idName,divIdName) {
    if (event.key === "Enter") {
        event.preventDefault();
        validateName(idName, divIdName);
    }
}

function validateName(idName,divIdName) {
    let nameToBeValidated = document.getElementById(idName).value;
    if (!isValidName(nameToBeValidated)) {
        document.querySelector(divIdName+" .invalid-feedback").classList.add("display");
        document.getElementById(idName).classList.remove("success");
    } else {
        document.querySelector(divIdName+" .invalid-feedback").classList.remove("display");
        document.getElementById(idName).classList.add("success");
    }
}

function handleKeyDownForUsername(event, idName,divIdName) {
    if (event.key === "Enter") {
        event.preventDefault();
        validateUsername(idName, divIdName);
    }
}

function validateUsername(idName,divIdName) {
    let usernameToBeValidated = document.getElementById(idName).value;
    if (!isValidUsername(usernameToBeValidated)) {
        document.querySelector(divIdName+" .invalid-feedback").classList.add("display");
        document.getElementById(idName).classList.remove("success");
    } else {
        document.querySelector(divIdName+" .invalid-feedback").classList.remove("display");
        document.getElementById(idName).classList.add("success");
    }
}

function handleKeyDownForEmail(event, idName,divIdName) {
    if (event.key === "Enter") {
        event.preventDefault();
        validateEmail(idName, divIdName);
    }
}

function validateEmail(idName,divIdName) {
    let emailToBeValidated = document.getElementById(idName).value;
    if (!isValidEmail(emailToBeValidated)) {
        document.querySelector(divIdName+" .invalid-feedback").classList.add("display");
        document.getElementById(idName).classList.remove("success");
    } else {
        document.querySelector(divIdName+" .invalid-feedback").classList.remove("display");
        document.getElementById(idName).classList.add("success");
    }
}

document.getElementById("firstName").addEventListener("input", function () {
    document.querySelector("#first-name-div .invalid-feedback").classList.remove("display");
    this.classList.remove("success");
});

document.getElementById("lastName").addEventListener("input", function () {
    document.querySelector("#last-name-div .invalid-feedback").classList.remove("display");
    this.classList.remove("success");
});

document.getElementById("username").addEventListener("input", function () {
    document.querySelector("#username-div .invalid-feedback").classList.remove("display");
    this.classList.remove("success");
});

document.getElementById("email").addEventListener("input", function () {
    document.querySelector("#email-div .invalid-feedback").classList.remove("display");
    this.classList.remove("success");
});


function isValidName(name) {
    name = name.trim();
    var pattern = /^[A-Za-z' -]{2,50}$/;
    return pattern.test(name);
}

function isValidUsername(username) {
    let pattern = /^(?!.*[_.]{2})[a-zA-Z0-9][a-zA-Z0-9._]{1,18}[a-zA-Z0-9]$/;
    return pattern.test(username);
}

function isValidEmail(email) {
    let pattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com|icloud\.com|protonmail\.com)$/;
    return pattern.test(email);
}