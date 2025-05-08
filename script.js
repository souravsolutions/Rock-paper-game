let button = document.querySelectorAll("button")
let playerImg = document.querySelector("#playerimg")
let computerImg = document.querySelector("#computerimg")
let comc = document.querySelector("#comc")
let playc = document.querySelector("#playc")
let restart = document.querySelector("#restart")
let playerGuss = "";
let playercount = 0;
let computercount = 0;
//main work after click
button.forEach((button) => {
    button.addEventListener("click",function(e){
        //computer choose
        let randomNumber = Math.floor((Math.random() * 3) + 1);
        let computer = computerChoose(randomNumber); 
        //player choose
        if(e.target.id == "stone"){
            playerGuss = "stone";
        }else if(e.target.id == "paper"){
            playerGuss = "paper";
        }else if(e.target.id == "sizer"){
            playerGuss = "sizer";
        }
        //main work
        if(playerGuss != ""){
            startHandshake();
            setTimeout(() => {
                changeimage(playerGuss,computer);
                check(playerGuss, computer);
            }, 1000);
        }
    })
});
//restart Button
restart.addEventListener("click",function(){
    playercount = 0;
    computercount = 0;
    computertext(computercount)
    playerText(computercount)
    playerImg.src = "images/stoneComputer.png"
    computerImg.src = "images/stonePlayer.png"
})
//animation
function startHandshake() {
    playerImg.classList.add("playerimg");
    computerImg.classList.add("compimg");
        setTimeout(function() {
      playerImg.classList.remove("playerimg");
      computerImg.classList.remove("compimg");
    }, 1000);
}
//check what computer choose
function computerChoose(randomNumber){
    if(randomNumber === 1){
        return "stone";
    }else if(randomNumber === 2){
        return "paper";
    }else {
        return "sizer";
    }
}
//image changing after choose
function changeimage(playerGuss,computer){
    if(playerGuss == "stone"){
        playerImg.src = "images/stoneComputer.png"
    }else if(playerGuss == "paper"){
        playerImg.src = "images/paperComputer.png"
    }else if(playerGuss == "sizer"){
        playerImg.classList.add("sizor")
        playerImg.src = "images/scissorsComputer.png"
    }

    if(computer == "stone"){
        computerImg.src = "images/stonePlayer.png"
    }else if(computer == "paper"){
        computerImg.src = "images/paperPlayer.png"
    }else if(computer == "sizer"){
        playerImg.classList.add("sizor")
        computerImg.src = "images/scissorsPlayer.png"
    }
}
//check the value and store
function check(playerGuss,computer){
    if(playerGuss == "stone" && computer == "paper"|| playerGuss == "paper" && computer == "sizer" || playerGuss == "sizer" && computer == "stone"){
        computercount++
        computertext(computercount);
    }else if(playerGuss == computer){
        console.log("draw");
    }else {
        playercount++
        playerText(playercount);
    }
}
//upgrade point after win or loose
function computertext(computercount){
    comc.textContent = `${computercount}`;
}

function playerText(playercount){
    playc.textContent = `${playercount}`;
}