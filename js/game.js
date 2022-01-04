// <!--
//     Created on  Nov 17 2020
//     @Author Ansari Mohammed Faisal - #000812671
// -->
window.addEventListener("load", function () {
    //Reset button method to reload the page
    var resetButton = document.getElementById("resetbutton");
    resetButton.addEventListener("click", function () {
        location.reload();
    })
    //Play Again button is hidden beforeform submission
    var playAgainButton = document.getElementById("playagain");
    playAgainButton.style.visibility = "hidden";
    var scoreboard = document.getElementById("scoreboard");
    scoreboard.style.visibility = "hidden";

    //Form submission
    document.forms.mform.addEventListener("submit", function (event) {
        event.preventDefault();
        //player score
        let score = 0;

        //computer score
        let computerScore = 0;

        //Get computer's choice
        function computerChoice(listChoice) {
            return listOfChoices[Math.floor(Math.random() * 3)];
        }

        //players choice string
        let playerchoice = "";

        //list of the 3 hand choices
        let listOfChoices = ["Rock", "Paper", "Scissors"];

        //change visibility of play again button to visible
        playAgainButton.style.visibility = "visible";
        scoreboard.style.visibility = "visible";


        //getting data from the form
        let name = document.forms.mform.name.value;
        let age = document.forms.mform.age.value;
        let color = document.forms.mform.color.value;

        //Capitalize player name
        let playername = document.getElementById("player");
        playername.style.textTransform = "Capitalize";

        //Set Player name and change the color to the favourite color
        let text = document.getElementById("player")
        text.innerHTML = name;
        text.style.color = color;

        //Add the player score
        let scoreText = document.getElementById("pscore");
        scoreText.innerHTML = 0;

        //Add the computers score
        let compScoreText = document.getElementById("cscore");
        compScoreText.innerHTML = 0;
        

        //Change the background of reset button  when mouse hovers over it
        resetButton.addEventListener("mouseover", function (event) {
            resetButton.style.backgroundColor = color;
            setTimeout(function() {
                resetButton.style.backgroundColor = "";
              }, 500);
        },false)

        //Set the color of the title to the favourite color
        let title = document.getElementById("title");
        title.style.color = color;

        

        //Start Play
        Play(color);
        //Clear the form window
        Clearform(event);

        //The play function to start the game
        function Play(color) {


        //Set Attributes before each event listner for respective choice
        let rock = document.getElementById("rock");
        rock.src = "images/rock.png";
        //Rock choice event listener
        rock.addEventListener("click", function () {
                //hide other elements except for the chosen one
                paper.style.visibility = "hidden";
                scissors.style.visibility = "hidden";
                let compchoice = computerChoice(listOfChoices);
                
                //If stement to decide winner
                let result = document.getElementById("result")
                //if computer chooses Rock
                if ( compchoice== "Rock") {
                    result.innerHTML = "DRAW" + "<br>" + "Computer picked ROCK";
                    return;
                //if computer chooses Paper
                } else if (compchoice == "Paper") {
                    result.innerHTML = "YOU LOSE" + "<br>" + "Computer picked PAPER";
                    computerScore ++;
                    compScoreText.innerHTML = computerScore.toString();
                    return
                //if computer chooses Scissors    
                } else if (compchoice == "Scissors") {
                    result.innerHTML = "YOU WIN!" + "<br>" + "Computer picked SCISSORS" ;
                    score ++;
                    scoreText.innerHTML = score.toString();
                    return;
                }

            })

            let paper = document.getElementById("paper");
            paper.src = "images/paper.png";
           
            paper.addEventListener("click", function () {
                rock.style.visibility = "hidden";
                scissors.style.visibility = "hidden";
                let compchoice = computerChoice(listOfChoices);


                let result = document.getElementById("result")
                if (compchoice == "Paper") {
                    result.innerHTML = "DRAW" + "<br>" + "Computer picked PAPER" ;
                    return;
                } else if (compchoice == "Scissors") {
                    result.innerHTML = "YOU LOSE" + "<br>" + "Computer picked SCISSORS";
                    computerScore ++;
                    compScoreText.innerHTML = computerScore.toString();
                    return;
                } else if (compchoice == "Rock") {
                    result.innerHTML = "YOU WIN!" + "<br>" + "Computer picked ROCK";
                    score ++;
                    scoreText.innerHTML = score.toString();
                    return;
                }

            })


            let scissors = document.getElementById("scissors");
            scissors.src = "images/scissors.png";
            scissors.addEventListener("click", function () {
                rock.style.visibility = "hidden";
                paper.style.visibility = "hidden";
                let compchoice = computerChoice(listOfChoices);


                let result = document.getElementById("result")
                //if computer chooses Scissors 
                if (compchoice === "Scissors") {
                    result.innerHTML = "DRAW" + "<br>" + "Computer picked SCISSORS";
                    return;
                } else if (compchoice === "Rock") {
                    result.innerHTML = "YOU LOSE" + "<br>" + "Computer picked ROCK" ;
                    computerScore ++;
                    compScoreText.innerHTML = computerScore.toString();
                    return;
                } else if (compchoice === "Paper") {
                    result.innerHTML = "YOU WIN!" + "<br>" + "Computer picked PAPER";
                    score ++;
                    scoreText.innerHTML = score.toString();
                    return;
                }
                

            })

            //Play agin button
            playAgainButton.addEventListener("click", function () {
                rock.style.visibility = "visible";
                paper.style.visibility = "visible";
                scissors.style.visibility = "visible";
                Play();
            })

        }
        //funtion to remove the form after submission  
        function Clearform(event) {
            event.target.style.display = "none";
        }

    })

})