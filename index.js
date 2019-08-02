//For n disks, total 2^n – 1 moves are required.

//game level 1 = 3
let level = 3;

let moveCount = 0;

//boolean value & selected block
let currentSelection = [false, -1]

//array with 8 block trackers >
//                 [1,2,3,4,5,6,7,8]
let blockTracker = [1,1,1,0,0,0,0,0]

//switch to select block
let selectBlock = function(selectedBlock){
  if (!currentSelection[0]) {
  //get block number
  let blockNumber = parseInt(selectedBlock.id[selectedBlock.id.length-1])
  //get spike number
  let spikeNumber = parseInt(selectedBlock.id[selectedBlock.id.length-2])
  let counter = true;
  //console.log(spikeNumber)
  for (let i = 0; i<blockNumber; i++) {
    if (blockTracker[i-1] == spikeNumber)
      counter = false;
  }
  if (counter){
  //hide block
  selectedBlock.style.display = "none"
  //get 2nd last letter
  currentSelection = [true, blockNumber, spikeNumber]
  }
  //console.log("block number = "+currentSelection[1])
  //console.log("spike number = "+currentSelection[2])
}
}

//switch to select spike
let selectSpike = function(selectedSpike){
  //if something is selected
  if (currentSelection[0]) {
    //number of selected spike
    let newSpikeNumber = parseInt(selectedSpike.id[selectedSpike.id.length-1]);
    let target = selectedSpike.id + currentSelection[1];
    let counter = true;
    for (let i=0;i<currentSelection[1];i++) {
    if (blockTracker[i-1]==newSpikeNumber) {
    counter = false;
    }
    }
    if (counter){
    moveCount++
    console.log(moveCount)
    document.getElementById(target).style.display = "block";
    document.getElementById("moveNumber").innerHTML = "Moves: "+moveCount;
    blockTracker[currentSelection[1]-1] = newSpikeNumber
    let wincount = 0;
    for(let i=0; i<level;i++){
    if (blockTracker[i] == 3) {wincount++}}
    if (wincount == level) {
    console.log("WINNER!")
    document.getElementById("winner").style.display = "flex";
    }
    //if (blockTracker[2] == currentSelection[level]) {console.log(true)}
    currentSelection = [false, -1];
    }
  }
  }

let nextLevel = function(){
  level++
  let maxMoves = Math.pow(2,level)-1
  document.getElementById("levelNumber").innerHTML = "Level "+(level-2);
  document.getElementById("minNumber").innerHTML = "Minimum number of moves for this level: "+maxMoves;
  document.getElementById("spike1"+level).style.display = "block";
  document.getElementById("winner").style.display = "none";
  for (let i = 1; i<level; i++) {
  document.getElementById("spike3"+i).style.display = "none";
  document.getElementById("spike1"+i).style.display = "block";
  moveCount = 0;
  document.getElementById("moveNumber").innerHTML = "Moves: "+moveCount;
  }
}