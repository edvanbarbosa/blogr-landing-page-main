const t_op = document.querySelectorAll('.t_options')


t_op.forEach(e =>{
    e.addEventListener('mouseover',()=>{
        const cl = e.className.replace('t_options ','')

        const options = document.querySelector("ul."+cl)
        options.style.display = 'flex'

        const butimg = document.querySelector('button.'+cl+">img")
        butimg.style.rotate = '180deg'
      
        
    })
    e.addEventListener('mouseout',()=>{
        const cl = e.className.replace('t_options ','')

        const options = document.querySelector("ul."+cl)
        options.style.display = 'none'

        const butimg = document.querySelector('button.'+cl+">img")
        butimg.style.rotate = '0deg'
      
        
    })
})
