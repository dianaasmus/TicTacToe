let fields = [];
let gameOver = false;
let currentShape = 'cross';
let moves = 0;

function fillShape(id) {
    checkMoves();

    if (!fields[id] && !gameOver) {
        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player-cross').classList.remove('d-none');
            document.getElementById('player-circle').classList.add('d-none');
        } else {
            currentShape = 'cross';
            document.getElementById('player-circle').classList.remove('d-none');
            document.getElementById('player-cross').classList.add('d-none');
        }
        fields[id] = currentShape;
        draw();
    }
}

function checkMoves() {
    moves++;
    if (moves >= 9) {
        document.getElementById('game-over').classList.remove('d-none');
        document.getElementById('game-over-p').classList.add('d-none');
    }
}

function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }

        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
        checkForWin();
    }

}

function checkForWin() {
    let winner;

    if (window.matchMedia('(max-width: 500px)').matches) {
        document.getElementById('line-0').style.top = '160px';
        document.getElementById('line-2').style.top = '409px';
        document.getElementById('line-3').style.left = '-89px';
        document.getElementById('line-4').style.left = '17px';
        document.getElementById('line-5').style.left = '120px';
    }

    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-0').style.transform = "scale(1.0)";
    }

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-1').style.transform = "scale(1.0)";
    }

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line-2').style.transform = "scale(1.0)";
    }

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-3').style.transform = "rotate(90deg) scale(1.0)";
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-4').style.transform = "rotate(90deg) scale(1.0)";
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-5').style.transform = "rotate(90deg) scale(1.0)";
    }

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        if (window.matchMedia('(max-width: 500px)').matches) {
            document.getElementById('line-6').style.transform = "rotate(-50deg) scale(1.0)";
        } else {
        document.getElementById('line-6').style.transform = "rotate(-45deg) scale(1.0)";
        }
    }

    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        if (window.matchMedia('(max-width: 500px)').matches) {
            document.getElementById('line-7').style.transform = "rotate(50deg) scale(1.0)";
        } else {
        document.getElementById('line-7').style.transform = "rotate(45deg) scale(1.0)";
        }
    }

    if (!!winner) {
        gameOver = true;

        setTimeout(function () {
            if (winner == 'circle') {
                document.getElementById('game-over').classList.remove('d-none');
                document.getElementById('player-circle-end').classList.remove('d-none');
            } else {
                document.getElementById('game-over').classList.remove('d-none');
                document.getElementById('player-cross-end').classList.remove('d-none');
            }
        }, 1000);
    }
}


function restartGame() {
    resetClassList();
    gameOver = false;
    fields = [];
    moves = 0;

    for (let i = 0; i < 8; i++) {
        document.getElementById('line-' + i).style.transform = "scale(0)";
    }

    for (let i = 0; i < 9; i++) {
        document.getElementById('circle-' + i).classList.add('d-none');
        document.getElementById('cross-' + i).classList.add('d-none');
    }
}

function resetClassList() {
    document.getElementById('game-over').classList.add('d-none');
    document.getElementById('game-over-p').classList.remove('d-none');
    document.getElementById('player-cross-end').classList.add('d-none');
    document.getElementById('player-circle-end').classList.add('d-none');
}