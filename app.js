let user = [{
    name: "PLAYER1",
    position: "",
    turn: ""
}, {
    name: "PLAYER2",
    position: "",
    turn: ""

}]
let gameStart = false;
let position1 = user[0].position
let position2 = user[1].position


firstTurn()
//console.log(position1 + "xx" + rolled)


function dice() {
    rolled = Math.floor(Math.random() * (7 - 1) + 1)
}

function firstTurn() {
    //WHO GOES FIRST???
    if (gameStart == false) {
        user1()
        user2()
        console.log(position1)
        console.log(position2)
        if (position1 > position2) {
            console.log("user1 goes first")
            gameStart = true;
            position1 = 0
            position2 = 0
            user1();
        } else if (position1 < position2) {
            console.log("user2 goes first")
            gameStart = true;
            position1 = 0
            position2 = 0
            user2()
        } else if (position1 == position2) {
            console.log("tie")
            firstTurn()
        }
    }

}




var win=false;


function user1() {
    dice()

    if (gameStart == false) {
        position1 = rolled

        console.log("AAAAA")
        console.log(gameStart)
    }
    if (gameStart == true) {
        position1 += rolled
        console.log(`USER1 rolled a ${rolled}`)
        console.log(`USER1 moves to square #${position1}`)
        console.log(position1)
        console.log(gameStart)
        finishLine()
        if(win==true){
        console.log("USER 1 WINS!")
        }else{
            user2()
        }

    }
}


function user2() {
    dice()

    if (gameStart == false) {
        position2 = rolled
        console.log("BBBB")
        console.log(gameStart)
    }
    if (gameStart == true) {

        console.log(rolled)
        position2 += rolled
        console.log(`USER2 rolled a ${rolled}`)
        console.log(`USER2 moves to square #${position2}`)
        console.log(position2)
        
        finishLine()
        if(win==true){
            console.log("USER 2 WINS!")
            }else{
                user1()
            }
    }

}

function finishLine() {

    if (position1 >= 36 || position2 >= 36) {
        win = true
    }
}

function trapIncrease() {

}

function trapDecrease() {

}