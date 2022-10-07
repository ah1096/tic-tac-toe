const app = document.getElementById('app');


/*✅ */function createElement (parent, idX, classX, tag, text, type, style, source, placeholderText) {
    let element = document.createElement(tag);
    console.log(element);
   element.setAttribute('id', idX);
   element.className = classX;
   element.innerText = text;
   element.setAttribute('type', type);
    element.setAttribute('style', style);
    element.setAttribute('src', source);
    element.setAttribute('placeholder', placeholderText);
   parent.appendChild(element);
   console.log(element);
}

/*✅*/function drawPage () {
    createElement(app, 'bigMama', 'container-fluid text-center my-4 vh-80', 'div', null, null, null, null, null);
       createElement(bigMama, 'headertext', null, 'h1', 'TIC TAC TOE', null, null, null, null);
        
       createElement(bigMama, 'bottomText', null, 'h2', 'press to play', null, null, null, null);

        createElement(bigMama, 'button', 'border rounded-3', 'button', 'start', null, null, null, null);

       }
       
drawPage();
       
function whoseTurn() { /*?????????????????????????????????????*/
    if (turncount % 2 == 0) {
        bottomText2.innerText = "it's X's turn";
    } else {
        bottomText2.innerText = "it's O's turn"
    }
}

/*✅*/function drawBoard() {

    createElement(bigMama, 'firstRow', 'row', 'div', null, null, null,null,null);
           createElement(firstRow, 'tile0', 'col ratio ratio-1x1 border-top-0 border-start-0', 'div', 'x', null, null, null, null, null);
           createElement(firstRow, 'tile1', 'col ratio ratio-1x1 border-top-0', 'div', 'x', null, null, null, null, null);
            createElement(firstRow, 'tile2', 'col ratio ratio-1x1 border-top-0 border-end-0', 'div', 'x', null, null, null, null, null);

       createElement(bigMama, 'secondRow', 'row', 'div', null, null, null,null,null);
           createElement(secondRow, 'tile3', 'col ratio ratio-1x1 border-start-0', 'div', 'x', null, null, null, null, null);
            createElement(secondRow, 'tile4', 'col ratio ratio-1x1', 'div', 'x', null, null, null, null, null);
           createElement(secondRow, 'tile5', 'col ratio ratio-1x1 border-end-0', 'div', 'x', null, null, null, null, null);

       createElement(bigMama, 'thirdRow', 'row', 'div', null, null, null,null,null);
           createElement(thirdRow, 'tile6', 'col ratio ratio-1x1 border-start-0 border-bottom-0', 'div', 'x', null, null, null, null, null);
           createElement(thirdRow, 'tile7', 'col ratio ratio-1x1 border-bottom-0', 'div', 'x', null, null, null, null, null);
           createElement(thirdRow, 'tile8', 'col ratio ratio-1x1 border-end-0 border-bottom-0', 'div', 'x', null, null, null, null, null);

        //get rid of weirdly spaced button and h2 vvv

           const element = document.getElementById('button');
           element.remove();

           const element2 = document.getElementById('bottomText');
           element2.remove();

    createElement(bigMama, 'bottomText2', null, 'h2', 'press to play', null, null, null, null);

    whoseTurn();
}

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
        {alert("O wins!");} 
        else {alert("X wins!");
        //✨FRONT END:　update page to have restart button
    }
    } else (boardState[line[0]] 
            && boardState[line[0]] !== boardState[line[1]] 
            && boardState[line[1]] !== boardState[line[2]])
        {console.log("LOSE")
    } }
   
    if (turncount == 9) {
    console.log("DRAW");
    alert("It's a tie!");
    //✨FRONT END: update page to have restart button
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
    };
    

}

/*✅*/ function makeMove(location, letter) {
    if (boardState[location] === '')
    {boardState.splice(location, 1, letter);
    console.log(boardState);
    changeTurn();}
    else {console.log("stop that")
    }; 

    whoseTurn();
}






button.addEventListener('click', drawBoard);


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



