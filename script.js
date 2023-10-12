
function createButtons() {
    const topBar = document.createElement('div')
    const btnBuild = document.createElement('button')
    const btnNorm = document.createElement('button')
    const btnRan = document.createElement('button')
    const btnGrad = document.createElement('button')
    const btnFlash = document.createElement('button')

    btnBuild.textContent = 'Build Board';
    btnBuild.id = "btnBuild";
    btnNorm.textContent = 'Traditional Pattern';
    btnNorm.id = "btnNorm";
    btnRan.textContent = 'Random Pattern';
    btnRan.id = "btnRan";
    btnGrad.textContent = 'Gradient Pattern';
    btnGrad.id = "btnGrad";
    btnFlash.textContent = 'Flashing Pattern 2 Sec';
    btnFlash.id = "btnFlash";

    topBar.id = "topDiv";
    topBar.style.display = 'flex';
    topBar.style.justifyContent = 'space-between';
    topBar.style.alignItems = 'center';
    topBar.style.width = '50%';
    topBar.style.height = '50px';
    topBar.style.background = '#eee';
    topBar.style.margin = '0 auto';
    topBar.style.top = '50%';
    topBar.style.left = '50%';

    document.body.appendChild(topBar);
    topBar.appendChild(btnBuild);
    topBar.appendChild(btnNorm);
    topBar.appendChild(btnRan);
    topBar.appendChild(btnGrad);
    topBar.appendChild(btnFlash);
}




function createBoard() {
    //const mainDiv = document.getElementById('topDiv')
    const mainBoard = document.createElement('div')
    mainBoard.style.display = 'flex'
    mainBoard.style.flexWrap = 'wrap'
    mainBoard.style.width = '800px'
    mainBoard.style.height = '800px'
    mainBoard.style.border = '1px solid black'
    mainBoard.style.margin = 'auto'
    document.body.appendChild(mainBoard);
    
    
    let numOfTiles = 64;
    for (let i = 1; i <= numOfTiles; i++) {
        let tile = document.createElement('div');
        tile.style.width = '12.5%'
        tile.style.height = '12.5%'
        tile.className = "checkerTiles"
        mainBoard.appendChild(tile);
    }

}



function traditionalBoard() {
    const allTiles = document.querySelectorAll('.checkerTiles')
    for (let i = 0; i < allTiles.length; i++) {
        let row = Math.floor(i / 8);
        let col = i % 8;

        if ((row + col) % 2 === 0) {
            allTiles[i].style.backgroundColor = 'red';
        } else {
            allTiles[i].style.backgroundColor = 'black';
        }
    }
}



function randomBoard() {
    const allTiles = document.querySelectorAll('.checkerTiles')
    for (let i = 0; i < allTiles.length; i++) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        allTiles[i].style.backgroundColor = `rgb(${r},${g},${b})`;
    }
}



function gradientBoard() {
    const allTiles = document.querySelectorAll('.checkerTiles')
    let colorModifier = 5
    for (let i = 0; i < allTiles.length; i++) {
        let row = Math.floor(i / 8);
        let col = i % 8;
        //const colorModifier = Math.floor(255 * (row + col) / 14)
        console.log(colorModifier)
        colorModifier += 4
    
        if ((row + col) % 2 === 0) {
            allTiles[i].style.backgroundColor = `rgba(${colorModifier}, ${128 + colorModifier}, 0, 0.5)`;
        } else {
            allTiles[i].style.backgroundColor = `rgba(0, ${colorModifier}, ${255 - colorModifier}, 0.5)`;
        }
    }
}


function keepVibing() {
    runNum = 0;
    const keepRunning = setInterval(() => {
        randomBoard();
        runNum += 1

        if(runNum >= 4) {
            clearInterval(keepRunning);
        }
    }, 2000);
}




createButtons();

const btnBuild = document.getElementById('btnBuild');
const btnNorm = document.getElementById('btnNorm');
const btnRan = document.getElementById('btnRan');
const btnGrad = document.getElementById('btnGrad');
const btnFlash = document.getElementById('btnFlash');

btnBuild.addEventListener('click', () => createBoard())
btnNorm.addEventListener('click', () => traditionalBoard());
btnRan.addEventListener('click', () => randomBoard())
btnGrad.addEventListener('click', () => gradientBoard());
btnFlash.addEventListener('click', () => keepVibing())

