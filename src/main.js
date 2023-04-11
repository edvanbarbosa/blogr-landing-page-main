const lists = document.querySelectorAll('.b_ex')
const tt = document.querySelectorAll('.options')
const options = document.querySelectorAll('.t_options')


const active= (e)=>{
            
    const element = e.target.className.replace('b_ex', '')


    let test = e.target.className

    if(test != 'timg'){
        let eu = document.querySelector('ul.'+element)
        eu.style.display = "flex"

        console.log(test)
    }
    else{
        console.log('eu tava certo')
    }
     
    

}

lists.forEach(o => {
    o.addEventListener('mouseover',(e)=>{
        active(e)

    
    })
    o.addEventListener('mouseout',(b)=>{
        const element = e.target.className.replace('b_ex', '')
        let test = e.target.className

        
    })
    
});
