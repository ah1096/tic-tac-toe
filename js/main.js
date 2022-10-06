

//win conditions
let boardState = [
    'x','x','x',
    '','','',
    '','','',
];

let winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8]
]


for (let i = 0; i < winConditions.length; i++){
    const line = winConditions[i];


    if (
        boardState[line[0]] 
        && boardState[line[0]] == boardState[line[1]] 
        && boardState[line[1]] == boardState[line[2]]
    ) {
        console.log('WIN');
    } else {
        console.log('LOSE');
    }


}