let bulb_on = document.querySelector('.bulb-on');
let bulb_off = document.querySelector('.bulb-off');
let img= document.querySelector('.bulb-off-img')


bulb_on.addEventListener('click',()=>{
    // console.log("hello"); 
    img.setAttribute('src',"bulb-on.png")
})



bulb_off.addEventListener('click',()=>{
    // console.log("hello"); 
    img.setAttribute('src',"bulb-off.png")
})