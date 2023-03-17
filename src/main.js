const lists = document.querySelectorAll('.b_ex')
const tt = document.querySelectorAll('.options')


const active= (e)=>{
            
    const element = e.target.className.replace('b_ex', '')


    let test = e.target.className

    if(test != 'timg'){
        let eu = document.querySelector('ul.'+element)
        eu.style.display = "flex"

        console.log(eu,test)
    }
    else{
        console.log('eu tava certo')
    }
     
    

}

let evente = 'mouseover'

lists.forEach(o => {
    o.addEventListener(evente,(e)=>{
        active(e)

    
    })
    o.addEventListener('mouseout',(e)=>{

        
        const element = e.target.className.replace('b_ex', '')


        let test = e.target.className

        if(test != 'timg'){
            let eu = document.querySelector('ul.'+element)
            eu.style.display = "none"

            console.log(eu,test)
        }
        else{
            console.log('eu tava certo')
        }
         
        
    
    
    })
    
});

