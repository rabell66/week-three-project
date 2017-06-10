
var calculate = []
var num = 0
var calc = ""
var maxLength = 0

	function showInput(x) {
         num = x;
         
        
        
        if (num >10 && calc == ""){
             num == 10
         }
         
        else if (num == 10){ 
            document.querySelector(".display").innerHTML = ""
        calculate=[];
        num = 0;
        calc =""
       
        }
       

        else if(num == 11){
              
              
               calculate.push(Number(calc))
               document.querySelector(".display").innerHTML=document.querySelector(".display").innerHTML+"/";
               calc = "";
               num = 0;
               calculate.push("/")
             
              
        }
        else if(num == 12){
              
              
                calculate.push(Number(calc))
               document.querySelector(".display").innerHTML=document.querySelector(".display").innerHTML+"*";
               calc = "";
               num = 0;
               calculate.push("*");}
           
              
        else if(num == 13){
              
              
                calculate.push(Number(calc))
               document.querySelector(".display").innerHTML=document.querySelector(".display").innerHTML+"-";
                calc = "";
               num = 0;
               calculate.push("-");}
        else if(num == 14){
          
              
                calculate.push(Number(calc))
               document.querySelector(".display").innerHTML=document.querySelector(".display").innerHTML+"+";
                calc = "";
               num = 0;
               calculate.push("+");}
            
           
           else if(num == 15){
               calculate.push(Number(calc))
               document.querySelector(".display").innerHTML=0;
               equation();
               document.querySelector(".display").innerHTML= z;
               
               
           }
           
           

           

        else    {
            document.querySelector(".display").innerHTML = document.querySelector(".display").innerHTML+num;
            calc = calc + "" + num;
           
                 }
    

    }



         function equation(){
             
             for (i=1;i<calculate.length;i=i+2){
                 calculate.push(calc);
                 
               if (calculate[i]=="/"){ z = (calculate[i-1])/(calculate[i+1])
                //    calculate.slice(i-1,i+1)
                //    calculate.push()
                   
                   calculate = [];}
              else if(calculate[i]=="*"){z = (calculate[i-1])*(calculate[i+1])
                           
                calculate = [];}
                else if  (calculate[i]=="-"){ z = (calculate[i-1])-(calculate[i+1])
                   
                   calculate = [];}
                else if  (calculate[i]=="+"){ z = (calculate[i-1])+(calculate[i+1])
                   
                   calculate = [];}

             
         }
        
         }
  
      



         
