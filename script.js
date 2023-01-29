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
        console.log(`It's a tie! You both chose ${comp}.`);
        return 1;
    }
    else if ((comp==="rock"&&player==="paper")||(comp==="paper"&&player==="scissors")||(comp==="scissors"&&player==="rock"))
    {
        console.log(`Player wins! PLayer picked ${player} and computer chose ${comp}.`);
        return 2;
    }
    else if ((player==="rock"&&comp==="paper")||(player==="paper"&&comp==="scissors")||(player==="scissors"&&comp==="rock"))
    {
        console.log(`Computer wins! Computer picked ${comp} and player picked ${player}.`);
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
        console.log("This round results in a tie!");
    }
    else if (computerScore>userScore)
    {
        console.log(`The computer won with a score of ${computerScore}, and player only scored ${userScore}.`);
    }
    else 
    {
        console.log(`The player won with a score of ${userScore}, and computer only scored ${computerScore}.`)
    }
}














document.addEventListener("DOMContentLoaded", function(event) 
{ 
    let btn=document.getElementById('RPSbutton');
    btn.addEventListener('click', playOnePlayerFullGame);
});