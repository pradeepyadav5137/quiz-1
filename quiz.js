const ques =  document.querySelector(".ques")
const radioes = document.querySelectorAll(".option")
const lables = document.querySelectorAll("label")
let questionNumber = 1;
 let score = [ ]

// console.log(lables)
console.log(radioes)


const questions = [
    {
      q: "2+2",
      a: 4,
      options: [5, 4, 3, 2],
    },
    {
        q: "2*2*0",
        a: 0,
        options: [22, 4, 0, 2],
    },
    {
      q: "3+3-3",
      a: 3,
      options: [9, 3, 33, 333],
    },
    {
      q: "4*4/2",
      a: 8,
      options: [8, 16, 4, 44],
    },
  ];
  
//   questionNumbers.innerHTML = questions[2].q
  ques.innerHTML = questions[0].q
//   questionNumber++
  optionChanges();
//   clearoption();
  
  let interwal =setInterval ( ()=> {
      
      if(questionNumber === questions.length ){
          clearInterval(interwal)
        }
        else{
            ques.innerHTML = questions[questionNumber].q
            questionNumber++
            optionChanges();
            clearoption();
   }
  },1000)

function optionChanges() {
  for( let i= 0; i<questions.length; i++ ){
    radioes[i].value = questions[questionNumber-1].options[i]
  }

  for( let i= 0; i<questions.length; i++ ){
        lables[i].innerHTML = questions[questionNumber-1].options[i]
    }
    }
    
    
    // lables.innerHTML[0] = questions[0].options[0]
    // lables[0].innerHTML= questions[0].options[0]


  function clearoption() {
    for (let i = 0; i < radioes.length; i++)
if ( radioes[i].checked === true) {
    radioes[i].checked = false
}
  }


