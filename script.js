const mainField = document.querySelector("fieldset");
const inputs = mainField.querySelectorAll("input");
const cvc = mainField.querySelector(".cvc input");
const cardFront = document.querySelector(".card-front");
const cardBack = document.querySelector(".card-back");
const num = cardFront.querySelector(".num");
const cardHolder = cardFront.querySelector(".name");
const mm = document.querySelector('input[placeholder="MM"]');
const yy = document.querySelector('input[placeholder="YY"]');
const cardNumber = document.querySelector("#card-number");
const date = cardFront.querySelector(".date");
const cvcInfo = cardBack.querySelector(".cvc-info");
inputs.forEach((input) => {
  input.addEventListener("keydown", () => {
    let wrong = input.matches(":invalid");
    let empty = input.value.length === 0;
    if (empty && (input === mm || input === yy)) {
      document.querySelector(".invalid-yy").dataset.invalid = "true";
    } else {
      delete document.querySelector(".invalid-yy").dataset.invalid;
    }

    if (wrong && input === cardNumber) {
      document.querySelector(".invalid-num").dataset.invalid = "true";
    } else delete document.querySelector(".invalid-num").dataset.invalid;
  });
});
mainField.addEventListener("submit", (e) => {
  e.preventDefault();
  let isCurrent = mainField.hasAttribute("data-current");
  if (!isCurrent) return;
  else {
    let siblingField = mainField.nextElementSibling;
    siblingField.setAttribute("data-current", "true");
    delete mainField.dataset.current;
  }
  inputs.forEach((input) => {
    switch (true) {
      case input.matches("#cardholder"): {
        cardHolder.textContent = input.value;
      }
      case input.matches("#card-number"): {
        num.textContent = input.value;
      }
      case input === cvc: {
        cvcInfo.textContent = cvc.value;
      }
    }
  });
  date.textContent = `${mm.value}/${yy.value}`;
});
