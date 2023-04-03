  const insertBalance  = parseInt(prompt("inserte su presupuesto semanal"));  
  var initialBalance   = document.getElementById("initialBalance");
  var sendInformation  = document.getElementById("sendInformation");
  var remainingBalance = document.getElementById("remainingBalance");
  var expenseNameInput = document.getElementById("addGasto");
  var amountInput      = document.getElementById("addGasto1");
  var expenseList      = document.getElementById("expenseList");
  var referense        = document.getElementById("referense");
    
  var showBalance = document.createElement('p');
  var showBalanceValue= document.createTextNode("Initial Balance: " + insertBalance +"$");
  showBalance.appendChild(showBalanceValue); 
  initialBalance.appendChild(showBalance);

  var showRemainingBalance = document.createElement('p');
  var showRemainingValue= document.createTextNode("Remaining Balance: " + insertBalance + "$");
  showRemainingBalance.appendChild(showRemainingValue); 
  remainingBalance.appendChild(showRemainingBalance);

  function actualizar(){

  var span = document.createElement("span");
  var contendSpan=document.createTextNode(amountInput.value +"$");
  span.appendChild(contendSpan);
  span.setAttribute("class","badge badge-primary badge-pill");
  var  elementExpenseList = document.createElement("li")
  var contendExpenseList=document.createTextNode(expenseNameInput.value);
  elementExpenseList.appendChild(contendExpenseList );
  elementExpenseList.appendChild( span);
  elementExpenseList.setAttribute("class", "list-group-item d-flex justify-content-between   align-items-center");
  expenseList.appendChild(elementExpenseList);
  remainingBalance.appendChild(showRemainingBalance);
  }


  var stockBalance= insertBalance;

  function makeRest(amountInput){

   stockBalance = stockBalance-amountInput.value; 

   return stockBalance

   }

  function colorChange(){

   
if( (insertBalance/  4) >stockBalance ){
              remainingBalance.classList.remove('alert-success', 'alert-warning'); //Para quitar clase
              remainingBalance.classList.add('alert-danger'); // Para añadir nueva clase
        } else if( (insertBalance / 2 ) > stockBalance ) {
            remainingBalance.classList.remove('alert-success'); //Para quitar clase
            remainingBalance.classList.add('alert-warning'); // Para añadir nueva clase
        } else{
               remainingBalance.classList.remove('alert-danger', 'alert-warning'); //Para quitar clase
               remainingBalance.classList.add('alert-success'); // Para añadir nueva clase
        }

   }


  function makeAllFunction(){
    makeRest(amountInput);
    actualizar();
    colorChange();
    var form= document.getElementById("form").reset(); 
   remainingBalance.innerHTML="Remaining Balance: " + stockBalance +"$";

  referense.innerHTML= insertBalance +"$";
  };


 sendInformation.addEventListener('click',makeAllFunction );