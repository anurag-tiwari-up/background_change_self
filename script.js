let box=document.querySelectorAll('.box')
let bc=document.querySelector('body')
console.log(box)
box.forEach((b)=>{
    b.addEventListener('click',(e)=>{
        if(b.innerHTML=='Green')
    {
        bc.style.backgroundColor='green'
    }
    if(b.innerHTML=='Red')
    {
        bc.style.backgroundColor='red'
    }
    if(b.innerHTML=='Yellow')
    {
        bc.style.backgroundColor='yellow'
    }
    if(b.innerHTML=='Blue')
    {
        bc.style.backgroundColor='blue'
    }
    })
})