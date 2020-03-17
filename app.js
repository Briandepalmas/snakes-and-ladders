
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


//document.getElementById("btn").addEventListener("click",firstTurn())
// //console.log(position1 + "xx" + rolled)


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
            document.getElementById("text").innerHTML = `PLAYER1 rolled a ${position1}.\n PLAYER2 rolled a ${position2}.\nPLAYER1 GOES FIRST!\n \nCLICK DICE BUTTON TO ROLL THE DICE.`
            console.log("user1 goes first")
            gameStart = true;
            position1 = 0
            position2 = 0
            document.getElementById("btn").style.display = "none";
            document.getElementById("dice").onclick = function () {
                user1()
            }
            //user1();
        } else if (position1 < position2) {
            document.getElementById("text").innerHTML = `PLAYER1 rolled a ${position1}.\n PLAYER2 rolled a ${position2}.\nPLAYER2 GOES FIRST!\n \nCLICK DICE BUTTON TO ROLL THE DICE.`
            console.log("user2 goes first")
            gameStart = true;
            position1 = 0
            position2 = 0
            document.getElementById("btn").style.display = "none";
            document.getElementById("dice").onclick = function () {
                user2()
            }
            //user2()
        } else if (position1 == position2) {
            document.getElementById("text").innerHTML = `PLAYER1 rolled a ${position1}.\n PLAYER2 rolled a ${position2}.\n TIE? press Start Game to roll again`
            console.log("tie")
            firstTurn()
        }
    }

}




let win = false;
let myturn = false;

function user1() {
    dice()

    if (gameStart == false) {
        position1 = rolled

        console.log("AAAAA")
        console.log(gameStart)
    }
    if (gameStart == true) {
        
        if (`item${position1}` > 0) {
            remove1()
        }
        position1 += rolled
        document.getElementById("text").innerHTML = `PLAYER1 rolled a ${rolled}\nPLAYER1 moves to square #${position1}\n PLAYER2's TURN!`
        console.log(`USER1 rolled a ${rolled}`)
        console.log(`USER1 moves to square #${position1}`)
        // console.log(position1)
        // console.log(gameStart)

        finishLine()
        ladder()
        displayP1()
        // remove()
        if (win == true) {
            console.log("USER 1 WINS!")
        } else {
            //document.getElementById("text").innerHTML="PLAYER2's turn to roll dice."
            document.getElementById("dice").onclick = function () {
                user2()
            }
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
        //  var icon2 = document.getElementById("pic2");
        console.log(`item${position2}` + "PICCC")
        if (`item${position2}` > 0) {
            remove2()
        }
        console.log(rolled)
        position2 += rolled

        console.log(position2 + "AFTER PICC")
        document.getElementById("text").innerHTML = `PLAYER2 rolled a ${rolled}\nPLAYER2 moves to square #${position2}\n PLAYER1's TURN!`
        console.log(`USER2 rolled a ${rolled}`)
        console.log(`USER2 moves to square #${position2}`)
        displayP2()

        ladder()
        finishLine()
        if (win == true) {
            console.log("USER 2 WINS!")
        } else {

            document.getElementById("dice").onclick = function () {
                user1()
            }
        }
    }

}

function finishLine() {

    if (position1 >= 36) {
        document.getElementById("text").innerHTML = "PLAYER1 WINS!"
       document.getElementById("item36").appendChild(x); 
       document.getElementById("dice").onclick = alert("GAME OVER PLAYER 1 WINS!")
        
        win = true
    } else if (position2 >= 36) {
        document.getElementById("text").innerHTML = "PLAYER2 WINS!"
       document.getElementById("item36").appendChild(y); 
       document.getElementById("dice").onclick = alert("GAME OVER PLAYER 2 WINS!")
        
        win = true
    }
}

function ladder() {
    //16 to 29
    if (position1 == 16) {
        position1 = 29
        document.getElementById("text").innerHTML = `PLAYER1 rolled a ${rolled}\nPLAYER1 Landed on the ladder and moves up to #29!`
        document.getElementById("item29").appendChild(x);
        console.log(position1 + " User 1 went up to 29")
    }
    //32 to 20
    else if (position1 == 32) {
        position1 = 20
        document.getElementById("text").innerHTML = `PLAYER1 rolled a ${rolled}\nPLAYER1 Landed on the sting-ray and moves down to #29!`
        document.getElementById("item20").appendChild(x);
        console.log(position1 + " User 1 decreased to 20")
    }
    //16 to 29
    if (position2 == 16) {
        position2 = 29
        document.getElementById("text").innerHTML = `PLAYER2 rolled a ${rolled}\nPLAYER2 Landed on the ladder and moves up to #29!`
        document.getElementById("item29").appendChild(y);
        console.log(position2 + " User 2 went up to 29")
    }
    //32 to 20
    else if (position2 == 32) {
        position2 = 20
        document.getElementById("text").innerHTML = `PLAYER2 rolled a ${rolled}\nPLAYER2 Landed on the sting-ray and moves down to #29!`
        document.getElementById("item20").appendChild(y);
        console.log(position2 + " User 2 decreased to 20")
    }
}

//let does not work
var x = document.createElement("IMG", "pic1");
displayP1 = () => {
    var p1 = `item${position1}`

    
    x.setAttribute("src", "/assets/images/babyshark.png");
    x.setAttribute("width", "100");
    x.setAttribute("height", "100");
    console.log(`item${position1}`)
    document.getElementById(p1).appendChild(x);

}

var y = document.createElement("IMG", "pic2");
displayP2 = () => {

    var p2 = `item${position2}`

    console.log(`item${position2}`)
    
    y.setAttribute("src", "/assets/images/girlshark.png");
    y.setAttribute("width", "100");
    y.setAttribute("height", "100");
    document.getElementById(p2).appendChild(y);

}



function remove2() {  
    y.remove();

}
function remove1() {  
    x.remove();

}



// function myFunction() {
//     var x = document.getElementById(item);
//     x.remove(x.selectedIndex);
//   }
//display()