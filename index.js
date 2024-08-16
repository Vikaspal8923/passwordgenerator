     

      let passworddisplay = document.getElementById("pass1");
      let passwordlengthshow = document.getElementById('len1-1');
        
      let inputslider = document.getElementById('myrange');
      let uppercase = document.getElementById("len3");
      let lowercase = document.getElementById("len4");
      let numbercase = document.getElementById("len5");
      let setcolor = document.getElementById("color");
        let copybtn = document.getElementById("pass2");
      let allcheckbox = document.querySelectorAll("input[type = checkbox]");
   
        let finalgenerate = document.getElementById("finalgenerate");


      let intialpasswordlength = 10;
      let checkcount = 1;
      let password = "";
       handleslider();
      

      function handleslider(){
               
                          inputslider.value = intialpasswordlength;
                          passwordlengthshow.innerText = intialpasswordlength;
                        

      }

      function getrandomintegers(min,max){
                    
                   return ( Math.floor(  Math.random()*(max-min)   ) + min );
      }


      function getrandomnumber(){
                
                     let x = getrandomintegers(0,9);
                     return x;
      }

      function getrandomuppercase(){
                
        let x = String.fromCharCode( getrandomintegers(65,91) );
        return x;
}

      function getrandomlowercase(){
                
            let x = String.fromCharCode( getrandomintegers(97,123) );
                return x;
         }
     async function copycontent(){

          try{
                    await navigator.clipboard.writeText(passworddisplay.value);
                    copybtn.innerText ="copied";
          }
          catch(e){
                       copybtn.innerText = "failed";        
          }
  }

       function  strengthpassword(){
                
                   let hasupper = false;
                   let haslower  = false;
                   let hasnumber = false;

                if(uppercase.checked) hasupper= true;
                if(lowercase.checked) haslower = true;
                if(numbercase.checked) hasnumber = true;

                if(hasnumber && hasupper && haslower){
                   
                            setcolor.style.backgroundColor = "red";
                }
                            else{
                              setcolor.style.backgroundColor = "green";
                            }  
                }
                  function  handlecheckbox(){
                           checkcount=0;
                    if(uppercase.checked) {
                       checkcount++;
                    }
                    if(lowercase.checked) {
                        checkcount++;
                    }
                    if(numbercase.checked) {
                        checkcount++;
                    }

                     if(intialpasswordlength<checkcount){
                              intialpasswordlength = checkcount;
                              handleslider();
                     }
                  }
                 allcheckbox.forEach( (checkbox)=>{
                            checkbox.addEventListener('change', handlecheckbox);
                 }

                 )

                inputslider.addEventListener('input',function(){

                              intialpasswordlength = inputslider.value;
                              handleslider();
                              passworddisplay.value= "";
                              password = "";
                });

                 
      
                 finalgenerate.addEventListener('click',function(){

                      copybtn.innerText = "copy";
                              password =  "";
                  if(uppercase.checked) {
                        password += getrandomuppercase();
                 }
                 if(lowercase.checked) {
                     password += getrandomlowercase();
                 }
                 if(numbercase.checked) {
                     password += getrandomnumber();
                 }

                   for( let i= 0 ;i< (intialpasswordlength - checkcount);i++){
                                  console.log(" my i value is : " , i);
                                if(uppercase.checked && lowercase.checked && numbercase.checked){
                                          let a =   getrandomintegers(1,4);

                                          if( a==1){  password += getrandomuppercase();}
                                          else if(a==2){  password += getrandomlowercase();}
                                          else{
                                            password += getrandomnumber();
                                          } 
                                }
                                 
                              else  if(uppercase.checked && lowercase.checked ){
                                  let a =   getrandomintegers(1,3);

                                  if( a==1){  password += getrandomuppercase();}
                                  else {  password += getrandomlowercase();}
                                 
                               }

                             else  if( lowercase.checked && numbercase.checked){
                                let a =   getrandomintegers(2,4);

                                 if(a==2){  password += getrandomlowercase();}
                                else{
                                  password += getrandomnumber();
                                } 
                                 }

                              else   if(uppercase.checked &&  numbercase.checked){
                                  let a =   getrandomintegers(1,3);

                                  if( a==1){  password += getrandomuppercase();}
                                 
                                  else{
                                    password += getrandomnumber();
                                  } 
                        }
                   }
                               strengthpassword();
                             passworddisplay.value = password;
                            console.log(password);
                 });


               
 
                 copybtn.addEventListener('click',copycontent);
                


        


























































//         let  passworddisplay = document.getElementById('pass1');
//          let copybtn = document.getElementById('pass2');
//        let inputslider = document.getElementById("myrange");
//        console.log(inputslider);

//        const  lengthdisplay = document.getElementById( 'len1-1');


//        const  uppercase = document.getElementById( 'len3');
//        console.log(uppercase);

//        const  lowercase = document.getElementById( 'len4');
//        console.log(lowercase);

//        const  number = document.getElementById( 'len5');
//        console.log(number);

//          let colorst = document.getElementById('color');

//          const generate = document.getElementById('finalgenerate');

//          const allcheck = document.querySelectorAll("input[type = checkbox]");

//          let password ="";
//          let passwordlength1 = 10;
//          let checkcount = 1;
//             handleslide();
//  // set password length
//            function handleslide(){
                    
//                       inputslider.value = passwordlength1;
//                        lengthdisplay.innerText =passwordlength1; 

                      
//            } 

//           function setindicator(color){
                        
//                          colorst.style.backgroundColor = color;

//            }

//            function getrndminteger(min ,max){
                           
//                     return   Math.floor( Math.random()* (max - min))  + min ;
//            }

//            function generaterandomnumber(){
//                            return getrndminteger(0,9);
//            }

//            function generatelower(){
//                        return  String.fromCharCode( getrndminteger(97,123) );
//            }
//            function generateupper(){
//             return  String.fromCharCode( getrndminteger(65,91) ); }

//              function calstrength(){
//                    let hasupper = false;
//                    let haslower = false;
//                    let hasnumber = false;


//                    if(uppercase.checked) hasupper = true;
//                    if(lowercase.checked)  haslower =true;
//                    if(number.checked)   hasnumber = true;

//                    if(haslower && hasupper && passwordlength1>=8){
//                         setindicator("#0f0");
//                    }


//              }

             
  
//              inputslider.addEventListener('input' , function(e){
                
//                 passwordlength1 = e.target.value;
//                 handleslide();
//      });

//     generate.addEventListener('click',function(){
          
          
//     });

