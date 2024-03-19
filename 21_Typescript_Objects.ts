
//Write a program that creates Objects containing these items.

//Datatype of person object
interface person{
    age : number,
    name : string,
    nationality : string,
    Student : Boolean
}
//person object
let person : person ={
age : 26 ,
name : 'Taha' , 
nationality : 'Pakistan' ,
Student : true
}
//print person
console.log(person);


//Datetype of car object
//car object
interface car {
    maker : string,
    color : string,
    automatic : Boolean
}
let car : car = {
    maker :'toyota',
    color: 'Black',
    automatic: true
}

//print car
console.log(car);