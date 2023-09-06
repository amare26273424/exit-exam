const x =document.getElementById("loginsection1")
const y =document.getElementById("menubar")
const z =document.getElementById("barsymbol")


document.getElementById("login").addEventListener("click",()=>{
   if(x.style.height == "0vh")
    x.style.height="80vh"
    else
    x.style.height="0vh"
})

// document.body.addEventListener("clcik mouseover",()=>{

   

//    document.getElementById("quicklinks").classList.remove("addedquicklinksclass")      
// })

y.addEventListener("click",()=>{
   x.style.height="0vh"
   z.classList.toggle("fa-xmark")
   document.getElementById("quicklinks").classList.toggle("addedquicklinksclass")
  
   
})

// function menufun()  {

//    console.log("hi")
//       //   document.style.backgroundColor="black"
//       //   document.getElementById("quicklinks").classList.toggle("addedquicklinksclass")   
//         }     









 function nightmodefun(){
    if( document.body.style.backgroundColor=="white")
        {
           document.body.style.backgroundColor="rgba(0, 0, 0, 0.652)"
           document.getElementById("header2").style.backgroundColor="white"
           document.querySelectorAll(".a1").forEach(element => {
              element.style.backgroundColor="rgba(0, 0, 0, 0.383)";
                                                       })
            document.querySelectorAll(".p1").forEach(element => {
               element.style.color="white";

                                                          })

        }
  



 else
       {
           document.body.style.backgroundColor="white"
           document.getElementById("header2").style.backgroundColor=" rgba(0, 0, 0, 0.614)" 
           document.querySelectorAll(".a1").forEach(element => {
          element.style.backgroundColor="rgba(0, 0, 0, 0.1)";      
                                                              }) 
          document.querySelectorAll(".p1").forEach(element => {
             element.style.color="black";
                                                        })
            document.style.color="black"
         }
 
                                 }