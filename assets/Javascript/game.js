var validKeys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var lives = 10;
var guesses = [];
var wordChoices = ["batman", "superman", "spiderman" ];
var currentWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
var hyphens = [];




for (var i = 0; i<currentWord.length; i++){
    hyphens[i] = "_" ;
};
    



document.onkeyup = function(event) {
    var userGuess = event.key;

    if(validKeys.indexOf(userGuess) !== -1){ 
      
        var letter = userGuess;
        for (var i = 0; i < currentWord.length; i++) {
            if (currentWord[i] === letter){
                hyphens[i] = letter;
            }
        }
        
        // if (userGuess === currentWord.charAt([0])){
        //     hyphens.splice(0, 1, userGuess)
        // }

        // else if (userGuess === currentWord.charAt([1])){
        //     hyphens.splice(1, 1, userGuess)
        // }
        
        // else if (userGuess === currentWord.charAt([2])){
        //     hyphens.splice(2, 1, userGuess)
        // }

        // else if (userGuess === currentWord.charAt([3])){
        //     hyphens.splice(3, 1, userGuess)
        // }

        // else if (userGuess === currentWord.charAt([4])){
        //     hyphens.splice(4, 1, userGuess)
        // }

        // else if (userGuess === currentWord.charAt([5])){
        //     hyphens.splice(5, 1, userGuess)
        // }

        // else if (userGuess === currentWord.charAt([6])){
        //     hyphens.splice(6, 1, userGuess)
        // }

        // else if (userGuess === currentWord.charAt([7])){
        //     hyphens.splice(7, 1, userGuess)
        // }

        // else if (userGuess === currentWord.charAt([8])){
        //     hyphens.splice(8, 1, userGuess)
        // }

        // else if (guesses.indexOf(userGuess) !== -1) {
        //     return;
        // }

        // else {
        //     lives--;
        //     guesses.push(userGuess);

        // }


        var answer = hyphens.join (" ");


        if(answer == currentWord) {
            currentWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
            wins ++;
            lives = 10;
            guesses.length = 0;
        }
    
        if(lives === 0) {
            guesses.length = 0;
            lives = 10;
            currentWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
        }





    };


    html = 
    "<h1>Press Any Key to Get Started!</h1>" +

    "<h2>Wins: " + wins + "</h2>" +

    "<h2>Current Word</h2>" +

    answer +

    "<h2>Number of Guesses Remaining: " + lives + "</h2>" +

    "<h2>Letters Already Used: " + guesses + "</h2>"

    document.querySelector("#text").innerHTML = html;
   
   
   

};

// function letter(){
//     var letter = userGuess;
//     for (var i = 0; i < currentWord.length; i++) {
//         if (currentWord[i] === letter){
//             hyphens[i] = letter;
//         }
//     }
//  }