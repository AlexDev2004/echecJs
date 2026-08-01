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

function borderColor(p){
    let color =[];
    if (p[2] == "w"){
        color.push("white","black");
    }else{
        color.push("black","white");
    }
    if(p == pionSelect){
        color.pop();
        color.push("red");
    }
    return color;
}

function drawPion(p){
    ctx.fillStyle= borderColor(p)[0];
    ctx.strokeStyle= borderColor(p)[1];
    ctx.lineWidth= 2;
    ctx.beginPath();
        ctx.arc(p[0]*100-49,p[1]*100-49, 30, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();
}
function drawTour(p){
    ctx.fillStyle= borderColor(p)[0];
    ctx.strokeStyle= borderColor(p)[1];
    ctx.lineWidth= 2;
    ctx.beginPath();
        ctx.moveTo((p[0]*100-49)-38,(p[1]*100-49));
        ctx.lineTo((p[0]*100-49)-20,(p[1]*100-49)+35);
        ctx.lineTo((p[0]*100-49)+20,(p[1]*100-49)+35);
        ctx.lineTo((p[0]*100-49)+38,(p[1]*100-49));
        ctx.lineTo((p[0]*100-49)+20,(p[1]*100-49)-35);
        ctx.lineTo((p[0]*100-49)-20,(p[1]*100-49)-35);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
}
function drawFou(p){
    ctx.fillStyle= borderColor(p)[0];
    ctx.strokeStyle= borderColor(p)[1];
    ctx.lineWidth= 2;
    ctx.beginPath();
        ctx.arc(p[0]*100-49,p[1]*100-49, 35, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();
    ctx.beginPath();
        ctx.arc(p[0]*100-49,p[1]*100-49, 10, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();
}
function drawHorse(p){
    ctx.fillStyle= borderColor(p)[0];
    ctx.strokeStyle= borderColor(p)[1];
    ctx.lineWidth= 2;
    ctx.fillRect((p[0]*100-49)-20,(p[1]*100-49)-40,30,80);
    ctx.strokeRect((p[0]*100-49)-20,(p[1]*100-49)-40,30,80);
    ctx.beginPath();
        ctx.arc((p[0]*100-49),(p[1]*100-49)+40, 35,Math.PI,Math.PI*2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    ctx.fillRect((p[0]*100-49)-20,(p[1]*100-49)-40,50,25);
    ctx.strokeRect((p[0]*100-49)-20,(p[1]*100-49)-40,50,25);
}
function drawKing(p){
    ctx.fillStyle= borderColor(p)[0];
    ctx.strokeStyle= borderColor(p)[1];
    ctx.lineWidth= 2;
    ctx.beginPath();
        ctx.arc((p[0]*100-49),(p[1]*100-49), 40, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();
    ctx.beginPath();
        ctx.arc((p[0]*100-49),(p[1]*100-49), 30, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();
    ctx.beginPath();
        ctx.arc((p[0]*100-49),(p[1]*100-49), 20, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();
    ctx.strokeRect((p[0]*100-49)-20,(p[1]*100-49)-20,40,40);
    ctx.beginPath();
        ctx.moveTo((p[0]*100-49)-15,(p[1]*100-49)-15);
        ctx.lineTo((p[0]*100-49)+15,(p[1]*100-49)+15);
        ctx.stroke();
    ctx.beginPath();
        ctx.moveTo((p[0]*100-49)-15,(p[1]*100-49)+15);
        ctx.lineTo((p[0]*100-49)+15,(p[1]*100-49)-15);
        ctx.stroke();
}
function drawQueen(p){
    ctx.fillStyle= borderColor(p)[0];
    ctx.strokeStyle= borderColor(p)[1];
    ctx.lineWidth= 2;
    ctx.beginPath();
        ctx.arc((p[0]*100-49),(p[1]*100-49), 40, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();
    ctx.beginPath();
        ctx.arc((p[0]*100-49),(p[1]*100-49), 35, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();
    ctx.beginPath();
        ctx.arc((p[0]*100-49),(p[1]*100-49), 30, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();
    ctx.beginPath();
        ctx.arc((p[0]*100-49),(p[1]*100-49), 25, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();
}

function drawPieces(){
    drawPion(pions.pw1);
    drawPion(pions.pw2);
    drawPion(pions.pw3);
    drawPion(pions.pw4);
    drawPion(pions.pw5);
    drawPion(pions.pw6);
    drawPion(pions.pw7);
    drawPion(pions.pw8);
    drawPion(pions.pb1);
    drawPion(pions.pb2);
    drawPion(pions.pb3);
    drawPion(pions.pb4);
    drawPion(pions.pb5);
    drawPion(pions.pb6);
    drawPion(pions.pb7);
    drawPion(pions.pb8);

    drawTour(pions.tw1);
    drawTour(pions.tw2);
    drawTour(pions.tb1);
    drawTour(pions.tb2);

    drawFou(pions.fw1);
    drawFou(pions.fw2);
    drawFou(pions.fb1);
    drawFou(pions.fb2);

    drawHorse(pions.hw1);
    drawHorse(pions.hw2);
    drawHorse(pions.hb1);
    drawHorse(pions.hb2);

    drawKing(pions.kw);
    drawKing(pions.kb);
    drawQueen(pions.qw);
    drawQueen(pions.qb);
}



function gameLoop(){
    drawArea();
    drawPieces();

    if(pions.kb[0]==-1){
        alert("Victoire des blancs");
        return console.log("Victoire des blancs");
    }
    if(pions.kw[0]==-1){
        alert("Victoire des noirs");
        return console.log("Victoire des noirs");
    }

    requestAnimationFrame(gameLoop);
}
gameLoop();