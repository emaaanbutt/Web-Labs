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

function handleKeyDownForCountryAndState(event, idName,divIdName) {
    if (event.key === "Enter") {
        event.preventDefault();
        validateCountry(idName, divIdName);
    }
}

function validateCountryAndState(idName,divIdName) {
    let countryOrStateToBeValidated = document.getElementById(idName).value;
    if (!isValidCountryOrState(countryOrStateToBeValidated)) {
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

function handleKeyDownForCcNumber(event, idName,divIdName) {
    if (event.key === "Enter") {
        event.preventDefault();
        validateCcNumber(idName, divIdName);
    }
}

function validateCcNumber(idName,divIdName) {
    let ccNumberToBeValidated = document.getElementById(idName).value;
    if (!isValidCcNumber(ccNumberToBeValidated)) {
        document.querySelector(divIdName+" .invalid-feedback").classList.add("display");
    } 
    else {
        document.querySelector(divIdName+" .invalid-feedback").classList.remove("display");
        document.getElementById(idName).classList.add("success");
    }
}

function handleKeyDownForCvv(event, idName,divIdName) {
    if (event.key === "Enter") {
        event.preventDefault();
        validateCvv(idName, divIdName);
    }
}

function validateCvv(idName,divIdName) {
    let cvvToBeValidated = document.getElementById(idName).value;
    if (!isValidCVV(cvvToBeValidated)) {
        document.querySelector(divIdName+" .invalid-feedback").classList.add("display");
    } 
    else {
        document.querySelector(divIdName+" .invalid-feedback").classList.remove("display");
        document.getElementById(idName).classList.add("success");
    }
}

function handleKeyDownForDate(event, idName,divIdName) {
    if (event.key === "Enter") {
        event.preventDefault();
        validateDate(idName, divIdName);
    }
}

function validateDate(idName,divIdName) {
    let dateToBeValidated = document.getElementById(idName).value;
    if (!isValidDate(dateToBeValidated)) {
        document.querySelector(divIdName+" .invalid-feedback").classList.add("display");
    } 
    else {
        document.querySelector(divIdName+" .invalid-feedback").classList.remove("display");
        document.getElementById(idName).classList.add("success");
    }
}


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
    return pattern.test(email) || email.trim() === "";
}

function isValidAddress(address){
    return address.trim() !== ""
}

function isValidCountryOrState(countryOrState){
    return countryOrState.trim() !== "";
}

function isValidZip(zip){
    return zip.length === 5;
}

function isValidCcNumber(cc_number){
    let pattern = /[0-9]/
    return cc_number.trim() !== "" && pattern.test(cc_number) && cc_number.length === 16;
}

function isValidCVV(cvv)
{
    return cvv.length === 3;
}

function isValidDate(date) {
    let expiryDate = new Date(date);
    let today = new Date();
    
    today.setHours(0, 0, 0, 0); 
    
    return expiryDate > today; 
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

async function submitForm(event) {
  event.preventDefault();

  if (!allRequiredFieldsValid()) {
    alert("Please fill all required fields correctly before submitting.");
    return;
  }

  const form = event.target;

  const userDetails = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    username: document.getElementById('username').value,
    email: document.getElementById('email').value,
    address: document.getElementById('address').value,
    country: document.getElementById('country').value,
    state: document.getElementById('state').value,
    zip: document.getElementById('zip').value,
    paymentMethod: document.querySelector('input[name="paymentMethod"]:checked').id
  };

  try {
    const response = await fetch('/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userDetails)
    });

    const data = await response.json();

    if (data.success) {
      alert('Order placed successfully!');
      window.location.href = '/'; 
    } else {
      alert(data.message || 'Something went wrong.');
    }
  } catch (err) {
    console.error('Checkout failed:', err);
    alert('Checkout failed. Please try again.');
  }
}

document.getElementById("checkoutForm").addEventListener("submit", submitForm);


function allRequiredFieldsValid() {
  const requiredFields = [
    'firstName', 'lastName', 'username', 'address',
    'country', 'state', 'zip', 'cc-name', 'cc-number', 'cc-expiration', 'cc-cvv'
  ];
  
  let allValid = true;

  for (const id of requiredFields) {
    const input = document.getElementById(id);
    if (!input || input.value.trim() === "") {
      input.classList.remove("success");
      input.classList.add("is-invalid");
      allValid = false;
    }
  }

  return allValid;
}

const requiredFields = [
  'firstName', 'lastName', 'username', 'address',
  'country', 'state', 'zip', 'cc-name', 'cc-number', 'cc-expiration', 'cc-cvv'
];

requiredFields.forEach(id => {
  const input = document.getElementById(id);
  if (input) {
    input.addEventListener('input', () => {
      if (input.value.trim() !== "") {
        input.classList.remove("is-invalid");
        input.classList.add("success");
      } else {
        input.classList.remove("success");
        input.classList.add("is-invalid");
      }
    });
  }
});


  document.addEventListener("DOMContentLoaded", () => {
    const updateTotal = () => {
      let total = 0;
      document.querySelectorAll("tbody tr").forEach(row => {
        const price = parseFloat(row.querySelector("td:nth-child(2)").textContent.replace("$", ""));
        const quantity = parseInt(row.querySelector(".qty").textContent);
        total += price * quantity;
      });
      document.getElementById("cart-total").textContent = total.toFixed(2);
    };

    // Increase quantity
    document.querySelectorAll(".increase-qty").forEach(button => {
      button.addEventListener("click", (e) => {
        const row = e.target.closest("tr");
        const qtySpan = row.querySelector(".qty");
        let quantity = parseInt(qtySpan.textContent);
        qtySpan.textContent = ++quantity;
        updateTotal();
      });
    });

    // Decrease quantity (but not less than 1)
    document.querySelectorAll(".decrease-qty").forEach(button => {
      button.addEventListener("click", (e) => {
        const row = e.target.closest("tr");
        const qtySpan = row.querySelector(".qty");
        let quantity = parseInt(qtySpan.textContent);
        if (quantity > 1) {
          qtySpan.textContent = --quantity;
          updateTotal();
        }
      });
    });

    // Remove item
    document.querySelectorAll(".remove-item").forEach(button => {
      button.addEventListener("click", (e) => {
        const row = e.target.closest("tr");
        row.remove();
        updateTotal();
      });
    });
  });


