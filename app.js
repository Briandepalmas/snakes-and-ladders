

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
let position1= user[0].position
let position2 = user[1].position


firstTurn()
//console.log(position1 + "xx" + rolled)


function dice() {
    rolled = Math.floor(Math.random() * (7 - 1) + 1)
}

function firstTurn() {
    if (gameStart == false) {

        user1()
        user2()
        console.log(position1)
        console.log(position2)
        if (position1 > position2) {
            console.log("user1 goes first")
            gameStart = true;
            position1=0
            position2=0
            user1();
            

        } else if(position1<position2){
            console.log("user2 goes first")
            gameStart = true;
            position1=0
            position2=0
            user2()
        }
        else if(position1==position2){
            console.log("tie")
            firstTurn()
        }
    }
    
}







function user1() {
    dice()
    
    if (gameStart == false) {
        position1= rolled

        console.log("22222")
        console.log(gameStart)
    }else{
        console.log("1111")
        position1+=rolled
        console.log(rolled)
        console.log(position1)
        console.log(gameStart)
    }



}


function user2() {
    dice()
    
    if (gameStart == false) {
        position2= rolled
        console.log("####")
        console.log(gameStart)
    }
    if (gameStart==true){
        console.log(rolled)
        position2+=rolled
        console.log(position2)
    }


}


function trapIncrease() {

}

function trapDecrease() {

}