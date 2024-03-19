

//storing the magicians name in array
let magician :string[] =['Harry potter','Hermione Granger','Ron Weasley','Albus Dumbledore'];

function make_great ( magicianArry:string[] ){
    for(let i=0;i<magicianArry.length;i++){
      
        magician[i]= 'The Great ' + magicianArry[i]

    }
}

function show_magicians(magicians :string[]){
    magicians.forEach(element => {
        console.log(element);
    });
}

make_great(magician)
show_magicians(magician);