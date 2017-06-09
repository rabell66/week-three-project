
var calculate = []
var num = 0


	function showInput(x) {
        var num = x;
        

        if (num == 10){
            document.querySelector(".display").innerHTML = ""
        }
       

        else if(num == 11){
              calculate.push(document.querySelector(".display").innerHTML);
              document.querySelector(".display").innerHTML= document.querySelector(".display").innerHTML+"/";              
              calculate.push("/");
            //   document.querySelector(".display").innerHTML = 0}
            
              
             
            
            //   else if(num == 12)
            // { 
            //   calculate.push(document.querySelector(".display").value);
            //   document.querySelector(".display").innerHTML = 
            //   document.querySelector(".display").innerHTML+"*";
            //    calculate.push("*");}
            //   else if(num == 13)
            // {  calculate.push(document.querySelector(".display").value);
            //    document.querySelector(".display").innerHTML = 
            //    document.querySelector(".display").innerHTML+"-"
            //    calculate.push("-")}
            //   else if(num == 14)
            // {  calculate.push(document.querySelector(".display").value);
            //    document.querySelector(".display").innerHTML = 
            //    document.querySelector(".display").innerHTML+"+"
            //    calculate.push("+")}
            else
            {
             
                
             document.querySelector(".display").innerHTML = 
             document.querySelector(".display").innerHTML+num;
             
            console.log(document.querySelector(".display").innerHTML);
            
        }
    

    }

         
 



         
