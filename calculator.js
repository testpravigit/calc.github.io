const input=document.querySelector('input');
const buttons=document.querySelectorAll('button');
let output="";
buttons.forEach((but)=>{
    but.addEventListener('click',(e)=>{
        switch(e.target.value){
            case '=':try{
                input.value=eval(input.value)
                
               

            }
            catch{
                input.value="error buddy";
            }
           
            break;
              
                case 'DEL':
                    input.value=input.value.slice(0,-1);
                    break;
                case 'AC':
                        input.value="";
                        break;
                default:
                    input.value+=e.target.value;
        }

    }
    )



    

})
    




