
//Writing function and also writing optional parameter as track and we will be using if condition because sometimes the optional parameter track will add to the album and sometimes not
function make_album (artist :string, title :string, tracks?:number) {

    const album :{artist :string,title :string,tracks?:number} ={
        artist: artist,
        title : title
    }
    if(tracks !== undefined){
        album.tracks = tracks;
    }
    return album
}
//calling the function
const album1 =make_album('Artist 1','Album Title 1');
console.log(album1);

const album2 =make_album('Artist 2','Album Title 2');
console.log(album2);

const album3 =make_album('Artist 3','Album Title 3',12);
console.log(album3);