let currentPlayer = "X"
const boxes = document.querySelectorAll(".box");

let p1Score = 0;
let p2Score = 0;

let p1 = document.querySelector(".score1");
let p2 = document.querySelector(".score2");

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", handleclickfunction)
}

function handleclickfunction(event) {
    const selectedbox = event.target;

    if (selectedbox.textContent !== "") {
        return;
    }

    selectedbox.textContent = currentPlayer;

    if (checkwincondition() === currentPlayer) {
        currentPlayer === "X" ? p1Score++ : p2Score++;

        p1.textContent = p1Score;
        p2.textContent = p2Score;

        alert('Win Game');
        reset();
    } else if (drawCondition()) {
        alert("Game Draw")
        reset();
    } else {
        if (currentPlayer === "X") {
            currentPlayer = "0"
        } else {
            currentPlayer = "X"
        }
        // currentPlayer=currentPlayer ==="X" ? "0": "X";
    }
}

function checkwincondition() {
    const winnigpattern = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    for (let i = 0; i < winnigpattern.length; i++) {
        const eachwinningpattern = winnigpattern[i];
        const [a, b, c] = eachwinningpattern;

        if (boxes[a].textContent === currentPlayer &&
            boxes[b].textContent === currentPlayer &&
            boxes[c].textContent === currentPlayer &&
            boxes[a] !== "") {
            return currentPlayer;
        }
    }
    return false;
}


// draw condition 
function drawCondition() {
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].textContent === "") {
            return false;
        }
    }
    return true;
}

// reset function 
function reset() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].textContent = "";
    }
}