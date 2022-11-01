/*============= unit converter (for measurement) ============================*/

let cm = 2.54;  //===== STANDARD VALUE FOR CM =========
let inch = 0.394; //===== STANDARD VALUE FOR INCH =========

function unitConverter (){ 
  let whichUnitFrom = prompt("which unit are you converting from: Egs: cm,inch ") //======= COLLECTS VALUES ============================
  let unitValue1Received = prompt("Input the value "); //======= COLLECTS VALUES ============================
  let unitValue1 = parseInt(unitValue1Received);

  let whichUnitTo = prompt("which unit are you converting to, Egs: cm,inch")  //======= COLLECTS VALUES ============================
//   let unitValue2 = "";


    if(isNaN(whichUnitFrom) && isNaN(whichUnitTo) && unitValue1 !== "") {
        // console.log("received") //======= ALL ERROR PROBABILITY SOLVED ============================

        if (whichUnitFrom == "cm" && whichUnitTo == "inch"){

            //The calculation process here
            let unitValue2 = unitValue1 * inch;
            console.log("the value of " + unitValue1 + " in cm is " + unitValue2.toFixed(3) + " in inch" );
            alert("Check the console");
            unitConverter();

            
    
            } 
            else if (whichUnitFrom == "inch" && whichUnitTo == "cm"){
    
              //The calculation process here
              let unitValue2 = unitValue1 * cm;
    
            console.log("the value of " + unitValue1 + " in inch is " + unitValue2.toFixed(3) + " in cm" );
            alert("Check the console");
            unitConverter();
            }
        

    } else if (whichUnitFrom === "" && whichUnitTo === "" && unitValue1 === ""){ //======= CHECKS IF VALUES INPUTTED ARE EMPTY SPACES ============================

        alert ("Error pls input values"); //======= ALERTS TO CORRECT ============================
        unitConverter();  //======= FUNCTION RECURSION (REPEATS) ============================
        }
    
    else {
        alert('pls input correct option values');
         
       }

    }


unitConverter(); //======= CALLS THE FUNCTION =================