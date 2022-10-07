# tic-tac-toe
Awesome Inc tic tac toe game project

To Do List:

1. dynamically render all HTML with javascript
2. add click handler to change inner text of tiles to corresponding letter based on turncount
3. change h1 to winner/tie text
4. show/hide start and reset buttons
    - create function to reset page upon button click


add randomize function?





////////ADDED POST-CODEFREEZE TO SAVE TIME DURING DEMO////

function xWinGame(){
    makeMove(0, 'X');
    makeMove(3, 'O');
    makeMove(1, 'X');
    makeMove(7, 'O');
    makeMove(2, 'X');
    makeMove(4, 'O');
    makeMove(5, 'X');
    makeMove(6, 'O');
    makeMove(8, 'X');
}

function oWinGame(){
    makeMove(8, 'X');
    makeMove(0, 'O');
    makeMove(3, 'X');
    makeMove(1, 'O');
    makeMove(7, 'X');
    makeMove(2, 'O');
    makeMove(4, 'X');
    makeMove(5, 'O');
    makeMove(6, 'X');
}

function catGame(){
    makeMove(0, 'X');
    makeMove(1, 'O');
    makeMove(2, 'X');
    makeMove(3, 'O');
    makeMove(5, 'X');
    makeMove(4, 'O');
    makeMove(6, 'X');
    makeMove(8, 'O');
    makeMove(7, 'X');
}
