let input = document.getElementById("input");
let text = ''
let buttons = document.getElementsByClassName("button")
Array.from(buttons).forEach( (button)=>{
    button.addEventListener('click' , (e)=>{
        if(e.target.innerText == '='){
            text = eval(text)
            input.value = text
        }
        else if(e.target.innerText == 'clear')
        {
            text = text.slice(0 , text.length - 1)
            input.value = text
        }
        else if(e.target.innerText == 'C'){
            text = '';
            input.value = text
        }
        else if(e.target.innerText == 'clear'){
            text = pop(text)
        }
        else{
            text = text + e.target.innerText;
            input.value = text
        }
    })
}

)