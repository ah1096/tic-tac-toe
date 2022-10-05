//////////* STATE OBJECT *//////////

let state = {

    turn: 0,

    views: [
        /*VIEW 1: start page*/
        {headertext: "TIC TAC TOE",
        button: "START",
        board: null,
        helpertext: "press to play",
        resetbutton: null,
        },

        /*VIEW 2: X's turn*/
        {headertext: "TIC TAC TOE",
        button : null,
        board: ?????????????????
        helpertext: "It's your turn, X",
        resetbutton: null,
        },

        /*VIEW 3: O's turn*/
        {headertext: "TIC TAC TOE",
        button : null,
        board: ??????????????????
        helpertext: "It's your turn, O",
        resetbutton: null,
        },

        /*VIEW 4: WIN PAGE*/
        {headertext: "WOW, ____ WINS",
        button : "GIMME",
        board: null,
        helpertext: "claim your prize or try again",
        resebutton: "RESET",
        },
        
        /*VIEW 5: CATGAME PAGE*/
        {headertext: "IT'S A TIE",
        button : null,
        board: null, ///or replace with cat image (STRETCH GOAL)
        helpertext: "aka a 'cat game'",
        resebutton: "RESET",
        },

