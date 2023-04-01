let fields = [];

let currentShape = 'cross';

function fillShape(id) {

    if (!fields[id]) {
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
        console.log(fields);
        draw();
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
    }
    checkForWin();
}

function checkForWin() {
    let winner;

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
        document.getElementById('line-6').style.transform = "rotate(-45deg) scale(1.0)";
    }

    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-7').style.transform = "rotate(45deg) scale(1.0)";
    }

    if (!!winner) {
        console.log('gewonnen:' + winner)
    }
}