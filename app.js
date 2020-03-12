let gameStart = false;

let user = [{
    name: "PLAYER1",
    position: "",
    turn: ""
}, {
    name: "PLAYER2",
    position: "",
    turn: ""

}]

function dice() {
    rolled = Math.floor(Math.random() * (7 - 1) + 1)
}

function firstTurn() {
    if (gameStart == false) {
        gameStart = true;
        user1()
        user2()
        if (user[0].position>user[1].position){
            user1();
        }
    }
}

function user1() {
    dice()
    user[0].position=rolled
    if (){

    }

}
user1()

console.log(user[0].position+ " "+rolled)
function user2() {

}

function trapIncrease() {

}

function trapDecrease() {

}