//setting initial variables
var validKeys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var lives = 10;
var incorrectGuesses = [];
var wordChoices = ["batman", "superman", "spiderman"];
var currentWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
var hyphens = [];

//creating hyphens as filler for unguesses letters
for (var i = 0; i<currentWord.length; i++){
    hyphens[i] = "_" ;
};
    
var answer = hyphens.join(" ")
document.querySelector("#answer").innerHTML = answer

//main function
document.onkeyup = function(event) {
    var userGuess = event.key;

    //limiting user guess to alphabetic characters
    if(validKeys.indexOf(userGuess) !== -1){ 
       
        for (var i = 0; i < currentWord.length; i++) {
            if (currentWord[i] === userGuess){
                hyphens[i] = userGuess;

            }
        };

        //if user guesses incorrectly, this counts down remaining guesses and pushes incorrect guess to the guesses array
        //problem here***
        
        if (currentWord.indexOf(userGuess) === -1) {
            lives--;
            incorrectGuesses.push(userGuess);
        };

        //stops user from guessing the same thing again
        if (incorrectGuesses.indexOf(userGuess) !== -1) {
            return;
        };

        //had to add this line of code in later so that the answer would update as the letter is selected.
        answer = hyphens.join (" ");

        //sets up win scenario
        //vvv used 'hyphens.join("")' instead of 'answer' so that the space in hyphens wouldn't affect the equals outcome vvv
        if(currentWord === hyphens.join("")) {
            currentWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
            wins ++;
            lives = 10;
            incorrectGuesses.length = 0;
            hyphens === 0;
            for (var i = 0; i<currentWord.length; i++){
                hyphens[i] = "_" ;
            };
        };
    
        //sets up loss scenario
        if(lives === 0) {
            // currentWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];  <== problem here
            incorrectGuesses.length = 0;
            lives = 10;
        };

    };

    //rewrites html on page
    var html = 
    "<h1>Press Any Key to Get Started!</h1>" +

    "<h2>Wins: " + wins + "</h2>" +

    "<h2>Current Word</h2>" +

    answer +

    "<h2>Number of Guesses Remaining: " + lives + "</h2>" +

    "<h2>Letters Already Used: " + incorrectGuesses + "</h2>"

    document.querySelector("#text").innerHTML = html;

};


//I was having a lot of issues with limiting character sets down. Which is why I created a 'validKey' array.
//I am going to keep trying, but if you are reading this than I have failed miserably :(