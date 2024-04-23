"use strict";
// Elements:
const checkBtn = document.getElementById("checkButton");
const inputText = document.getElementById("inputText");
const result = document.getElementById("result");

const isPalindrome = function (str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
};

const palindromeCheck = function () {
  if (isPalindrome(inputText.value)) {
    result.textContent = `"${inputText.value}" is a Palindrome.`;
  } else {
    result.textContent = `"${inputText.value}" is not a Palindrome.`;
  }
};
checkBtn.addEventListener("click", palindromeCheck);
