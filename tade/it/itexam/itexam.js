const x = [
                     
    {
        questions: "What is the primary function of the CPU in a computer?",
        option1: "To store data",
        option2: "To display images",
        option3: "To process data",
        option4: "To connect to the internet",
        answer: "To process data",
        explanation: "The CPU (Central Processing Unit) is the primary component in a computer that performs most of the processing. Its primary function is to process data."
    }
    
    , {
        questions: "What is the purpose of a router in computer networking?",
        option1: "To connect multiple devices to a network",
        option2: "To prevent unauthorized access to a network",
        option3: "To provide Wi-Fi signal strength",
        option4: "To control incoming and outgoing network traffic",
        answer: "To connect multiple devices to a network",
        explanation: "A router is a networking device that connects multiple devices to a network and routes data between them."
    }
    
    , {
        questions: "Which of the following is not a type of computer virus?",
        option1: "Worm",
        option2: "Trojan horse",
        option3: "Spyware",
        option4: "Firewall",
        answer: "Firewall",
        explanation: "A firewall is a security system that monitors and controls incoming and outgoing network traffic. It is not a type of computer virus."
    }
    
    , {
        questions: "Which of the following is not a programming language?",
        option1: "Python",
        option2: "Java",
        option3: "HTML",
        option4: "Photoshop",
        answer: "Photoshop",
        explanation: "Photoshop is a software application for image editing and manipulation. It is not a programming language."
    }
    
    ,{
        questions: "What is the purpose of a DNS server?",
        option1: "To store website data",
        option2: "To convert domain names to IP addresses",
        option3: "To provide internet connectivity",
        option4: "To block malicious websites",
        answer: "To convert domain names to IP addresses",
        explanation: "A DNS (Domain Name System) server is responsible for translating domain names into IP addresses that can be understood by computers."
    }
    
    , {
        questions: "What is the purpose of a firewall in computer networking?",
        option1: "To prevent unauthorized access to a network",
        option2: "To speed up data transfer between devices",
        option3: "To improve Wi-Fi signal strength",
        option4: "To block pop-up ads on websites",
        answer: "To prevent unauthorized access to a network",
        explanation: "A firewall is a security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules. Its primary purpose is to prevent unauthorized access to a network."
    }
    
    , {
        questions: "What is the purpose of an operating system in a computer?",
        option1: "To store data",
        option2: "To display images",
        option3: "To process data",
        option4: "To manage computer resources",
        answer: "To manage computer resources",
        explanation: "An operating system (OS) is the software that manages computer hardware resources and provides common services for computer programs."
    }
    
    ,{
        questions: "What is the purpose of a compiler in programming?",
        option1: "To translate high-level programming code into machine code",
        option2: "To execute machine code directly",
        option3: "To debug code errors",
        option4: "To create user interfaces for programs",
        answer: "To translate high-level programming code into machine code",
        explanation: "A compiler is a software tool that translates high-level programming code into machine code that can be executed directly by a computer's CPU."
    }
    , {
        questions: "Which of the following is not a type of computer memory?",
        option1: "RAM",
        option2: "ROM",
        option3: "CPU",
        option4: "Cache",
        answer: "CPU",
        explanation: "CPU (Central Processing Unit) is not a type of computer memory. It is the primary component that performs most of the processing inside a computer."
    }
    
    , {
        questions: "Which of the following is not an example of a cloud storage service?",
        option1: "Dropbox",
        option2: "Google Drive",
        option3: "iCloud",
        option4: "Microsoft Word",
        answer: "Microsoft Word",
        explanation: "Microsoft Word is not a cloud storage service. It is a word processing software application."
    }
    
    , {
        questions: "What is the purpose of an SSL certificate on a website?",
        option1: "To increase website loading speed",
        option2: "To improve website design",
        option3: "To encrypt data transmitted between website and user",
        option4: "To block spam emails from website visitors",
        answer: "To encrypt data transmitted between website and user",
        explanation: "An SSL (Secure Sockets Layer) certificate is used to encrypt data transmitted between a website and its users, providing secure communication over the internet."
    }
    
    , {
        questions: "Which of the following is not an example of an input device?",
        option1: "Keyboard",
        option2: "Mouse",
        option3: "Monitor",
        option4: "Scanner",
        answer: "Monitor",
        explanation: "A monitor is an output device that displays information from a computer. The other three options are input devices that allow users to interact with a computer."
    }
    
    , {
        questions: "What is the purpose of an IP address in computer networking?",
        option1: "To store website data",
        option2: "To translate domain names into IP addresses",
        option3: "To provide internet connectivity",
        option4: "To uniquely identify devices on a network",
        answer: "To uniquely identify devices on a network",
        explanation: "An IP (Internet Protocol) address is used to uniquely identify devices on a network, allowing them to communicate with each other over the internet."
    }
    
    , {
        questions: "Which of the following is not an example of an output device?",
        option1: "Printer",
        option2: "Speaker",
        option3: "Keyboard",
        option4: "Monitor",
        answer: "Keyboard",
        explanation: "A keyboard is an input device that allows users to enter data into a computer. The other three options are output devices that display or produce information from a computer."
    }
    
    , {
       questions:"What does SQL stand for?",
       option1:"Structured Query Language", 
       option2:"Simple Query Language", 
       option3:"Standard Query Language", 
       option4:"Static Query Language", 
       answer:"Structured Query Language", 
       explanation:"SQL stands for Structured Query Language, which is used to manage and manipulate relational databases."
    }
 
         

   ]
  
   const question= document.getElementById("question")
   const option1 = document.getElementById("option1")
   const option2 = document.getElementById("option2")
   const option3 = document.getElementById("option3")
   const option4 = document.getElementById("option4")
   const allbtns= document.querySelectorAll(".option")
   const xy=document.getElementById("xy")
   const  next =document.getElementById("next")
   const  back =document.getElementById("back")
   const number = document.getElementById("number")


  
