const lists = document.querySelectorAll('.b_ex')
const tt = document.querySelectorAll('.options')

console.log(lists)

lists.forEach(o => {
    o.addEventListener('click',(e)=>{

        
        const element = e.target.className.replace('b_ex', '')


        let test = e.target.className == 'timg' ?true:false

        if(test == false){
            let eu = document.querySelector('ul.'+element)
            eu.style.display = "flex"

            console.log(eu,test)
        }
         
        
    
    
    })
});

