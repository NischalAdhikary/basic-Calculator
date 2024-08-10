let button=document.querySelectorAll('.button')
let result='';
let data='';
Array.from(button).forEach((b)=>{
    b.addEventListener('click',(e)=>{
        if(e.target.innerHTML== '='){
            result=eval(result)
            document.querySelector('#result').value=result
        }
        else if(e.target.innerHTML=='C'){
            result=''
           
            document.querySelector('#result').value=result

        }
        else if(e.target.innerHTML=='Del'){
         
            result = result.slice(0, -1);
         document.querySelector('#result').value=result

        }
        else if(e.target.innerHTML=='%' && data=='%' ||e.target.innerHTML=='*'  && data=='*'||
            e.target.innerHTML=='/' && data=='/'|| e.target.innerHTML=='-' && data=='-'|| e.target.innerHTML=='+' && data=='+'
         ){
            
           
            return


        }
        else{
        
        result=result+e.target.innerHTML;
        document.querySelector('#result').value=result
         data=result.charAt(result.length-1)
       
        }

    })
    
    
}
)

