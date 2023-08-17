

const controlOptionsNav = ()=>{
    const t_op = document.querySelectorAll('nav .t_options')
    t_op.forEach(e =>{
        e.addEventListener('mouseover',()=>{
            const cl = e.className.replace('t_options ','')
    
            const options = e.querySelector("ul."+cl)
            options.style.display = 'flex'
    
            const butimg = e.querySelector('button.'+cl+">img")
            butimg.style.rotate = '180deg'
          
            
        })
        e.addEventListener('mouseout',()=>{
            const cl = e.className.replace('t_options ','')
    
            const options = e.querySelector("ul."+cl)
            options.style.display = 'none'
    
            const butimg = e.querySelector('button.'+cl+">img")
            butimg.style.rotate = '0deg'
          
            
        })
    })

}


const controlOptionsNavMobile = ()=>{
    const t_op = document.querySelectorAll('.menu-mobile .t_options')

    t_op.forEach(e =>{
        e.addEventListener('mouseover',()=>{
            const cl = e.className.replace('t_options ','')
    
            const options = e.querySelector("ul."+cl)
            options.style.display = 'flex'
    
            const butimg = e.querySelector('button.'+cl+">img")
            butimg.style.rotate = '180deg'
          
            
        })
        e.addEventListener('mouseout',()=>{
            const cl = e.className.replace('t_options ','')
    
            const options = e.querySelector("ul."+cl)
            options.style.display = 'none'
    
            const butimg = e.querySelector('button.'+cl+">img")
            butimg.style.rotate = '0deg'
          
            
        })
    })

}
const burguerImg = document.querySelector('.burguer img')
const menu = document.querySelector('.menu-mobile')

const controlBurguer = ()=>{
    

   burguerImg.addEventListener('click',()=>{
        if(burguerImg.className == 'burguerImg'){
            burguerImg.src = 'images/icon-close.svg'
            burguerImg.className = 'closeImg'
            menu.style.display = 'flex'
            
        } else if(burguerImg.className == 'closeImg'){
            burguerImg.src = 'images/icon-hamburger.svg'
            burguerImg.className = 'burguerImg'
            menu.style.display = 'none'
        }
       
    })
}

const controldisplayMenus = ()=>{
    const menuMobile = document.querySelector('.menu-mobile')
    const menuDesktop = document.querySelector('.ul_pp')

    window.addEventListener('resize',()=>{
        if(menuDesktop.style.display != 'none'){
            menuMobile.style.display = 'none'
            burguerImg.src = 'images/icon-hamburger.svg'
        }
        else{
            return
        }
    })
}

controlBurguer()
controlOptionsNav()
controlOptionsNavMobile()
controldisplayMenus()