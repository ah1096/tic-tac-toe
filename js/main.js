const app = document.getElementById('app');


///*✅ */function createElement (parent, idX, classX, tag, text, type, style, source, placeholderText) {
    //let element = document.createElement(tag);
    //console.log(element);
   // element.setAttribute('id', idX);
   // element.className = classX;
   // element.innerText = text;
   // element.setAttribute('type', type);
    //element.setAttribute('style', style);
    //element.setAttribute('src', source);
    //element.setAttribute('placeholder', placeholderText);
   // parent.appendChild(element);
   //console.log(element);
//}

///*🛑*/function drawPage () {
    //createElement(app, 'bigMama', 'container-fluid text-center my-4 vh-80', 'div', null, null, null, null, null);
       // createElement(bigMama, 'headertext', null, 'h1', 'TIC TAC TOE', null, null, null, null);
        
       // createElement(bigMama, 'firstRow', 'row', 'div', null, null, null,null,null);
           // createElement(firstRow, 'tile0', 'col ratio ratio-1x1 border-top-0 border-start-0', 'div', 'x', null, null, null, null, null);
           // createElement(tile0, 'tile1', 'col ratio ratio-1x1 border-top-0', 'div', 'x', null, null, null, null, null);
            //createElement(tile1, 'tile2', 'col ratio ratio-1x1 border-top-0 border-end-0', 'div', 'x', null, null, null, null, null);

       // createElement(tile2, 'secondRow', 'row', 'div', null, null, null,null,null);
           // createElement(secondRow, 'tile3', 'col ratio ratio-1x1 border-start-0', 'div', 'x', null, null, null, null, null);
            //createElement(tile3, 'tile4', 'col ratio ratio-1x1', 'div', 'x', null, null, null, null, null);
           // createElement(tile4, 'tile5', 'col ratio ratio-1x1 border-end-0', 'div', 'x', null, null, null, null, null);

       // createElement(tile4, 'thirdRow', 'row', 'div', null, null, null,null,null);
           // createElement(thirdRow, 'tile6', 'col ratio ratio-1x1 border-start-0 border-bottom-0', 'div', 'x', null, null, null, null, null);
           // createElement(tile6, 'tile7', 'col ratio ratio-1x1 border-bottom-0', 'div', 'x', null, null, null, null, null);
           // createElement(tile7, 'tile8', 'col ratio ratio-1x1 border-end-0 border-bottom-0', 'div', 'x', null, null, null, null, null);

       // createElement(tile7, 'bottomText', null, 'h2', 'press to play', null, null, null, null);

        //createElement(bottomText, 'button', 'border rounded-3', 'button', 'start', null, null, null, null);

       // }

//drawPage();


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


var headerText = document.getElementById("headerText");
var bottomText = document.getElementById("bottomText");
var button = document.getElementById("button");


///////* FUNCTIONS *///////

/*✅*/ function whoseTurn() { 
    if (turncount !== 0 && turncount % 2 == 0) {
        headerText.innerHTML = "IT'S O'S TURN";
        bottomText.innerText = "make a move";
    } 
    if (turncount == 0 || turncount % 2 !== 0) {
        headerText.innerHTML = "IT'S X'S TURN";
        bottomText.innerText = "make a move";
    }
}

