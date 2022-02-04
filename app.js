
const result = document.getElementById('result');
const resultBtn = document.getElementById("btn-submit")


resultBtn.addEventListener('click', (e) =>{
e.preventDefault()
input()
})

const input = () => {

 
    let playerInputOne = document.getElementById('input-player-one').value;
    let playerInputTwo = document.getElementById('input-player-two').value;
    if(playerInputOne === "" && playerInputTwo === ""){
        result.innerHTML = "Enter A Number"
    }
    else{

        check(playerInputOne,playerInputTwo)
    }
}

const check = (playerNumberOne,playerNumberTwo) => {  
    const number = Math.floor(Math.random(1) * 100)
    const array = [playerNumberOne,playerNumberTwo]
  const closestNumber = closestTo(number,array)


    if(playerNumberOne === closestNumber){
        result.innerHTML = `Player one Wins
        the number is: ${number}`
        console.log(number);
    }
    if(playerNumberTwo === closestNumber){
        result.innerHTML = `Player Two Wins
        the number is: ${number}`
        console.log(number);
    }
    if(number === playerNumberOne && number === playerNumberTwo){
        result.innerHTML = `Draw
        the number is: ${number}`
        console.log(number);
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