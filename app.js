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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
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

function generatePasswords() {
  let password = "";
  for (let i = 0; i < Number(passwordLength.value); i++) {
    password += characters[randomChar()];
  }
  return password;
}

function randomChar() {
  return Math.floor(Math.random() * characters.length);
}

function createPasswords() {
  password1EL.textContent = generatePasswords();
  password2EL.textContent = generatePasswords();
}

generatePasswordsBtn.addEventListener("click", () => {
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
