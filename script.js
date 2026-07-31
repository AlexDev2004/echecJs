// const grillPos ={
//     a1:[51,51],a2:[151,51],a3:[251,51],a4:[351,51],a5:[451,51],a6:[551,51],a7:[651,51],a8:[751,51],
//     b1:[51,151],b2:[151,151],b3:[251,151],b4:[351,151],b5:[451,151],b6:[551,151],b7:[651,151],b8:[751,151],
//     c1:[51,251],c2:[151,251],c3:[251,251],c4:[351,251],c5:[451,251],c6:[551,251],c7:[651,251],c8:[751,251],
//     d1:[51,351],d2:[151,351],d3:[251,351],d4:[351,351],d5:[451,351],d6:[551,351],d7:[651,351],d8:[751,351],
//     e1:[51,451],e2:[151,451],e3:[251,451],d4:[351,451],e5:[451,451],e6:[551,451],e7:[651,451],e8:[751,451],
//     f1:[51,551],f2:[151,551],f3:[251,551],f4:[351,551],f5:[451,551],f6:[551,551],f7:[651,551],f8:[751,551],
//     g1:[51,651],g2:[151,651],g3:[251,651],g4:[351,651],g5:[451,651],g6:[551,651],g7:[651,651],g8:[751,651],
//     h1:[51,751],h2:[151,751],h3:[251,751],h4:[351,751],h5:[451,751],h6:[551,751],h7:[651,751],h8:[751,751],
// }

const pions ={
    pw1:[1,7,"w","p"],pw2:[2,7,"w","p"],pw3:[3,7,"w","p"],pw4:[4,7,"w","p"],
    pw5:[5,7,"w","p"],pw6:[6,7,"w","p"],pw7:[7,7,"w","p"],pw8:[8,7,"w","p"],

    pb1:[1,2,"b","p"],pb2:[2,2,"b","p"],pb3:[3,2,"b","p"],pb4:[4,2,"b","p"],
    pb5:[5,2,"b","p"],pb6:[6,2,"b","p"],pb7:[7,2,"b","p"],pb8:[8,2,"b","p"]
}

const grillContent =[
    [0,pions.pb1,0,0,0,0,pions.pw1,0],
    [0,pions.pb2,0,0,0,0,pions.pw2,0],
    [0,pions.pb3,0,0,0,0,pions.pw3,0],
    [0,pions.pb4,0,0,0,0,pions.pw4,0],
    [0,pions.pb5,0,0,0,0,pions.pw5,0],
    [0,pions.pb6,0,0,0,0,pions.pw6,0],
    [0,pions.pb7,0,0,0,0,pions.pw7,0],
    [0,pions.pb8,0,0,0,0,pions.pw8,0],
];

// function pionMove(p){
//     if(p[2] == "w"){ // Mouvement pion blanc
//         if(p[1]>1){
//             if(grillContent[p[0]-1][p[1]-2] == 0){
//                 grillContent[p[0]-1][p[1]-1] = 0;
//                 p[1]--;
//                 grillContent[p[0]-1][p[1]-1] = p;
//                 console.log("Le pion avance de 1 case");
//             }else{
//                 console.log("La case suivante est occupée")
//             }
//         }else{
//             console.log("Le pion est déjà au bout");
//         }
//     }
//     if(p[2] == "b"){ // Mouvement pion noir
//         if(p[1]<8){
//             if(grillContent[p[0]-1][p[1]] == 0){
//                 grillContent[p[0]-1][p[1]-1] = 0;
//                 p[1]++;
//                 grillContent[p[0]-1][p[1]-1] = p;
//                 console.log("Le pion avance de 1 case");
//             }else{
//                 console.log("La case suivante est occupée")
//             }
//         }else{
//             console.log("Le pion est déjà au bout");
//         }
//     }
// }

let pionSelect;
let caseSelect;

function placeCheck(x,y){
    if(grillContent[x-1][y-1] == 0){
        if(pionSelect[2] == "w"){ // Mouvement pion blanc
            if((x == pionSelect[0]) && (y == pionSelect[1]-1)){
                grillContent[pionSelect[0]-1][pionSelect[1]-1] = 0;
                pionSelect[1]  = y;
                grillContent[pionSelect[0]-1][pionSelect[1]-1] = pionSelect;
                console.log("Le pion avance de 1 case");
            }else{return console.log("mouvement impossible")}
        }else{ // Mouvement pion noir
            if((x == pionSelect[0]) && (y == pionSelect[1]+1)){
                grillContent[pionSelect[0]-1][pionSelect[1]-1] = 0;
                pionSelect[1]  = y;
                grillContent[pionSelect[0]-1][pionSelect[1]-1] = pionSelect;
                console.log("Le pion avance de 1 case");
            }else{return console.log("mouvement impossible")}
        }
    }else{return console.log("case occupée")}
    pionSelect = 0;
}

function click(content,x,y){
    if(content != 0){
        // if(pionSelect[3] == "p"){
        // pionMove(pionSelect);
        // }
        pionSelect = content;
        console.log(pionSelect,x,y);
    }else{
        console.log(pionSelect,content,x,y);
        placeCheck(x,y);
    }
}

document.addEventListener("mousedown", (event) => {
    if (event.button === 0) {
        // let caseSelect;
        let mouseX = event.clientX;
        let mouseY = event.clientY;
        let pionX = 1+Math.floor((mouseX-1)/100);
        let pionY = 1+Math.floor((mouseY-1)/100);
        caseSelect = grillContent[pionX-1][pionY-1];
        click(caseSelect,pionX,pionY);
    }
}); 