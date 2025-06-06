ec# Random Guessing Game Flowchart

```mermaid
flowchart TD
    Start([Start Game])
    Generate[Generate a random number]
    AskGuess[Ask user to guess a number]
    Validate{Is the input a number?}
    Invalid[Show an error message and prompt again]
    Compare{Is guess correct?}
    TooLow[Output: Too Low]
    TooHigh[Output: Too High]
    Correct[Output: Correct!]
    End([End Game])

    Start --> Generate --> AskGuess --> Validate
    Validate -- No --> Invalid --> AskGuess
    Validate -- Yes --> Compare
    Compare -- Too Low --> TooLow --> AskGuess
    Compare -- Too High --> TooHigh --> AskGuess
    Compare -- Correct --> Correct --> End
```
Description
Start Game – The program executes.
Generate a Random Number – A number is chosen within a set range (for example, 1-100).
Ask Guess – The program asks the user to guess the number.
Validate Input – It checks if the input is a number.
If the input is invalid (anything that is not a number 1-100), an error message is shown and the prompt repeats.
Compare Guess – If valid, the guess is compared with the random number:
If too low: display "Too Low" and prompt again.
If too high: display "Too High" and prompt again.
If correct: display "Correct!" and end the game.
End Game – The game ends after a correct guess.
