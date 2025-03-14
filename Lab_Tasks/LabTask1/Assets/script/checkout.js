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

function handleKeyDownForAddress(event, idName,divIdName) {
    if (event.key === "Enter") {
        event.preventDefault();
        validateAddress(idName, divIdName);
    }
}

function validateAddress(idName,divIdName) {
    let addressToBeValidated = document.getElementById(idName).value;
    if (!isValidAddress(addressToBeValidated)) {
        document.querySelector(divIdName+" .invalid-feedback").classList.add("display");
        document.getElementById(idName).classList.remove("success");
    } else {
        document.querySelector(divIdName+" .invalid-feedback").classList.remove("display");
        document.getElementById(idName).classList.add("success");
    }
}

function handleKeyDownForZip(event, idName,divIdName) {
    if (event.key === "Enter") {
        event.preventDefault();
        validateZip(idName, divIdName);
    }
}

function validateZip(idName,divIdName) {
    let zipToBeValidated = document.getElementById(idName).value;
    if (!isValidZip(zipToBeValidated)) {
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

document.getElementById("address").addEventListener("input", function () {
    document.querySelector("#address-div .invalid-feedback").classList.remove("display");
    this.classList.remove("success");
});

document.getElementById("zip").addEventListener("input", function () {
    document.querySelector("#zip-div .invalid-feedback").classList.remove("display");
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

function isValidAddress(address){
    return address.trim() !== ""
}

function isValidZip(zip){
    return zip.length === 5;
}

async function loadCountries() {
    const response = await fetch("https://countriesnow.space/api/v0.1/countries");
    const data = await response.json();
    const countrySelect = document.getElementById("country");

    data.data.forEach(country => {
        const option = document.createElement("option");
        option.value = country.country; // Country name
        option.textContent = country.country;
        countrySelect.appendChild(option);
    });
}

async function loadStates(countryName) {
    if (!countryName) return;

    const response = await fetch("https://countriesnow.space/api/v0.1/countries/states", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ country: countryName })
    });

    const data = await response.json();
    const stateSelect = document.getElementById("state");
    stateSelect.innerHTML = '<option value="">Select State</option>'; // Reset dropdown

    if (data.data.states) {
        data.data.states.forEach(state => {
            const option = document.createElement("option");
            option.value = state.name;
            option.textContent = state.name;
            stateSelect.appendChild(option);
        });
    }
}

document.getElementById("country").addEventListener("change", function () {
    loadStates(this.value);
});

loadCountries();

