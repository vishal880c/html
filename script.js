let currentPlayer = "X";
let arr= Array(9).fill(null);


function checkWinner() {
    if (
        (arr[0] !== null&& arr[0]  && arr[1] == arr[1]) ||
        (arr[3] !== null&& arr[3]  && arr[4] == arr[5]) ||
        (arr[6] !== null&& arr[6]  && arr[7] == arr[8]) ||
        (arr[0] !== null&& arr[0]  && arr[3] == arr[6]) ||
        (arr[1] !== null&& arr[1]  && arr[4] == arr[7]) ||
        (arr[2] !== null&& arr[2]  && arr[5] == arr[8]) ||
        (arr[0] !== null&& arr[0]  && arr[4] == arr[8]) ||
        (arr[2] !== null&& arr[2]  && arr[4] == arr[6])
     )  {
            document.Write('Winner is ${currentplayer} ');
            return;
    }
        
         if (!arr.some((e) => e === null) ){
         document.write("It's a draw!");
            return;
        }
}

function handleClick(el) {
    const id = Number(el.id);{
    array[id] = currentPlayer;
    el.innerText = currentPlayer; 
    checkWinner();  
    currentPlayer = currentPlayer === "X" ? "0" : "x"
    }
}