
let btn=document.getElementById('RPSbutton');
btn.addEventListener('click', determineNumPlayers);
let rpsresult=document.getElementById("RPSresult");


function input()
{
    const input=prompt("Rock, paper or scissors?");
    return input;
}

function computerPicker()
{
    const rando=Math.random();
    if (0>rando>(1/3))
    {
        return "rock";
    }
    else if ((1/3)>rando>=(2/3))
    {
        return "paper";
    }
    else 
    {
        return "scissors";
    }
}

function playOnePlayerRound()
{
    let comp=computerPicker();
    let player=input();

    if (comp===player)
    {
        window.alert(`It's a tie! You both chose ${comp}. `);
        return 1;
    }
    else if ((comp==="rock"&&player==="paper")||(comp==="paper"&&player==="scissors")||(comp==="scissors"&&player==="rock"))
    {
        window.alert(`Player wins! Player picked ${player} and computer chose ${comp}.`);
        return 2;
    }
    else if ((player==="rock"&&comp==="paper")||(player==="paper"&&comp==="scissors")||(player==="scissors"&&comp==="rock"))
    {
        window.alert(`Computer wins! Computer picked ${comp} and player picked ${player}.`);
        return 3;  
    }
}

function playOnePlayerFullGame()
{
    let userScore=0;
    let computerScore=0;

    for (var i=0;i<5;i++)
    {
    const woohoo=playOnePlayerRound();
    if (woohoo===1)
    {
            console.log("");
    }
    else if (woohoo===2)
    {
            userScore++;
    }
    else if (woohoo===3)
    {
            computerScore++;
    }
    else
    {
            console.log("Something went wrong");
    }
    }

    if (computerScore===userScore)
    {
        rpsresult.innerText="This round results in a tie!";
    }
    else if (computerScore>userScore)
    {
        rpsresult.innerText=`The computer won with a score of ${computerScore}, and player scored ${userScore}.`;
    }
    else 
    {
        rpsresult.innerText=`The player won with a score of ${userScore}, and computer scored ${computerScore}.`;
    }
}

function playTwoPlayerRound()
{
    window.alert("Player 1's turn.");
    let player1=input();
    window.alert("Player 2's turn.");
    let player2=input();

    if (player2===player1)
    {
        window.alert(`It's a tie! You both chose ${player1}.`);
        return 1;
    }
    else if ((player1==="rock"&&player2==="paper")||(player1==="paper"&&player2==="scissors")||(player1==="scissors"&&player2==="rock"))
    {
        window.alert(`Player 2 wins! Player 2 picked ${player2} and player 1 chose ${player1}.`);
        return 2;
    }
    else if ((player2==="rock"&&player1==="paper")||(player2==="paper"&&player1==="scissors")||(player2==="scissors"&&player1==="rock"))
    {
        window.alert(`Player 1 wins! Player 1 picked ${player1} and player 2 picked ${player2}.`);
        return 3;  
    }
}

function playTwoPlayerFullGame()
{
    let player1Score=0;
    let player2Score=0;

    for (var i=0;i<5;i++)
    {
    const woohoo=playTwoPlayerRound();
    if (woohoo===1)
    {
            console.log("");
    }
    else if (woohoo===2)
    {
            player2Score++;
    }
    else if (woohoo===3)
    {
            player1Score++;
    }
    else
    {
            console.log("Something went wrong");
    }
    }

    if (player1Score===player2Score)
    {
        rpsresult.innerText="This round results in a tie!";
    }
    else if (player1Score>player2Score)
    {
        rpsresult.innerText=`Player 1 wins with a score of ${player1Score}, and player 2 scored ${player2Score}.`;
    }
    else 
    {
        rpsresult.innerText=`The player 2 won with a score of ${player2Score}, and player 1 scored ${player1Score}.`;
    }
}


function determineNumPlayers()
{
    const something = prompt("Do you want to play against someone else? y/n");
    if (something ==="y")
    {
        playTwoPlayerFullGame();
    }
    else if (something==="n")
    {
        playOnePlayerFullGame();
    }
}




let ticTacToeArray=["","","","","","","","","",];
let r1c1=document.querySelector("tr.row-one td"); 




