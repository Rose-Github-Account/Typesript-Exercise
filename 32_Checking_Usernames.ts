
//Make a list of five or more usernames called current_users.
let current_users :string[] = ['TaHa','DaNiyal','SalMan','Hamzah','John'];

//Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users :string[] = ['Bilal','TaHa','Dawood','Jameel','Hamzah',]

new_users.forEach(newUsername => {
    let lowerCase :string = newUsername.toLowerCase();

    if(current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)){
        console.log(`The username ${newUsername} is not available please write a different username`);
    }
    else{
        console.log(`username ${newUsername}is available`)
    }
})