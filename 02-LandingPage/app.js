const arrows = document.querySelectorAll(".fa-arrow-down");
const errorColor = "rgb(236, 90, 90)";
const okColor = "rgb(107, 247, 107)";

//  ANIMATING FORM
function animatedForm() {
  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;

      //  CHECK FOR VALIDATION
      if (input.type === "text" && validateUser(input)) {
        nextSlide(parent, nextForm);
      } else if (input.type === "number" && validatePhone(input)) {
        nextSlide(parent, nextForm);
      } else if (input.type === "email" && validateEmail(input)) {
        nextSlide(parent, nextForm);
      }
    });
  });
}

//  INPUTS VALIDATION
function validateUser(user) {
  if (user.value.length < 10) {
    console.log("Not enough characters");
    error(errorColor);
  } else {
    error(okColor);
    return true;
  }
}

function validatePhone(phoneNumber) {
  const phoneValidation = /^\d+$/;

  if (phoneNumber.value.match(phoneValidation)) {
    error(okColor);
    return true;
  } else {
    error(errorColor);
  }
}

function validateEmail(email) {
  const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.value.match(emailValidation)) {
    error(okColor);
    return true;
  } else {
    error(errorColor);
  }
}

//  ADDIND AND REMOVING 'ACTIVE' AND 'INACTIVE' CLASSES
function nextSlide(parent, nextForm) {
  parent.classList.add("inactive");
  parent.classList.remove("active");
  nextForm.classList.remove("inactive");
  nextForm.classList.add("active");
}

// ERROR FUNCTION
function error(color) {
  document.body.style.backgroundColor = color;
}

animatedForm();
