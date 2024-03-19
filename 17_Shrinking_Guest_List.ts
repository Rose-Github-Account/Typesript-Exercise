
let Guest_List :string[] =['Imran Khan','Nawaz Sharif','Asif Ali Zardari'] ;
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear.Mr ' + Guest_List[i] + ',\n\nIt is our pleaseure to invite you in our party.\n\nThank You!\n\n')
// }

let absent_Guest :string = 'Imran Khan' ;
let new_Guest :string = 'Kamran Tessori' ;
Guest_List[0] = new_Guest ;

// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear.Mr ' + Guest_List[i] + ',\n\nIt is our pleaseure to invite you in our party.\n\nThank You!\n\n')
// }

console.log(`${absent_Guest} is not coming to the party.`);
console.log('Good news! We find Big Table so we are inviting 3 more guests.');

// array main 3 guest add kiye hain
Guest_List.unshift('Sir Zia Khan') ;
Guest_List.splice(2 , 0 , 'Maryan Nawaz');
Guest_List.push('Bilawal Bhutto Zardari');

// yahan per maine 6 array kai guest ko print karwaya hain
for(let i=0; i<Guest_List.length; i++){
    console.log('Dear.Mr ' + Guest_List[i] + ',\n\nIt is our pleaseure to invite you in our party.\n\nThank You!\n\n')
}

// message sorry guest for no inviting
console.log('\nSorry we can not arrange big table,only two people will be invited.');

// yahan per maine guest remove kiye hain
while(Guest_List.length > 2){
    let remove_Guest = Guest_List.pop();
    console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner.`);
}

// Hamare bache howe 2 invited guest
for(let i=0; i<Guest_List.length; i++){
    console.log('Dear.Mr ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank You!\n\n')
}


// maine sare guest array sai remove kerdeye hain
Guest_List.splice(0 , 2);
console.log(Guest_List);