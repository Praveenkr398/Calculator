const btns = document.querySelectorAll(".btn");
const inputBox = document.querySelector("#display");

let string = "";

btns.forEach((button) => {
  
  button.addEventListener("click", (b) => {
    // console.log("clicked", b.target.innerText);
    let value = button.innerHTML
    let lastChar = inputBox.value.slice(-1)
console.log(value)

// //calculation of given value
   if( b.target.innerHTML === '='){
   if(inputBox.value.trim() === ''){
    inputBox.value = ''
   } else{
    try{
      inputBox.value = eval(inputBox.value);
    } catch(error){
      inputBox.value = inputBox.value
    }
   }
    return
   }

    if (value == "AC") {
      string = "";
      console.log(string)
      inputBox.value = '';
    } 
    else if (b.target.innerText == "⌫") {
      string = string.substring(0, string.length - 1);
      // console.log(string);
      inputBox.value = string;
    } 
    else if (b.target.id == "plusMinus") {
      string = String(-eval(string));
      inputBox.value = string;
    }
  
     else {
      string += b.target.innerText;
      inputBox.value = string;
    }
  });
});
