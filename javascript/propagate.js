// ========== LOOPS WITH OBJECT =======

const characters = [
    {name: "Ken the Ninja", age: 14},
    {name: "Master Wooly", age: 1000},
    {name: "Ben the Baby Ninja", age: 5},
  ];
  
  // Complete the for loop
  for (let i =0; i<characters.length; i++) {
    console.log("--------------------");
    
    // Define the character constant
   let character = characters[i];
    
    // Print "My name is ____"
     console.log(`My name is ${character.name}`);
    
    // Print "I am ____ years old"
    console.log(`I am ${character.age} years old`);
    
  }

/////////////////////================================================================

  const characters = [
    {name: "Ken the Ninja", age: 14},
    {name: "Master Wooly", age: 1000},
    {name: "Ben the Baby Ninja", age: 5},
    {name: "Birdie"}
  ];
  
  for (let i = 0; i < characters.length; i++) {
    console.log("--------------------");
    
    const character = characters[i];
    
    console.log(`My name is ${character.name}`);
    
    // Add a conditional statement below
    if(character.age === undefined){
      console.log("My age is a secret!");
    }else{
      console.log(`I am ${character.age} years old`);
    }
      
    }


    ////////================================

    const cafe = {
        name: "Progate Cafe",
        businessHours: { 
          opening: "10:00(AM)",
          closing: "8:00(PM)"
        },
        // Add a menus property and assign an array to it
        menus:["Coffee","Tea","Chocolate Cake"]
        
      };
      
      console.log(`Name: ${cafe.name}`);
      console.log(`Hours: From ${cafe.businessHours.opening} to ${cafe.businessHours.closing}`);
      console.log(`----------------------------`);
      console.log("Menu Recommendations");
      
      // Use a for loop to print the contents of the menu array
      for(let i =0; i<cafe.menus.length; i++){
        console.log(cafe.menus[i]);
      }


      ///////////////================================================================

      const check = (number) => {
        // Check whether or not number is a multiple of 3 and return the result
        return number % 3 ===0;
        
      };
      
      // Call the check function in the condition of the if statement
      if ( check(123) ) { /// CALLS FUNCTION IN CONDITION
        console.log("Multiple of 3");
      } else {
        console.log("Not a multiple of 3");
      }



      ////////================================= 

      const numbers = [1, 3, 5, 7, 9];

// Find the multiples of 3 from the numbers array by using the find method, and assign them to the foundNumber constant
const foundNumber = numbers.find( (number) => {
  return number % 3 ===0;
}
  );

// Print foundNumber
console.log(foundNumber);


const characters = [
  {id: 1, name: "Ken the Ninja", age: 6},
  {id: 2, name: "Ben the Baby Ninja", age: 2},
  {id: 3, name: "Master Wooly", age: 100},
  {id: 4, name: "Birdie", age: 21}
];

// Find the object in which the id is 3, from the characters constant, and assign it to the foundCharacter constant
const  foundCharacter =  characters.find( (character) => {
  return character.id === 3;
}
  );

// Print foundCharacter
console.log(foundCharacter);


/////////////===============================

const numbers = [1, 2, 3, 4];

// Get all even numbers from numbers with the filter method, and assign them to the evenNumbers constant
const evenNumbers = numbers.filter( (number) => {
  return number % 2 === 0;
}
  );

// Print the value of evenNumbers
console.log(evenNumbers);


const characters = [
  {id: 1, name:"Ken the Ninja", age: 14},
  {id: 2, name:"Ben the Baby Ninja", age: 5},
  {id: 3, name:"Master Wooly", age: 100}
];

// Get characters younger than 20, and assign them to the underTwenty constant
const underTwenty = characters.filter( (character) => {
  return character.age < 20;
}
  );

// Print the value of underTwenty
console.log(underTwenty);




////////===============================

const numbers = [1, 2, 3, 4];

// Create a new array in the numbers constant by using the map method, and assign it to the doubledNumbers constant
const doubledNumbers = numbers.map( (number) => {
  return number * 2;
}
  );

// Print the doubledNumbers constant
console.log(doubledNumbers);


const names = [
  {firstName: "Kate", lastName: "Jones"},
	{firstName: "John", lastName: "Smith"},
	{firstName: "Dennis", lastName: "Williams"},
	{firstName: "David", lastName: "Black"}
];

// Create a new array in the names constant by using the map method, and assign it to the fullNames constant
const fullNames = names.map( (name) => {
  return name.firstName + " " + name.lastName;
}
  );

// Print the fullNames constant
console.log(fullNames);





/////////////=============================== CALL BACK FUNCTIONS =============================

const printKen = () => {
    console.log("Ken the Ninja");
  };
  
  const call = (callback) => {
    console.log("Calling the callback function.");
    callback();
  };
  
  call(printKen);


  /////////////=============================== PASSING ARGUMENT IN CALL BACK FUNCTIONS =============================

  const call = (callback) => {
    callback("Ken the Ninja", 14);
  };
  
  // Add two parameters to the callback function inside this function call
  call((name, age) => {
    console.log(`${name} is ${age} years old.`);
  });