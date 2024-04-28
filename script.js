

function Start(){

    let userInput= document.getElementById("userInput").value.toLowerCase();
    const acceptedOptions=["rock", "paper", "scissors"];


    if(!acceptedOptions.includes(userInput)){
        alert("Invalid input, please input rock,paper,or scissors");
        return;
    }

    let computerResult = acceptedOptions[Math.floor(Math.random()*3)];
    document.getElementById("computerResult").textContent= `Computers choice: ${computerResult}`;

   

    let result= (userInput === "rock" && computerResult=== "scissors") ? "You Win" : 
    (userInput === "paper" && computerResult=== "rock") ? "You Win" : 
    (userInput === "scissors" && computerResult=== "paper") ? "You Win":
    (userInput===computerResult) ? "It's a tie": "You lost"
    
  
    document.getElementById("result").textContent=`${result}`;

}


