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



/*============= unit converter (for measurement) ============================*/

let cm = 2.54;  //===== STANDARD VALUE FOR CM =========
let inch = 0.394; //===== STANDARD VALUE FOR INCH =========
let numArray = [1,2,3,4,5,6,7,8,9,10];

function unitConverter (){ 
  let whichUnitFrom = prompt("which unit are you converting from: Egs: cm,inch ") //======= COLLECTS VALUES ============================
  let unitValue1 = prompt("Enter the value "); //======= COLLECTS VALUES ============================
  let whichUnitTo = prompt("which unit are you converting to, Egs: cm,inch")  //======= COLLECTS VALUES ============================
  let unitValue2 = "";
  
  if (whichUnitFrom === "" && whichUnitTo === "" && unitValue1 === ""){ //======= CHECKS IF VALUES INPUTTED ARE EMPTY SPACES ============================

            alert ("Error pls input correct values"); //======= ALERTS TO CORRECT ============================
            unitConverter();  //======= FUNCTION RECURSION (REPEATS) ============================
          
  }

  else{ 
    if (whichUnitFrom == numArray[0] || whichUnitFrom == numArray[1] || whichUnitTo == numArray[0] || whichUnitTo == numArray[1]){  //======= CHECKS IF VALUES INPUTTED ARE NUMBERS FOUND IN "numArray" ACCORDING TO ITEM INDEXING ============================
      alert('pls input correct option values');
      unitConverter();

    }else{
      // console.log("received") //======= ALL ERROR PROBABILITY SOLVED ============================

      if (whichUnitFrom == "cm" && whichUnitTo == "inch"){

        //The calculation process here
        unitValue2 = unitValue1 * inch;
        console.log("the value of " + unitValue1 + " in cm is " + unitValue2 + " in inch" );
        unitConverter();

        } 
        else if (whichUnitFrom == "inch" && whichUnitTo == "cm"){

          //The calculation process here
          unitValue2 = unitValue1 * cm;

        console.log("the value of " + unitValue1 + " in inch is " + unitValue2 + " in cm" );
        unitConverter();
        }
      
      }

  }
    
};




// else if (whichUnitFrom === "cm" && whichUnitTo === " inch" || whichUnitFrom === "inch" && whichUnitTo === "cm"){

//   //The calculation process here
// Console.log("the value of " + unitValue1+ " in cm is " + unitValue2 + " in inch" );
// } 
// }



