

//storing the magicians name in array
let magician :string[] =['Harry potter','Hermione Granger','Ron Weasley','Albus Dumbledore'];
//writing function
function show_magicians(magicians :string[]){
    magicians.forEach(element => {
        console.log(element);
    });
}
//calling the function and putting the expected arguement
show_magicians(magician);