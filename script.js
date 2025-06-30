let computerNum = 0
let playbtn = document.getElementById("playbtn")
let uinput = document.getElementById("uinput")
let resultarea = document.getElementById("result-area")
let resetbtn = document.getElementById("resetbtn")
let chances = 5
let gameOver = false
let chance = document.getElementById("chance")


pickRandomNum = () =>{
    computerNum = Math.floor(Math.random() * 100) + 1
    console.log(computerNum)
}

pickRandomNum()

inputUnum = (uvalue) =>{
    if(uvalue > 100){
        resultarea.textContent = "100보다 작거나 같은 숫자! 입력"
        return false
    }
    else if(uvalue < 1){
        resultarea.textContent = "1보다 크거나 같은 숫자! 입력"
        return false
    }
    else{
        chances --
        return true
    }
}

playgame = () =>{let uvalue = uinput.value
    if(!inputUnum(uvalue)) return    
    console.log(uvalue)
    inputUnum(uvalue)

    if(uvalue > 0 && uvalue < 101){
    chance.textContent = `남은 기회 ${chances}`

    if(uvalue > computerNum){
        resultarea.textContent = "down!"
    }
    else if(uvalue < computerNum){
        resultarea.textContent = "up!"
    }else{
        resultarea.textContent = "정답"
    }

    if(chances < 1){
        gameOver = true
        resultarea.textContent = "gameover"
    }
    if(gameOver == true){
        playbtn.disabled = true
    }
}}

reset = () =>{
    uvalue = ""
    chances = 5
    gameOver = false
    pickRandomNum()
    resultarea.textContent = "결과"
    chance.textContent = `남은 기회 ${chances}`
    playbtn.disabled = false
}



playbtn.addEventListener("click", playgame);
resetbtn.addEventListener("click", reset)


