$(document).ready(function(){
  console.log('in doc ready f/n')
  
 
   
  //var el = document.getElementById("card-spot");
  //console.log(el); 
  //el.appendChild(bsCardTemplate); 
  
  //code to create a bs card
  //code to add contents to card
  
  var elBtn = document.getElementsByTagName("button"); 
  console.log(elBtn[0]);
  elBtn[0].onclick = function(){
     createBSCard(getCardInput()); 
 };
  
}); 
//code to get input contents
function getCardInput() {
  var elInput = document.getElementById("card-input");
  return elInput.value;
}
function createBSCard(cardText) {
  
  var bsCardTemplate= document.createElement("div");
  bsCardTemplate.innerHTML = '<div class="card col-md-4"><div class="card-body">  <h5 class="card-title">Card title</h5><h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>  <p class="card-text">'+cardText+'</p>  </div> </div>';  
  
  document.body.appendChild(bsCardTemplate);    
  //TODO: later append to the card-spot, first on page
  
  
}