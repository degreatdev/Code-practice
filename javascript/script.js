//A FUNCTION THAT PRINTS THE LENGHT OF AN ARRAY OR STRING
function length_of_object(objectArg) {
    var count="";
      for (i=0;i<=objectArg.length;i++){
        count = [i];

      }
      console.log(count);


};

//A FUNCTION THAT PRINTS EVERYTHING IN A LIST
var vinix = ['C', 'MA', 'BA', 'PG', 'CSCO', 'VZ', 'PFE', 'HD', 'INTC']
var listArray = vinix;
  (function printsAll (listObject) {
   for (var i = 0; i < listObject.length; i++) {
     console.log(listObject[i]);
   }
   return True
 }
(listArray)); //was immediately invoked with the argument


//OBJECT WITH FUNCTION OF CHANGING NAME
var nameChange= prompt("Enter firstName: "); //asks for firstName
var secondChange = prompt("Enter secondName: "); //asks for secondName

//Object that contains details of user
var ChangeName = {
  name: "jim ",
  secondName: "james",
  student: '', // contains "name" + "secondName" variable.

  //Function that changes and updates the name variable
  changeToTim : function changing(nameReceived,secondNameReceived) {
    
    if(nameReceived && secondNameReceived ==undefined){ //checks if the parameters are numbers or have error.
      alert("pls input names in alphabet");
      return false;
      
    }

    //if all correct, proceed...
    else{
      ChangeName.name = nameReceived; // firstName received...
      ChangeName.secondName = secondNameReceived; // firstName received...
    this.student = ChangeName.name +" "+ ChangeName.secondName //updates and changes "student" to the current firstName and secondName

    ChangeName.alertMsg() //invokes the alert message which is the updated name..
      
    return true
    };
    
  },

  //An alert message that outputs the content in the student variable.
  alertMsg:function alerting() {
      alert("changed name to " + this.student )
  }

}
ChangeName.changeToTim(nameChange,secondChange); //invokes the "changeToTim" function in "ChangeName" object, with arguments "nameChange,secondChange" variable.


//------NEW FUNCTION-----//
let row = 100;
let seatNumber = 100;

function seatCounter(rowNumber,availableSeat) {
  for (let i = 0; i < rowNumber.length; i++) {
    let element = i;
    console.log(element);
    
  }
}


var seatCount = prompt("Enter row number")
var notAvailable =[];



if (seatCount<=100 & notAvailable !=seatCount) {
  alert("Your seat number " + seatCount + " is available")

  inputUnavailable(seatCount);

}else{
  alert("INVALID")
}

function inputUnavailable(unavailable) {
  notAvailable = unavailable;
}

