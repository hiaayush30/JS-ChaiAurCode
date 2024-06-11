const buttons=document.querySelectorAll(".button");
console.log(buttons)

buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        console.log(e);
        console.log(e.target)
        document.body.style.backgroundColor=button.id;
    })
})
