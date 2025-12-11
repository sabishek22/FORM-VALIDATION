
  let form = document.getElementById("register-form")
  let name = document.getElementById("nameBox");
  let email = document.getElementById("mailBox");
  let password = document.getElementById("passwordBox");
  let submit = document.getElementById("btnRegister");

  let nameError = document.getElementById("nameError");
  let mailError = document.getElementById("mailError");
  let passError = document.getElementById("passError");

  function validateForm(){

  let validate = true;


  if (name.value.trim() === "") {
    nameError.textContent = "Name connot be Empty!";
    validate = false;
  } else {
    nameError.textContent = "";
  }

  let emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;


  if (emailRegex.test(email.value.trim()) == false) {
    mailError.textContent = "Enter a valid Gmail id";
    validate = false;
  } else {
    mailError.textContent = "";
  }


  if (password.value.length < 6) {
    passError.textContent = "Your password must contains atleast 6 characters";

    validate = false;
  } else {
    passError.textContent = "";
  }

  submit.disabled = !validate;

  return(validate)
}


name.addEventListener("input", validateForm);
email.addEventListener("input",validateForm);
password.addEventListener("input",validateForm)


submit.addEventListener("click",function(event){
    event.preventDefault();

    if (validateForm()) {
    alert("Form Submitted Sucefully");
 
    form.reset();

    nameError.textContent = "";
    mailError.textContent = "";
    passError.textContent = "";

    submit.disabled = true;
    
  }

})