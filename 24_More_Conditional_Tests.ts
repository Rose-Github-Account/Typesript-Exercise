

//Equality and Inequality test
console.log("Equality test with strings: ", "Apple" === "Apple");
//Equality and Inequality test
console.log("Equality test with strings: ", ("Apple" as string) != "orange");

//Tests using lowercase function
console.log("Lower Case function test: ", "HELLO".toLowerCase() ==="hello");

//Numercial tests involving equality and inequality
console.log("Equality test with numbers: ", 26 === 26);
//Numercial tests involving equality and inequality
console.log("Inequality test with numbers: ", (26 as number)!= 35);

//Greater than test
console.log("Greater than test: ", 10>5);
//less than test
console.log("Less than test: ", 5<10);

//Greater than or equal to
console.log("Greater than and equal to test: ", 10>=10);
//Less than or equal to 
console.log("Less than or equal to test: ", 5<=10);

//Tests using "and" operator
console.log("And Operator test: ", 5===5 && 10 > 5);
//Tests using "or" operator
console.log("Or Operator test: ", 5===5 || false );

//Test whether an item is in a array
const fruits :string[] =["Naspati","Banana","Amrood"];
console.log('Test "Naspati" in the array: ', fruits.includes("Naspati"));

//Test whether an item is not in a array
console.log('Testing "Apple" is not in array: ', !fruits.includes("Apple"));