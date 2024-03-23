const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");


const isPalindrome = (str) => {
  const regex = /\W|_/g;
  const newStr = str.replace(regex,"").trim().toLowerCase();
  const arr = newStr.split("");
  const reversedArr = [];

  for (let i = arr.length-1; i >= 0; i--){
    reversedArr.push(arr[i]);
  }

  const reversedInput = reversedArr.join("");

  if(newStr === reversedInput){
    return true;
  }
  return false;
}

const handleClick = () => {
  if(input.value === ""){
    window.alert("Please input a value");
  }else if(isPalindrome(input.value)){
    result.innerHTML = `<p class="user-input"><strong>${input.value} </strong>is a palindrome</p>`;
  }else{
    result.innerHTML = `<p class="user-input"><strong>${input.value} </strong>is not a palindrome</p>`;
  }
}

button.addEventListener("click", handleClick);