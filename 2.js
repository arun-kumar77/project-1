
const form = document.querySelector('.signup');
const user = document.querySelector('#username')
const help = document.querySelector('.help');
const pattern = /^[a-z]{4,}$/

////for help feedback ///

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const pattern = /^[a-z]{4,}$/
    if(pattern.test(username.value)){
        help.textContent="Passed !"
    }
    else{
        help.textContent='Entered username is not valid'
    }
})



////for live valid check using color///

form.username.addEventListener('keyup',(e)=>{
   if(pattern.test(e.target.value)){
    form.username.setAttribute('class', 'success');
   }
   else{
    form.username.setAttribute('class','error')
   }
})