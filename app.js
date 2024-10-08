const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let password1EL = document.querySelector(".password1-el");
let password2EL = document.querySelector(".password2-el");
let passwordLength = document.querySelector("#length-number");
let generatePasswordsBtn = document.querySelector(".generate-passwords");
const passwordContainerEl = document.querySelector(".password-container");
const symbolsCheckbox = document.querySelector("#symbols");
const numbersCheckbox = document.querySelector("#numbers");
let thisArray = [];

function generatePasswords() {
  let password = "";
  for (let i = 0; i < Number(passwordLength.value); i++) {
    password += thisArray[randomChar()];
  }
  return password;
}

function validate() {
  thisArray = characters;
  if (symbolsCheckbox.checked && numbersCheckbox.checked)
    thisArray = thisArray.concat(symbols, numbers);
  else if (symbolsCheckbox.checked) thisArray = thisArray.concat(symbols);
  else if (numbersCheckbox.checked) thisArray = thisArray.concat(numbers);
  return thisArray;
}

function randomChar() {
  return Math.floor(Math.random() * thisArray.length);
}

function createPasswords() {
  password1EL.textContent = generatePasswords();
  password2EL.textContent = generatePasswords();
}

generatePasswordsBtn.addEventListener("click", () => {
  validate();
  if (Number(passwordLength.value) > 40) {
    alert(
      "Sorry, but the maxI'm sorry but the maximum password length is 40 characters"
    );
  } else {
    createPasswords();
    if (Number(passwordLength.value) > 16) {
      passwordContainerEl.style.flexDirection = "column";
    }
  }
});

passwordLength.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    generatePasswordsBtn.click();
  }
});

password1EL.addEventListener("click", () => {
  navigator.clipboard.writeText(password1EL.textContent);
  alert(`Password: ${password1EL.textContent}
    has been copied`);
});

password2EL.addEventListener("click", () => {
  navigator.clipboard.writeText(password2EL.textContent);
  alert(`Password: ${password2EL.textContent}
    has been copied`);
});
