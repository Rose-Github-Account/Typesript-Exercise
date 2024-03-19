let personName :string ='';

personName = prompt(`What is your name?`) || '';

let lowercase :String =personName.toLowerCase();
let uppercase :String =personName.toUpperCase();
let titlecase :String =personName;personName.split(` `).map(word => word.charAt(0).toUpperCase() + word.slice(1).
toLowerCase()).join(``);

if(personName !== null && personName!== ''){
    alert(`Hello ${personName}, Here are your name in:
LowerCase: ${lowercase}
UpperCase: ${uppercase}
TitleCase: ${titlecase}`)
}
else{
    alert(`Please fill your name !`)
}
