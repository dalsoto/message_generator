console.log("Welcome to random drake lyrics generator!");

const lyrics = [
    "Sweatpants, hair tied, chillin with no make-up on / That's when you're the prettiest", 
    "Last name Ever, first name Greatest, like a sprained ankle boy I ain't nothing to play with", 
    "Took a while, got the jokers out of the deck now I'm holdin' all the cards and n-ggas wanna play chess now", 
    "Thinkin' they lions and tigers and bears I go huntin', put heads on my fireplace", 
    "They need me more that they hate me so they never take shots I got everybody on safety", 
    "How much time is this n-gga spending on an intro? I'm starting to feel like Guy Pearce in Momento I just set the bar and n-ggas fall under it like a limbo", 
    "I could load every gun with bullets that fire backwards, you probly wouldn't lose a single rapper", 
    "She broke up with him and deleted a post / She said she was vegan, she eatin' a goat", 
    "We ain't even gotta mention that, any n**** try and trouble you / He gon' find out that it's on sight like W-W-W", 
    "N****s talkin' 'bout when this gon' be repeated / What the f*ck bro? I'm one away from Michael / N****, beat it, n****, beat it", 
    "You my baby, so I gotta put you in the crib / Same neighborhood where Ashton Kutcher live / I'm just doin' what that punk should have did", 
    "Savage got a green card straight out of the consulate / Where I go, you go, brother, we Yugoslavian", 
    "Formal is the dress code, dawg, so many checks owed / I feel Czechoslovakian"
];
 var random = lyrics[Math.floor(Math.random()*lyrics.length)];

 //console.log(random, lyrics[random]);

const prompt = require("prompt-sync")();

const userInput = prompt("Enter g to generate a drake lyric:");

if (userInput === "g") {
    console.log(random, lyrics[random]);
} else {
    console.log("You did not enter g");
}