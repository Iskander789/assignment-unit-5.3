console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(collection, title, artist, yearPublished){
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };
  collection.push(album);
  return album;
}

console.log("Adding albums to my collection.");
console.log(addToCollection(myCollection, 'Laurel Hell', 'Mitski', 2022));
console.log(addToCollection(myCollection, 'Titanic Rising', 'Weyes Blood', 2019));
console.log(addToCollection(myCollection, 'Youth Novels', 'Lykke Li', 2008));
console.log(addToCollection(myCollection, 'Moth', 'Chairlift', 2016));
console.log(addToCollection(myCollection, 'Blouse', 'Blouse', 2011));
console.log(addToCollection(myCollection, 'Pet Sounds', 'The Beach Boys', 1966));
console.log("My collection:", myCollection);

function showCollection(collection){
  for(let i =0; i<collection.length; i++){
    console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`);
  }
}

console.log("Showing my collection:");
showCollection(myCollection);

function findByArtist(collection, artistToFind){
  let results = [];
  for(let i=0; i<collection.length; i++){
    if(collection[i].artist == artistToFind){
      results.push(collection[i]);
    }
  }
  return results;
}

console.log("Searching for albums by Mitski, expect 1 result:", findByArtist(myCollection, 'Mitski'));
console.log("Searching for albums by Weyes Blood, expect 1 result:", findByArtist(myCollection, 'Weyes Blood'));
console.log("Searching for albums by Lykke Li, expect 1 result:", findByArtist(myCollection, 'Lykke Li'));
console.log("Searching for albums by Chairlift, expect 1 result:", findByArtist(myCollection, 'Chairlift'));
console.log("Searching for albums by Pixies, expect 0 results:", findByArtist(myCollection, 'Pixies'));




// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
