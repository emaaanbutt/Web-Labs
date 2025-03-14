function submitForm(event) {
    event.preventDefault();
}

function handleKeyDown(event, idName,divIdName) {
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

document.getElementById("firstName").addEventListener("input", function () {
    document.querySelector("#first-name-div .invalid-feedback").classList.remove("display");
    this.classList.remove("success");
});

document.getElementById("lastName").addEventListener("input", function () {
    document.querySelector("#last-name-div .invalid-feedback").classList.remove("display");
    this.classList.remove("success");
});

function isValidName(name) {
    name = name.trim();
    var pattern = /^[A-Za-z' -]{2,50}$/;
    return pattern.test(name);
}

