const close = document.querySelector('.popup')
const wrap =document.querySelector('.body-wrapper');
const button = document.querySelector('button')


button.addEventListener('click',()=>{
   wrap.style.display='block'
})


 close.addEventListener('click',()=>{
   wrap.style.display = 'none'
 }) 
 
 
 wrap.addEventListener('click',()=>{
   wrap.style.display = 'none'
 })