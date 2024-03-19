

let Guest_List :string[] =['Imran Khan','Nawaz Sharif','Asif Ali Zardari'] ;

// for(let i=0; i<Guest_List.length; i++){

//     console.log('Dear.Mr ' + Guest_List[i] + ',\n\nIt is our pleaseure to invite you in our party.\n\nThank You!\n\n')

// }

let absent_Guest :string = 'Imran Khan' ;

let new_Guest :string = 'Kamran Tessori' ;

Guest_List[0] = new_Guest ;

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear.Mr ' + Guest_List[i] + ',\n\nIt is our pleaseure to invite you in our party.\n\nThank You!\n\n')

}

console.log(`${absent_Guest} is not coming to the party.`);

console.log('Good news! We find Big Table so we are inviting 3 more guests.');


Guest_List.unshift('Sir Zia Khan') ;
Guest_List.splice(2 , 0 , 'Maryan Nawaz');
Guest_List.push('Bilawal Bhutto Zardari');

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear.Mr ' + Guest_List[i] + ',\n\nIt is our pleaseure to invite you in our party.\n\nThank You!\n\n')

}