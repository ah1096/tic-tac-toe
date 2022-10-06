

//win conditions
let boardState = [
    'x','x','x',
    'x','x','o',
    'x','o','x',
];

let winConditions = [

///HORIZONTAL///
    [0,1,2],
    [3,4,5],
    [6,7,8]




]


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
    } else if (
        boardState[line[3]] 
        && boardState[line[3]] == boardState[line[4]] 
        && boardState[line[4]] == boardState[line[5]]) 
        {console.log('WIN');
    } else if (
        boardState[line[6]] 
        && boardState[line[6]] == boardState[line[7]] 
        && boardState[line[7]] == boardState[line[8]]) 
        {console.log('WIN');
    } 
    
    
    
    
    
    
    
    
    
    else (console.log("LOSE"))
    
    
    
    
    
}


