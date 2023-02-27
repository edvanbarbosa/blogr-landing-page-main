const lists = document.querySelectorAll('.b_ex')
const tt = document.querySelectorAll('.options')

console.log(lists)

lists.forEach(o => {
    o.addEventListener('click',(e)=>{

        
        const ob = e.target.className
        const obj = ob.replace("b_ex",'')
        let obj_test = document.querySelector("ul."+obj).style.display
        obj_test =  obj_test == "flex"?"none":"flex"
        document.querySelector("ul."+obj).style.display = obj_test

        tt.forEach(oe => {
            if(oe.className != ob.replace("b_ex","options") ){
                oe.style.display = "none"
            }
        });
        
    
    
    })
});

