
//calling the function
function make_shirt(size:string ='Large', text:string ='I love Typescript.'){

    console.log(`Creating a ${size} shirt with the message: ${text}`);
}

//putting the arguements which are not being put are set by default
make_shirt();

make_shirt('Medium');

make_shirt('small','I love Python.');