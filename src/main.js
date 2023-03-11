const lists = document.querySelectorAll('.b_ex')
const tt = document.querySelectorAll('.options')


lists.forEach(o => {
    o.addEventListener('mouseover',(e)=>{

        
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
         
        
    
    
    })
});

