
var calculate = []
var inputNum = 0
var displayNumber = ""
var currentNumber =""


	function showInput(inputValue) {
         inputNum = inputValue;
             
     
       if (inputNum >10 && displayNumber == ""){
                inputNum == 10}
         
         
            else if (inputNum == 10){ 
                document.querySelector(".display").innerHTML = ""
                calculate=[];
                inputNum = 0;
                displayNumber =""
                currentNumber = ""}
                

        
           else if(inputNum == 11 && currentNumber =="yes"){  
                
                document.querySelector(".display").innerHTML=document.querySelector(".display").innerHTML+"-";
                calculate.push("-"); 
                currentNumberYes();}


            else if(inputNum == 11){
                                    
                currentNumberNo()               
                document.querySelector(".display").innerHTML=document.querySelector(".display").innerHTML+"-";
                calculate.push("-");}
                
                
            else if(inputNum == 12 && currentNumber =="yes"){  

                document.querySelector(".display").innerHTML=document.querySelector(".display").innerHTML+"*";
                calculate.push("*")
                currentNumberYes()
            } 
            
            else if(inputNum == 12){
                
                currentNumberNo()
                document.querySelector(".display").innerHTML=document.querySelector(".display").innerHTML+"*";
                calculate.push("*");}
            

             else if(inputNum == 13 && currentNumber =="yes"){  
                
                document.querySelector(".display").innerHTML=document.querySelector(".display").innerHTML+"/";
                calculate.push("/")
                currentNumberYes()} 


             else if(inputNum == 13 ){
                               
                currentNumberNo()
                document.querySelector(".display").innerHTML=document.querySelector(".display").innerHTML+"/";
                calculate.push("/")}
           
             else if(inputNum == 14 && currentNumber =="yes"){  

                
                document.querySelector(".display").innerHTML=document.querySelector(".display").innerHTML+"+";              
                calculate.push("+")
                currentNumberYes()} 
            
             else if(inputNum == 14){
            
                currentNumberNo();
                document.querySelector(".display").innerHTML=document.querySelector(".display").innerHTML+"+";
                calculate.push("+");}


            else if (inputNum == 16){
                currentNumberNo();
                document.querySelector(".display").innerHTML=document.querySelector(".display").innerHTML+".";
                calculate.push(".");}
            
             
             else if (inputNum ==15){
                
                calculate.push(Number(displayNumber))  
                decimal();       
                equation();
                addition();
                document.querySelector(".display").innerHTML= answer;         
                currentNumber = "yes"}
            
                
             else  {
                
                document.querySelector(".display").innerHTML = document.querySelector(".display").innerHTML+inputNum;
                displayNumber = displayNumber + "" + inputNum;}
                
            
                    
        

         function equation(){
              console.log(calculate);
              
        
        
             for(let i=1; i<=calculate.length;i+2){
               
                  console.log(i);
                    if (calculate[i]=="/"){answer = (calculate[i-1])/(calculate[i+1])
                        
                        calculate.splice((i-1),3,answer);
                            console.log(calculate);}
             
                        
                    else if (calculate[i]=="*"){answer = (calculate[i-1])*(calculate[i+1])
                            calculate.splice((i-1),3,answer);
                             console.log(calculate);}
                    else     {i=i+1}
                    
             }
            
         }

         function addition(){  
             console.log(calculate);
             
 
              for(let i=1; i<calculate.length;i+2){  
 
                     if  (calculate[i]=="+"){answer = (calculate[i-1])+(calculate[i+1])
                           
                            calculate.splice((i-1),3,answer);
                        console.log(calculate);}
                         
                    else 
                       { answer = (calculate[i-1])-(calculate[i+1])
                            calculate.splice((i-1),3,answer);
                        console.log(calculate);}
              }  
             }

            function currentNumberYes(){
                displayNumber = "";
                inputNum = 0;                        
                currentNumber = "";
                length++;
            }
            function currentNumberNo(){
                 calculate.push(Number(displayNumber))         
                 displayNumber = "";          
                 inputNum = 0;
                 length++;
            }

            function decimal(){
                
                for(i=0; i< calculate.length;i++){
                    console.log(calculate)
                 if (calculate[i] =="."){
                     decimalNumber = Number((calculate[i-1])+(calculate[i])+(calculate[i+1]))
                     calculate.splice((i-1),3,decimalNumber);
                     console.log(calculate);
                 }
                }
            }
            

            }

             
             
            
     
                        
             
               
     
        
         
        
  
         
    


         
