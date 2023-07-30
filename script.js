let Input = "";
let buttons = document.querySelectorAll(".button");
let input = document.querySelector(".input");
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML === '='){
            Input  = eval(Input);
            input.value = Input;
        }else if( e.target.innerHTML === "AC"){
            Input = ""
            input.value = Input; 
        }else{
            Input += e.target.innerHTML;
            input.value = Input;
        }
    });
});
document.addEventListener("keydown",e =>{
    if(e.code == "Enter"){
        buttons.classList("enter");
    }
})