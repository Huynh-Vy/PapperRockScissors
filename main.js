const getUserChoice = (userInput = '') => {
    userInput = userInput.toLowerCase();
  
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      console.log('Error!');
    }
  } 
  
  const getComputerChoice = () => {
    let number = Math.floor(Math.random() * 3);
  
    switch(number) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'The game was tie';
    } else {
      if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
          return 'The computer won';
        } else {
          return 'The user won';
        }
        } else if (userChoice === 'paper') {
          if (computerChoice === 'scissors' || computerChoice === 'rock') {
            return 'The computer won';
          }
          } else if (userChoice === 'scissors') {
            if (computerChoice === 'rock' || computerChoice === 'paper') {
               return 'The user won';
            }
          }
        }
      }
  
  const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
  
    console.log(`User Choice :${userChoice}`);
    console.log(`Computer Choice : ${computerChoice}`);
  
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();
  
    
  
  
  
  
  