const canva=document.getElementById("canva");
const ctx = canva.getContext("2d");

// Dessiner l'échiquier
function drawArea(){
    ctx.clearRect(0, 0, canva.width, canva.height);
    let x = 1;
    let y = 1;
    ctx.fillStyle = "white";
    for(let i=0;i<2;i++){
        for(let j=0;j<4;j++){
            for(let k=0;k<4;k++){
                ctx.fillRect(x,y,100,100);
                ctx.fill();
                x+=200;
            }
            x-=800;
            y+=200;
        }
        y-=700;
        x+=100;
    }
}

function drawPionW(pos){
    ctx.fillStyle= "white";
    ctx.strokeStyle= "black";
    ctx.lineWidth= 2;

    ctx.beginPath();
        ctx.arc(pos[0]*100-49,pos[1]*100-49, 30, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();
}
function drawPionB(pos){
    ctx.fillStyle= "black";
    ctx.strokeStyle= "white";
    ctx.lineWidth= 2;

    ctx.beginPath();
        ctx.arc(pos[0]*100-49,pos[1]*100-49, 30, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();
}

function drawPieces(){
    drawPionW(pions.pw1);
    drawPionW(pions.pw2);
    drawPionW(pions.pw3);
    drawPionW(pions.pw4);
    drawPionW(pions.pw5);
    drawPionW(pions.pw6);
    drawPionW(pions.pw7);
    drawPionW(pions.pw8);
    drawPionB(pions.pb1);
    drawPionB(pions.pb2);
    drawPionB(pions.pb3);
    drawPionB(pions.pb4);
    drawPionB(pions.pb5);
    drawPionB(pions.pb6);
    drawPionB(pions.pb7);
    drawPionB(pions.pb8);
}



function gameLoop(){
    drawArea();
    drawPieces();

    requestAnimationFrame(gameLoop);
}
gameLoop();