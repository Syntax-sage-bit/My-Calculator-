let x = document.querySelectorAll("button");

x.forEach(function(btn){
  btn.addEventListener("click",function(){
    a=Math.floor(Math.random()*256)
    b=Math.floor(Math.random()*256)
    c=Math.floor(Math.random()*256)
    btn.style.backgroundColor=`rgb(${a},${b},${c}`
    btn.style.height="55px"
    btn.style.width="55px"
    btn.style.boxShadow = `0 0 10px rgb(${a},${b},${c}),
    0 0 25px rgb(${a},${b},${c}),
    0 0 50px rgb(${a},${b},${c})`;
  setTimeout(() => {
    btn.style.backgroundColor = "#2C2C2C";
    btn.style.height="60px"
    btn.style.width="60px"
    btn.style.boxShadow="none"
}, 100);
  })
})
let y = document.querySelectorAll(".last");
y.forEach(function(btn){
  btn.addEventListener("click",function(){
    btn.style.backgroundColor=`rgb(${a},${b},${c}`
    btn.style.height="55px"
    btn.style.width="75px"
  setTimeout(() => {
    btn.style.backgroundColor = "#1F1F1F";
    btn.style.height="60px"
    btn.style.width="80px"
}, 100);
  })
})

let display = document.getElementById("value");
let buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let value = btn.innerText;
    if(value==="AC") {
      expression=""
      display.value=""
    }
    else if(value==="="){
      try {
        expression=eval(expression)
        display.value=expression;
      } catch{
        display.value = "Error";
        expression = "";
      }
    }
    else if(value==="clr"){
      display.value="not formed"
    }
    else if(value==="%"){
      display.value="not formed"
    }
    else{
      expression+=value;
      display.value=expression;
    }
  })
})