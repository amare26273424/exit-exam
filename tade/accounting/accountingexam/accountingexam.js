const x = [
                     
    {
        questions: "What is the accounting equation?",
        option1: "Assets = Liabilities + Equity",
        option2: "Assets + Liabilities = Equity",
        option3: "Liabilities = Assets + Equity",
        option4: "Equity = Assets + Liabilities",
        answer: "Assets = Liabilities + Equity",
        explanation: "The accounting equation states that assets must always equal the sum of liabilities and equity."
    }
    
    ,{
        questions: "Which of the following is not an example of an asset?",
        option1: "Cash",
        option2: "Accounts payable",
        option3: "Inventory",
        option4: "Equipment",
        answer: "Accounts payable",
        explanation: "Accounts payable is a liability, not an asset. It represents money owed by a company to its creditors."
    }
    
    , {
        questions: "Which of the following financial statements shows a company's revenues and expenses over a period of time?",
        option1: "Balance sheet",
        option2: "Income statement",
        option3: "Statement of cash flows",
        option4: "Statement of changes in equity",
        answer: "Income statement",
        explanation: "The income statement shows a company's revenues and expenses over a period of time, typically a month, quarter, or year."
    }
    
    ,
    {
        questions: "What is the purpose of the statement of cash flows?",
        option1: "To show a company's revenues and expenses over a period of time",
        option2: "To show a company's assets, liabilities, and equity at a specific point in time",
        option3: "To show a company's sources and uses of cash over a period of time",
        option4: "To show a company's changes in equity over a period of time",
        answer: "To show a company's sources and uses of cash over a period of time",
        explanation: "The statement of cash flows shows a company's sources and uses of cash over a period of time, typically a month, quarter, or year."
    }
        , {
        questions: "Which of the following is an example of a current asset?",
        option1: "Land",
        option2: "Buildings",
        option3: "Accounts receivable",
        option4: "Patents",
        answer: "Accounts receivable",
        explanation: "Accounts receivable is a current asset because it is expected to be converted into cash within one year."
    }
    
    , {
        questions: "Which of the following is an example of a long-term liability?",
        option1: "Accounts payable",
        option2: "Notes payable due within one year",
        option3: "Mortgage payable",
        option4: "Salaries payable",
        answer: "Mortgage payable",
        explanation: "Mortgage payable is a long-term liability because it is not due within one year."
    }
    
    , {
        questions: "Which of the following is not an example of an expense?",
        option1: "Rent expense",
        option2: "Wages expense",
        option3: "Accounts receivable",
        option4: "Supplies expense",
        answer: "Accounts receivable",
        explanation: "Accounts receivable is not an expense. It is an asset that represents money owed to a company by its customers."
    }
    
    , {
        questions: "What is the purpose of the statement of retained earnings?",
        option1: "To show a company's revenues and expenses over a period of time",
        option2: "To show a company's assets, liabilities, and equity at a specific point in time",
        option3: "To show a company's changes in equity over a period of time",
        option4: "To show a company's sources and uses of cash over a period of time",
        answer: "To show a company's changes in equity over a period of time",
        explanation: "The statement of retained earnings shows how a company's retained earnings have changed over a period of time due to net income or loss, dividends, and other adjustments."
    }
    
    , {
        questions: "Which of the following inventory costing methods assumes that the first items purchased are the first ones sold?",
        option1: "FIFO (First-In, First-Out)",
        option2: "LIFO (Last-In, First-Out)",
        option3: "Weighted average cost",
        option4: "Specific identification",
        answer: "FIFO (First-In, First-Out)",
        explanation: "FIFO (First-In, First-Out) assumes that the first items purchased are the first ones sold, so the cost of goods sold is based on the cost of the oldest inventory."
    }
    
    , {
        questions: "Which of the following financial ratios measures a company's ability to pay its short-term debts?",
        option1: "Current ratio",
        option2: "Debt-to-equity ratio",
        option3: "Gross profit margin",
        option4: "Return on equity",
        answer: "Current ratio",
        explanation: "The current ratio measures a company's ability to pay its short-term debts by comparing its current assets to its current liabilities."
    }
    
    ,{
        questions: "Which financial statement shows a company's assets, liabilities, and equity at a specific point in time?",
        option1: "Balance sheet",
        option2: "Income statement",
        option3: "Statement of cash flows",
        option4: "Statement of retained earnings",
        answer: "Balance sheet",
        explanation: "The balance sheet shows a company's assets, liabilities, and equity at a specific point in time, typically the end of a month, quarter, or year."
    }
    
    , {
        questions: "Which accounting principle requires that expenses be recorded in the same period as the revenues they help to generate?",
        option1: "Matching principle",
        option2: "Consistency principle",
        option3: "Materiality principle",
        option4: "Conservatism principle",
        answer: "Matching principle",
        explanation: "The matching principle requires that expenses be recorded in the same period as the revenues they help to generate, so that the income statement accurately reflects a company's profitability."
    }
    
    , {
        questions: "Which financial statement shows changes in a company's equity over a period of time?",
        option1: "Balance sheet",
        option2: "Income statement",
        option3: "Statement of cash flows",
        option4: "Statement of changes in equity",
        answer: "Statement of changes in equity",
        explanation: "The statement of changes in equity shows changes in a company's equity over a period of time due to net income or loss, dividends, and other adjustments."
    }
    
    , {
        questions: "Which accounting principle requires that assets be recorded at their historical cost?",
        option1: "Materiality principle",
        option2: "Matching principle",
        option3: "Conservatism principle",
        option4: "Cost principle",
        answer: "Cost principle",
        explanation: "The cost principle requires that assets be recorded at their historical cost, which is the amount paid for them at the time of acquisition."
      
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