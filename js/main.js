
let turncount = 0

let boardState = [
    '','','',
    '','','',
    '','','',
];

let winConditions = [

///HORIZONTAL///
    [0,1,2],
    [3,4,5],
    [6,7,8],

///VERTICAL///
    [0,3,6],
    [1,4,7],
    [2,5,8],

///DIAGONAL///
    [0,4,8],
    [2,4,6]

]

/*✅*/ function checkWin() { /////working, but how???????????????????????????
for (let i = 0; i < winConditions.length; i++){
    const line = winConditions[i];

    console.log('LINE: ', line);
    console.log(line[0], line[1], line[2]);
    console.log(`BOARDSTATE[${line[0]}]: `, boardState[line[0]]);
    console.log(`BOARDSTATE[${line[1]}]: `, boardState[line[1]]);
    console.log(`BOARDSTATE[${line[2]}]: `, boardState[line[2]]);

    if (
        boardState[line[0]] 
        && boardState[line[0]] == boardState[line[1]] 
        && boardState[line[1]] == boardState[line[2]]) 
    {console.log('WIN');
        if (turncount %2 == 0) 
        {alert("O wins!")} 
        else {alert("X wins!")
        //✨FRONT END:　update page to have restart button
    }
    } else if (boardState[line[0]] 
            && boardState[line[0]] !== boardState[line[1]] 
            && boardState[line[1]] !== boardState[line[2]])
        {console.log("LOSE")
    } else {
        if (turncount == 9) {
        console.log("DRAW");
            alert("It's a tie! aka a cat game");
            //✨FRONT END: update page to cat game/restart button
        }
        }
    
  
}
}

/*✅*/ function resetBoard() {
    boardState = [
        '','','',
        '','','',
        '','','',
    ];

    console.log(boardState);
}

resetBoard();

/*✅*/ function changeTurn() {
    // Detect current turn count, add one
    turncount++;
    console.log(turncount);

                    ///✨FRONT-END: change playername display 
                    //if (turncount % 2 == 0) {change H1 to "It's O's turn}
                    //      else {change H1 to "It's X's turn"}

    if (turncount >= 5) {
        checkWin();
    }
}

/*✅*/ function makeMove(location, letter) {
    if (boardState[location] === '')
    {boardState.splice(location, 1, letter);
    console.log(boardState);
    changeTurn();}
    else {console.log("stop that")
    }; 
}


