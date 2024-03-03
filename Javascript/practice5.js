const favmovie="avatar";
let guess =prompt("guess your fav movie");
while((guess!==favmovie) && (guess!=="quit")){
    guess =prompt("Wrong guess.Plz try again");
}
if(guess==favmovie){
    console.log("congrats");
}
else{
    console.log("Quit");
}