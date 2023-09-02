const x = [
                     
    {
        questions: "What is the binary equivalent of the decimal number 10?",
        option1: "1010",
        option2: "0110",
        option3: "1110",
        option4: "0010",
        answer: "1010",
        explanation: "The binary equivalent of the decimal number 10 is 1010."
    }
    ,{
        questions: "What is the purpose of a compiler?",
        option1: "To convert source code into machine code",
        option2: "To execute machine code",
        option3: "To debug source code",
        option4: "To optimize machine code",
        answer: "To convert source code into machine code",
        explanation: "A compiler is a software tool that converts source code written in a high-level programming language into machine code that can be executed by a computer."
    }
    
    , {
        questions: "Which of the following data structures uses LIFO (Last-In-First-Out) order?",
        option1: "Queue",
        option2: "Stack",
        option3: "Tree",
        option4: "Graph",
        answer: "Stack",
        explanation: "A stack is a data structure that uses LIFO (Last-In-First-Out) order, meaning that the last element added to the stack is the first one to be removed."
    }
    
    ,{
        questions: "What is the purpose of an operating system?",
        option1: "To manage hardware resources",
        option2: "To run applications",
        option3: "To connect to the internet",
        option4: "To create documents",
        answer: "To manage hardware resources",
        explanation: "An operating system is a software program that manages hardware resources and provides services for applications to run on a computer."
    }
    
    , {
        questions: "Which of the following is not a type of sorting algorithm?",
        option1: "Bubble Sort",
        option2: "Quick Sort",
        option3: "Merge Sort",
        option4: "Hash Sort",
        answer: "Hash Sort",
        explanation: "Hash Sort is not a type of sorting algorithm. The other three options are common sorting algorithms used in computer science."
    }
    
    , {
        questions: "What is the purpose of recursion in programming?",
        option1: "To optimize code execution speed",
        option2: "To reduce memory usage",
        option3: "To simplify code structure",
        option4: "To solve complex problems by breaking them down into smaller sub-problems",
        answer: "To solve complex problems by breaking them down into smaller sub-problems",
        explanation: "Recursion is a programming technique where a function calls itself to solve a problem by breaking it down into smaller sub-problems."
    }
    
    , {
        questions: "Which of the following is not an example of a data structure?",
        option1: "Array",
        option2: "Queue",
        option3: "Stack",
        option4: "Loop",
        answer: "Loop",
        explanation: "Loop is not a data structure. It is a programming construct used to repeat a set of instructions multiple times."
    }
    
    , {
        questions: "What is the purpose of object-oriented programming?",
        option1: "To simplify code structure",
        option2: "To improve code performance",
        option3: "To make code more modular and reusable",
        option4: "To reduce memory usage",
        answer: "To make code more modular and reusable",
        explanation: "Object-oriented programming (OOP) is a programming paradigm that uses objects to represent real-world entities and provides a way to organize and structure code in a modular and reusable way."
    }
    
    , {
        questions: "Which of the following is not an example of a database management system?",
        option1: "MySQL",
        option2: "Oracle",
        option3: "MongoDB",
        option4: "Adobe Photoshop",
        answer: "Adobe Photoshop",
        explanation: "Adobe Photoshop is not a database management system. The other three options are examples of popular database management systems."
    }
    
    , {
        questions: "What is the purpose of an API (Application Programming Interface)?",
        option1: "To provide a user interface for an application",
        option2: "To connect two different applications together",
        option3: "To improve application performance",
        option4: "To store data in a database",
        answer: "To connect two different applications together",
        explanation: "An API (Application Programming Interface) is a set of protocols, routines, and tools for building software applications and connecting different applications together."
    }
    
    , {
        questions: "Which of the following is not an example of a web development framework?",
        option1: "React.js",
        option2: "Angular.js",
        option3: ".NET Framework",
        option4: "Photoshop CC",
        answer: "Photoshop CC",
        explanation: "Photoshop CC is not a web development framework. The other three options are examples of popular web development frameworks."
    }
    
    , {
        questions: "What is the purpose of version control software?",
        option1: "To manage project schedules and timelines",
        option2: "To track changes to source code over time",
        option3: "To improve application performance",
        option4: "To provide automated testing for software applications",
        answer: "To track changes to source code over time",
        explanation: "Version control software is a tool used by developers to track changes to source code over time and collaborate on software development projects."
    }
    
    , {
        questions: "Which of the following is not an example of a software testing technique?",
        option1: "Unit Testing",
        option2: "Integration Testing",
        option3: "Regression Testing",
        option4: "Optimization Testing",
        answer: "Optimization Testing",
        explanation: "Optimization Testing is not a software testing technique. The other three options are common software testing techniques used in computer science."
    }
    
    , {
        questions: "What is the purpose of machine learning?",
        option1: "To write algorithms that can learn from data and make predictions or decisions based on that data.",
        option2: "To improve application performance.",
        option3: "To reduce memory usage.",
          option4:"None of the above",
          answer:"To write algorithms that can learn from data and make predictions or decisions based on that data.",
          explanation:"Machine learning is a subfield of artificial intelligence that involves writing algorithms that can learn from data and make predictions or decisions based on that data."
    }
    
    , {
          questions:"Which of the following statements about cloud computing is true?",
          option1:"Cloud computing refers to the use of physical servers to store data and run applications.",
          option2:"Cloud computing requires users to purchase and maintain their own hardware infrastructure.",
          option3:"Cloud computing allows users to access computing resources on demand over the internet.",
          option4:"Cloud computing does not involve any security risks.",
          answer:"Cloud computing allows users to access computing resources on demand over the internet.",
          explanation:"Cloud computing refers to the use of remote servers hosted on the internet to store, manage, and process data, rather than using local servers or personal computers." 
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
          question.innerText= x[index].question
         option1.innerText = x[index].option1
         option2.innerText = x[index].option2
         option3.innerText = x[index].option3
         option4.innerText = x[index].option4 
    }   
allbtns.forEach( (btn)=>{
  btn.style.backgroundColor="rgba(255, 228, 196, 0.498)"
})  

// to remove the descripe

dsecripecontent.classList.remove("showdescripe")
})
// end of the next button




//start of the back button

back.addEventListener("click",()=>{
         
  if(index > 0)
        {  
          index--
          number.innerText =(index + 1)  + ","  + " " 
          question.innerText= x[index].question
         option1.innerText = x[index].option1
         option2.innerText = x[index].option2
         option3.innerText = x[index].option3
         option4.innerText = x[index].option4  
        }
      else{
           
         index = x.length-1
         number.innerText =(index + 1)  + ","  + " " 
          question.innerText= x[index].question
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