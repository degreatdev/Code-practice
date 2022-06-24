//A FUNCTION THAT PRINTS THE LENGHT OF AN ARRARY OR STRING
function length_of_object(objectArg) {
      count="";
      for (i=0;i<=objectArg.length;i++){
        count = [i];

      }
      console.log(count);


};

//A FUNCTION THAT PRINTS EVERYTHING IN A LIST
var vinix = ['C', 'MA', 'BA', 'PG', 'CSCO', 'VZ', 'PFE', 'HD', 'INTC']
listArray = vinix;
  (function printsAll (listObject) {
   for (var i = 0; i < listObject.length; i++) {
     console.log(listObject[i]);
   }
   return True
 }
(listArray));

//OBJECT WITH FUNCTION OF CHANGING NAME
var changeName = {
  namestuds: "jim",
  student: this.name,
  changeToTim : function changing(nameRecieved) {
    ChangeName.namestuds = nameRecieved;
  },
  alertMsg:function alerting() {
      console.log("changed name to " + this.namestuds )
  }

}