console.log(x.length)


   var index = 0
   number.innerText =(index + 1)  + ","  + " " 
   question.innerText= x[index].questions
   option1.innerText = x[index].option1
   option2.innerText = x[index].option2
   option3.innerText = x[index].option3
   option4.innerText = x[index].option4
// start of the nextbutton
next.addEventListener("click",()=>{
         
if(index < x.length-1)
      {  
        index++
        number.innerText =(index + 1)  + ","  + " " 
        question.innerText= x[index].questions
       option1.innerText = x[index].option1
       option2.innerText = x[index].option2
       option3.innerText = x[index].option3
       option4.innerText = x[index].option4  
      }
    else{
         
       index=0
       number.innerText =(index + 1)  + ","  + " " 
          question.innerText= x[index].questions
         option1.innerText = x[index].option1
         option2.innerText = x[index].option2
         option3.innerText = x[index].option3
         option4.innerText = x[index].option4 
    }   
allbtns.forEach( (btn)=>{
  btn.style.backgroundColor="rgba(255, 228, 196, 0.498)"
})  
dsecripecontent.classList.remove("showdescripe")  
})
// end of the next button




//start of the back button

back.addEventListener("click",()=>{
         
  if(index > 0)
        {  
          index--
          number.innerText =(index + 1)  + ","  + " " 
          question.innerText= x[index].questions
         option1.innerText = x[index].option1
         option2.innerText = x[index].option2
         option3.innerText = x[index].option3
         option4.innerText = x[index].option4  
        }
      else{
           
         index = x.length-1
         number.innerText =(index + 1)  + ","  + " " 
          question.innerText= x[index].questions
         option1.innerText = x[index].option1
         option2.innerText = x[index].option2
         option3.innerText = x[index].option3
         option4.innerText = x[index].option4 
      }   
  allbtns.forEach( (btn)=>{
    btn.style.backgroundColor="rgba(255, 228, 196, 0.498)"
  })  
  dsecripecontent.classList.remove("showdescripe")  
  })
// end of back button






function fun(){
dsecripecontent.innerText= x[index].explanation
dsecripecontent.classList.toggle("showdescripe") 
}

// i think value is used to get value of the input not for all element //
allbtns.forEach( (btn1)=>{

btn1.addEventListener('click', ()=>{

   if(btn1.innerText == x[index].answer)
   {

    if(btn1.style.backgroundColor == "rgba(255, 228, 196, 0.498)")
      btn1.style.backgroundColor="green"  
      else
      btn1.style.backgroundColor="rgba(255, 228, 196, 0.498)"


      
   }
  
  
    else

      {
        if(btn1.style.backgroundColor == "rgba(255, 228, 196, 0.498)")
      btn1.style.backgroundColor="red"  
      else
      btn1.style.backgroundColor="rgba(255, 228, 196, 0.498)"
   }
        
      

         
})
} )

 

//

 
































const log =document.getElementById("loginsection1")
const y =document.getElementById("menubar")
const z =document.getElementById("barsymbol")
document.getElementById("login").addEventListener("click",()=>{
   if(log.style.height == "0vh")
    log.style.height="80vh"
    else
    log.style.height="0vh"
})

// document.body.addEventListener("clcik mouseover",()=>{

//    document.getElementById("quicklinks").classList.remove("addedquicklinksclass")      
// })

y.addEventListener("click",()=>{
   
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