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

ttt = false

tt.forEach((e)=>{
    e.addEventListener('mouseover',(o)=>{
        ttt = true
        
    })

    e.addEventListener('mouseout',(o)=>{
        ttt = false 
    })
})

lists.forEach(o => {
    o.addEventListener('mouseover',(e)=>{
        active(e)

    
    })
    o.addEventListener('mouseout',(b)=>{
        const element = b.target.className.replace('b_ex', '')
        let test = b.target.className

        
        
        setTimeout(()=>{
            if (ttt != true){
                let eu = document.querySelector('ul.'+element)
                eu.style.display = "none"
            }
        },300)
       


        
    })
    
});
