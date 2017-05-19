var run = 0;

document.getElementById("game").onclick = function(e){
    //console.log(e);
    if(e.target.className == "block"){
        if(run%2 == 0) {
            e.target.innerHTML = "X";
        } else{
            e.target.innerHTML = "0";
        }
        run++;
        test();
    }
    function test(){
        var allBlock = document.getElementsByClassName("block");
        if(allBlock[0].innerHTML == "X" && allBlock[1].innerHTML == "X" && allBlock[2].innerHTML == "X"){
            alert("You won!!!")
        }
        if(allBlock[3].innerHTML == "X" && allBlock[4].innerHTML == "X" && allBlock[5].innerHTML == "X"){
            alert("You won!!!")
        }
        if(allBlock[6].innerHTML == "X" && allBlock[7].innerHTML == "X" && allBlock[8].innerHTML == "X"){
            alert("You won!!!")
        }
        if(allBlock[0].innerHTML == "X" && allBlock[3].innerHTML == "X" && allBlock[6].innerHTML == "X"){
            alert("You won!!!")
        }
        if(allBlock[1].innerHTML == "X" && allBlock[4].innerHTML == "X" && allBlock[7].innerHTML == "X"){
            alert("You won!!!")
        }
        if(allBlock[2].innerHTML == "X" && allBlock[5].innerHTML == "X" && allBlock[8].innerHTML == "X"){
            alert("You won!!!")
        }
        if(allBlock[0].innerHTML == "X" && allBlock[4].innerHTML == "X" && allBlock[8].innerHTML == "X"){
            alert("You won!!!")
        }
        if(allBlock[2].innerHTML == "X" && allBlock[4].innerHTML == "X" && allBlock[6].innerHTML == "X"){
            alert("You won!!!")
        }

        //for ziro
        if(allBlock[0].innerHTML == "0" && allBlock[1].innerHTML == "0" && allBlock[2].innerHTML == "0"){
            alert("you lose!!!")
        }
        if(allBlock[3].innerHTML == "0" && allBlock[4].innerHTML == "0" && allBlock[5].innerHTML == "0"){
            alert("You lose!!!")
        }
        if(allBlock[6].innerHTML == "0" && allBlock[7].innerHTML == "0" && allBlock[8].innerHTML == "0"){
            alert("You lose!!!")
        }
        if(allBlock[0].innerHTML == "0" && allBlock[3].innerHTML == "0" && allBlock[6].innerHTML == "0"){
            alert("You lose!!!")
        }
        if(allBlock[1].innerHTML == "0" && allBlock[4].innerHTML == "0" && allBlock[7].innerHTML == "0"){
            alert("You lose!!!")
        }
        if(allBlock[2].innerHTML == "0" && allBlock[5].innerHTML == "0" && allBlock[8].innerHTML == "0"){
            alert("You lose!!!")
        }
        if(allBlock[0].innerHTML == "0" && allBlock[4].innerHTML == "0" && allBlock[8].innerHTML == "0"){
            alert("You lose!!!")
        }
        if(allBlock[2].innerHTML == "0" && allBlock[4].innerHTML == "0" && allBlock[6].innerHTML == "0"){
            alert("You lose!!!")
        }
    }

}