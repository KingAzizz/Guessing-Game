
const result = document.getElementById('result');
const resultBtn = document.getElementById("btn-submit")
const resetBtn = document.getElementById('reset')
let scoreP1 = document.getElementById('scoreP1')
let scoreP2 = document.getElementById('scoreP2')
let countP1 = localStorage.getItem(0);
let countP2 = localStorage.getItem(1);

countP1 != null? scoreP1.innerHTML = "Score:"+  countP1: ""
countP2 != null? scoreP2.innerHTML = "Score:"+  countP2: ""


/* EventListener  */
resetBtn.addEventListener('click',() => {
    localStorage.clear();
    window.location.href = '/'
    
    
    console.log("load");
})
resultBtn.addEventListener('click', (e) =>{
e.preventDefault()
input()
})


/* Functions  */

const input = () => {

 
    let playerInputOne = document.getElementById('input-player-one').value;
    let playerInputTwo = document.getElementById('input-player-two').value;

    if(playerInputOne === "" && playerInputTwo === ""){
        result.innerHTML = "Enter A Number of Two Digits"
    }
    else{

        check(playerInputOne,playerInputTwo)
    }
}

const check = (playerNumberOne,playerNumberTwo) => {  
    const number = Math.floor(Math.random(1) * 100) // Random generated number
    const array = [playerNumberOne,playerNumberTwo]
  const closestNumber = closestTo(number,array)


    if(playerNumberOne === closestNumber){
        localStorage.getItem(0,countP1)
           countP1++;
           localStorage.setItem(0,parseInt(countP1))

        scoreP1.innerHTML = "Score:" + countP1
        result.innerHTML = `Player one Wins
        the number is: ${number}`

    }
    if(playerNumberTwo === closestNumber){
        countP2
        countP2++;
        localStorage.setItem(1,parseInt(countP2))

       
        scoreP2.innerHTML = "Score:" + countP2

        result.innerHTML = `Player Two Wins
        the number is: ${number}`
    }
    if(playerNumberOne === closestNumber && playerNumberTwo === closestNumber){
        result.innerHTML = `Draw
        the number is: ${number}`
    }
   

}
function closestTo(number, set) {
    var closest = set[0];
    var prev = Math.abs(set[0] - number);

    for (var i = 1; i < set.length; i++) {
        var diff = Math.abs(set[i] - number);

        if (diff < prev) {
            prev = diff;
            closest = set[i];
        }
    }

    return closest;
}