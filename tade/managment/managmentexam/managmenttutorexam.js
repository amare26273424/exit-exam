const x = [
                     
   
    {
        questions: "Which of the following is NOT a function of management?",
        option1: "Planning",
        option2: "Organizing",
        option3: "Leading",
        option4: "Accounting",
        answer: "Accounting",
        explanation: "Accounting is not a function of management. The four functions of management are planning, organizing, leading, and controlling."
      }
     ,
      {
        questions: "What is the primary goal of organizational behavior?",
        option1: "To increase profits",
        option2: "To improve employee satisfaction",
        option3: "To develop new products and services",
        option4: "To reduce costs",
        answer: "To improve employee satisfaction",
        explanation: "The primary goal of organizational behavior is to improve employee satisfaction and productivity by understanding human behavior in organizations."
      }
    ,
      {
        questions: "Which of the following is NOT a type of leadership style?",
        option1: "Autocratic",
        option2: "Democratic",
        option3: "Laissez-faire",
        option4: "Reactive",
        answer: "Reactive",
        explanation: "Reactive is not a type of leadership style. The three main types of leadership styles are autocratic, democratic, and laissez-faire."
      }
      ,
      {
        questions: "Which financial statement shows a company's assets, liabilities, and equity at a specific point in time?",
        option1: "Balance sheet",
        option2: "Income statement",
        option3: "Statement of cash flows",
        option4: "Statement of retained earnings",
        answer: "Balance sheet",
        explanation: "The balance sheet shows a company's assets, liabilities, and equity at a specific point in time, typically the end of a month, quarter, or year."
      }
     ,
      {
        questions: "Which type of organizational structure has a clear hierarchy with a single person at the top?",
        option1: "Matrix structure",
        option2: "Flat structure",
        option3: "Tall structure",
        option4: "Network structure",
        answer: "Tall structure",
        explanation: "A tall organizational structure has a clear hierarchy with a single person at the top and multiple layers of management below."
      }
   ,
      {
        questions: "What is the process of setting goals and objectives for an organization?",
        option1: "Planning",
        option2: "Organizing",
        option3: "Leading",
        option4: "Controlling",
        answer: "Planning",
        explanation: "Planning is the process of setting goals and objectives for an organization and determining the best way to achieve them."
      }
      ,
      {
        questions: "Which of the following is NOT a component of SWOT analysis?",
        option1: "Strengths",
        option2: "Weaknesses",
        option3: "Opportunities",
        option4: "Threats",
        answer: "",
        explanation: ""
      }
      ,
      {
        questions: "What is the process of assigning tasks and responsibilities to employees?",
        option1: "Planning",
        option2: "Organizing",
        option3: "Leading",
        option4: "Controlling",
        answer: "Organizing",
        explanation: "Organizing is the process of assigning tasks and responsibilities to employees and creating a structure that enables them to work together effectively."
      }
      ,
      {
        questions: "Which type of control focuses on preventing problems before they occur?",
        option1: "Feedforward control",
        option2: "Concurrent control",
        option3: "Feedback control",
        option4: "Predictive control",
        answer: "Feedforward control",
        explanation: "Feedforward control focuses on preventing problems before they occur by anticipating potential issues and taking steps to avoid them."
      }
      ,
      {
        questions: "Which of the following is NOT a factor that affects motivation?",
        option1: "Ability",
        option2: "Personality",
        option3: "Perception",
        option4: "Satisfaction",
        answer: "",
        explanation: ""
      }
      ,
      {
        questions: "Which type of power comes from one's position in an organization?",
        option1: "Referent power",
        option2: "Expert power",
        option3: "Legitimate power",
        option4: "Reward power",
        answer: "Legitimate power",
        explanation: "Legitimate power comes from one's position in an organization and the authority that comes with it."
      }
      ,
      {
        questions: "What is the process of measuring performance and taking corrective action when needed?",
        option1: "Planning",
        option2: "Organizing",
        option3: "Leading",
        option4: "Controlling",
        answer: "Controlling",
        explanation: "Controlling is the process of measuring performance and taking corrective action when needed to ensure that goals are being met."
      }
     ,
      {
         questions:"What is the process of guiding and directing employees to achieve organizational goals?",
         option1:"Planning",
         option2:"Organizing",
         option3:"Leading",
         option4:"Controlling", 
         answer:"Leading", 
         explanation:"Leading is the process of guiding and directing employees to achieve organizational goals by communicating with them, motivating them, and providing feedback."
       }
     ,
       {
         questions:"What is the process of analyzing a company's internal and external environment to identify strengths, weaknesses, opportunities, and threats?",
         option1:"SWOT analysis", 
         option2:"PEST analysis", 
         option3:"Porter's Five Forces analysis", 
         option4:"Gap analysis", 
         answer:"SWOT analysis", 
         explanation:"SWOT analysis is the process of analyzing a company's internal and external environment to identify strengths, weaknesses, opportunities, and threats."
       }
  
  ,
       {
         questions:"What is the process of coordinating activities across different departments or teams?",
         option1:"Planning", 
         option2:"Organizing", 
         option3:"Leading", 
         option4:"Controlling", 
         answer:"Organizing", 
         explanation:"Organizing is the process of coordinating activities across different departments or teams to ensure that they work together effectively."
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
  dsecripecontent.classList.toggle("showdescripe")
dsecripecontent.innerText= x[index].explanation

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