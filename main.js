
var calculate = []
var num = 0
var calc = ""
var current =""



	function showInput(x) {
         num = x;
        
         
        
        
     if (num >10 && calc == ""){
             num == 10}
         
         
            else if (num == 10){ 
                document.querySelector(".display").innerHTML = ""
                calculate=[];
                num = 0;
                calc =""}
        
        

         else if(num == 11 && current =="z"){  
                
                document.querySelector(".display").innerHTML=document.querySelector(".display").innerHTML+"-";
                calc = "";
                num = 0;
                calculate.push("-");
                current = ""}
                
            else if(num == 11){
                                    
                calculate.push(Number(calc))               
                document.querySelector(".display").innerHTML=document.querySelector(".display").innerHTML+"-";
                calc = "";
                calculate.push("-");}
          
                
            else if(num == 12 && current =="z"){  

                document.querySelector(".display").innerHTML=document.querySelector(".display").innerHTML+"*";
                calc = "";
                num = 0;
                calculate.push("*")
                current = ""} 
            
            else if(num == 12){
                
                calculate.push(Number(calc))
                document.querySelector(".display").innerHTML=document.querySelector(".display").innerHTML+"*";
                calc = "";
                num = 0;
                calculate.push("*");
                current = ""}
            
             else if(num == 13 && current =="z"){  
                
                document.querySelector(".display").innerHTML=document.querySelector(".display").innerHTML+"/";
                calc = "";
                num = 0;
                calculate.push("/")
                current = ""} 

            else if(num == 13 ){
                               
                calculate.push(Number(calc))
                document.querySelector(".display").innerHTML=document.querySelector(".display").innerHTML+"/";
                calc = "";
                num = 0;
                calculate.push("/")}
           
            else if(num == 14 && current =="z"){  

                console.log(num);
                document.querySelector(".display").innerHTML=document.querySelector(".display").innerHTML+"+";
                calc = "";
                num = 0;
                calculate.push("+")
                current = ""} 
            
            else if(num == 14){
            
                calculate.push(Number(calc))
                document.querySelector(".display").innerHTML=document.querySelector(".display").innerHTML+"+";
                calc = "";
                num = 0;
                calculate.push("+");}
                       
             
            else if (num ==15){
            
                calculate.push(Number(calc))         
                equation();
                addition();
                document.querySelector(".display").innerHTML= z;         
                current = "z"
                console.log(z)
                console.log(calculate);}
   

            else  {
                document.querySelector(".display").innerHTML = document.querySelector(".display").innerHTML+num;
                calc = calc + "" + num;}
            
                    
            
    

    



         function equation(){
              console.log(calculate);
              
        
        
             for(let i=1; i<=calculate.length;i+2){
               
                  console.log(i);
                    if (calculate[i]=="/"){ z = (calculate[i-1])/(calculate[i+1])
                        
                        calculate.splice((i-1),3,z);
                            console.log(calculate);}
             
                        
                    else if (calculate[i]=="*"){z = (calculate[i-1])*(calculate[i+1])
                            calculate.splice((i-1),3,z);
                             console.log(calculate);}
                    else     {i=i+1}
                    
             }
            
         }

         function addition(){  
             console.log(calculate);
             
 
              for(let i=1; i<calculate.length;i+2){  
 
                     if  (calculate[i]=="+"){z = (calculate[i-1])+(calculate[i+1])
                           
                            calculate.splice((i-1),3,z);
                        console.log(calculate);}
                         
                    else 
                       { z = (calculate[i-1])-(calculate[i+1])
                            calculate.splice((i-1),3,z);
                        console.log(calculate);}
                    
             }
               
         }
    }          
            
               
                        
             
               
     
        
         
        
  
         
    


         
