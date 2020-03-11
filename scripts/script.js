
console.log("Waiting for user input");

var form = document.getElementById("myForm");
function handleForm(event) {
  event.preventDefault();
  } 
form.addEventListener('submit', handleForm);

var el = document.getElementById("submit");
el.addEventListener("click", inOutFunction);

function inOutFunction() {
  var userName = document.getElementById("name").value;
  console.log("Got User input");

  document.getElementById("userGreeting").innerHTML = "Greetings, "+userName+"!";
  console.log("Printed user greeting");

  var oneDay = 1000 * 60 * 60 * 24;

  var presentDate = new Date();
  var christmasDay = new Date(presentDate.getFullYear(), 11, 25);

  if (presentDate.getMonth() == 11 && presentDate.getdate() > 25){
    christmasDay.setFullYear(christmasDay.getFullYear() + 1);
  }

  var result = Math.round(christmasDay.getTime() - presentDate.getTime()) / (oneDay);
  var daysToChristmas = result.toFixed(0);

  console.log("Calculated Days till Christmas");

  document.getElementById("daysTillChristmas").innerHTML = "There are "+daysToChristmas+" days till Christmas.";
  console.log("Printed days till chrsitmas");

  var nameLen = userName.length;

  document.getElementById("nameLength").innerHTML = "Your name is "+nameLen+" letters long.";
  console.log("Printed length of name.");

  var randomNames = ["Stanley", "Jim", "Micheal", "Pam", "Johnny", "Bernie"]

  var randNum = Math.floor(Math.random() * 5);

  var randomUserName = randomNames[randNum];

  document.getElementById("randomName").innerHTML = "Your new random name is "+randomUserName+".";
  console.log("Printed random new name.");

  var nameSum = userName.length + 26;
  
  console.log("Calculated name length plus # of letters in alphabet.");
  
  document.getElementById("addName").innerHTML = "The sum of your name length and the # of letters in the alphabet is: "+nameSum+".";
  console.log("Printed sum.");
  
}
