let form = document.getElementById("register-form");
let userName = document.getElementById("nameBox");
let email = document.getElementById("mailBox");
let phoneNo = document.getElementById("phoneBox");
let password = document.getElementById("passwordBox");
let code = document.getElementById("countryCode");
let submit = document.getElementById("btnRegister");

let nameError = document.getElementById("nameError");
let mailError = document.getElementById("mailError");
let phoneError = document.getElementById("phoneError");
let passError = document.getElementById("passError");

let touched = {
  name: false,
  email: false,
  phone: false,
  password: false,
};

function validateForm() {
  let validate = true;

  let nameRegex = /^[a-zA-Z ]+$/;

  if (touched.name) {
    if (userName.value.trim() === "") {
      nameError.textContent = "Name cannot be Empty!";
      validate = false;
    } else if (nameRegex.test(userName.value.trim()) == false) {
      nameError.textContent = "Enter a valid Name";
      validate = false;
    } else {
      nameError.textContent = "";
    }
  }

  let emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  if (touched.email) {
    if (email.value.trim() === "") {
      mailError.textContent = "Email cannot be empty";
      validate = false;
    } else if (emailRegex.test(email.value.trim()) == false) {
      mailError.textContent = "Enter a valid Gmail id";
      validate = false;
    } else {
      mailError.textContent = "";
    }
  }

  let phoneRegex = /^[0-9]{10}$/;

  if (touched.phone) {
    if (code.value === "") {
      phoneError.textContent = "Please Select a Country Code";
      validate = false
    } else if (phoneNo.value.trim() === "") {
      phoneError.textContent = "Please Enter Phone Number";
      validate = false;
    } else if (phoneRegex.test(phoneNo.value.trim()) == false) {
      phoneError.textContent = "Enter a valid 10-digit phone number";
      validate = false;
    } else {
      phoneError.textContent = "";
    }
  }

  if (touched.password) {
    if (password.value.trim() === "") {
      passError.textContent = "Password cannot be empty";
      validate = false;
    } else if (password.value.length < 6) {
      passError.textContent =
        "Your password must contains atleast 6 characters";

      validate = false;
    } else {
      passError.textContent = "";
    }
  }

  submit.disabled = !validate;

  return validate;
}

userName.addEventListener("input", () => {
  touched.name = true;
  validateForm();
});
email.addEventListener("input", () => {
  touched.email = true;
  validateForm();
});
phoneNo.addEventListener("input", () => {
  touched.phone = true;
  validateForm();
});
code.addEventListener("change", () => {
  touched.phone = true;
  validateForm();
});
password.addEventListener("input", () => {
  touched.password = true;
  validateForm();
});

submit.addEventListener("click", function (event) {
  event.preventDefault();

  touched.name = touched.email = touched.phone = touched.password = true;

  if (validateForm()) {
    alert("Form Submitted Successfully");

    form.reset();

    nameError.textContent = "";
    mailError.textContent = "";
    phoneError.textContent = "";
    passError.textContent = "";
    submit.disabled = true;

    touched.name = false;
    touched.email = false;
    touched.phone = false;
    touched.password = false;
  }
});
