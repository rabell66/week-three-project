
var calculate = []
var num = 0
var calc = 0

	function showInput(x) {
         num = x;
         
         
         
        if (num == 10){
            document.querySelector(".display").innerHTML = ""
        }
       

        else if(num == 11){
              
              
               calculate.push(calc)
               document.querySelector(".display").innerHTML=document.querySelector(".display").innerHTML+"/";
               calc = 0;
               calculate.push("/")
             
              
        }
        else if(num == 12){
              
              
               calculate.push(calc)
               document.querySelector(".display").innerHTML=document.querySelector(".display").innerHTML+"*";
               calc = 0;
               calculate.push("*");}
           
              
        else if(num == 13){
              
              
               calculate.push(calc)
               document.querySelector(".display").innerHTML=document.querySelector(".display").innerHTML+"-";
               calc = 0;
               calculate.push("-");}
        else if(num == 14){
          
              
               calculate.push(calc)
               document.querySelector(".display").innerHTML=document.querySelector(".display").innerHTML+"+";
               calc = 0;
               calculate.push("+");}
            
           
           else if(x == 15){
               console.log(calculate);
               document.querySelector(".display").innerHTML=0;
               equation();
               document.querySelector(".display").innerHTML= z;
               
           }
           
            else

            {mem = 0
            document.querySelector(".display").innerHTML = document.querySelector(".display").innerHTML+num;
            calc = calc + num;
                 }
    

    }

         function equation(){
             for (i=1;i<calculate.length;i=i+2){
                 calculate.push(calc);
                 
               if (calculate[i]=="/"){ z = (calculate[i-1])/(calculate[i+1])
                   console.log(z);
                   console.log(calculate[i]);
                   console.log(calculate[i+1]);
                   console.log(calculate[i-1]);
                   calculate = [];}
              else if(calculate[i]=="*"){z = (calculate[i-1])*(calculate[i+1])
                  console.log(calculate);
                 console.log(z);               
                calculate = [];}
                else if  (calculate[i]=="-"){ z = (calculate[i-1])-(calculate[i+1])
                   console.log(z);
                   calculate = [];}
                else if  (calculate[i]=="+"){ z = (calculate[i-1])+(calculate[i+1])
                   console.log(z);
                   calculate = [];}

             
         }
        
         }
 



         
