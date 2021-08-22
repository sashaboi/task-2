var read = require("readline-sync");

var quizDict = [
  
  {
    question : "If you increase the aperture from f4.5 to f8 and other settings are constant , does your image get lighter or darker ",
    answer : "darker"
  },
  {
    question : "If you shoot with high ISO , will your photo be : clear / grainy ",
    answer : "grainy"
  },
  {
    question : "The 'exposure triangle' consists of Shutter speed , ISO, and ",
    answer : "aperture"
  },
  {
    question : "Your photo will have motion blur if your shutter speed is higher / lower? ",
    answer : "lower"
  },
  {
    question : "What camera is better Nikon or Canon or Sony?  ",
    answer : "Doesnt matter lol"
  },
]

var score = 0

function hello(){
  userName = read.question("What is your name ?  ")
  console.log("Hello " +userName +" ! This is quiz is about photography and camera technicalities , here we go ! ")
}

function quiz(){
  for(var i= 0 ; i < quizDict.length ; i++){
    quizDictObject = quizDict[i]
    checkAns(quizDictObject.question , quizDictObject.answer)
  }
    

}


function checkAns(question , answer){
  userAnswer = read.question(question)
    if (userAnswer.toUpperCase()  == answer.toUpperCase()){
      console.log("Correct ! ")
      score = score + 1
    }else {
      console.log("Answer is wrong :( , the correct answer was : " + answer)
    }

}
function showscore(){
  console.log("Congrats " + userName+ ",  your final score is : " + score)
}

//run everything
hello()
quiz()
showscore()
