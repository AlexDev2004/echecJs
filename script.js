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
    // Pions blancs
    pw1:[1,7,"w","p"],pw2:[2,7,"w","p"],pw3:[3,7,"w","p"],pw4:[4,7,"w","p"],
    pw5:[5,7,"w","p"],pw6:[6,7,"w","p"],pw7:[7,7,"w","p"],pw8:[8,7,"w","p"],
    // Pions Noirs
    pb1:[1,2,"b","p"],pb2:[2,2,"b","p"],pb3:[3,2,"b","p"],pb4:[4,2,"b","p"],
    pb5:[5,2,"b","p"],pb6:[6,2,"b","p"],pb7:[7,2,"b","p"],pb8:[8,2,"b","p"],

    // Autres pieces blanches
    tw1:[1,8,"w","t"],tw2:[8,8,"w","t"],
    fw1:[3,8,"w","f"],fw2:[6,8,"w","f"],
    hw1:[2,8,"w","h"],hw2:[7,8,"w","h"],
    kw:[5,8,"w","k"],qw:[4,8,"w","q"],
    // Autres pieces Noires
    tb1:[1,1,"b","t"],tb2:[8,1,"b","t"],
    fb1:[3,1,"b","f"],fb2:[6,1,"b","f"],
    hb1:[2,1,"b","h"],hb2:[7,1,"b","h"],
    kb:[5,1,"b","k"],qb:[4,1,"b","q"]
}

const grillContent =[
    [pions.tb1,pions.pb1,0,0,0,0,pions.pw1,pions.tw1],
    [pions.hb1,pions.pb2,0,0,0,0,pions.pw2,pions.hw1],
    [pions.fb1,pions.pb3,0,0,0,0,pions.pw3,pions.fw1],
    [pions.qb,pions.pb4,0,0,0,0,pions.pw4,pions.qw],
    [pions.kb,pions.pb5,0,0,0,0,pions.pw5,pions.kw],
    [pions.fb2,pions.pb6,0,0,0,0,pions.pw6,pions.fw2],
    [pions.hb2,pions.pb7,0,0,0,0,pions.pw7,pions.hw2],
    [pions.tb2,pions.pb8,0,0,0,0,pions.pw8,pions.tw2],
];

let pionSelect = [0,0,"w"];

function pionMove(content,x,y){ // Commandes du pion
    if(content == 0){ // Déplacement du pion
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
    }else{ // Le pion mange
        if(pionSelect[2] == "w"){ // Mouvement pion blanc
            if(((x == pionSelect[0]-1)||(x == pionSelect[0]+1)) && (y == pionSelect[1]-1)){
                grillContent[pionSelect[0]-1][pionSelect[1]-1] = 0;
                content[0] = -1;
                pionSelect[0] = x; 
                pionSelect[1] = y;
                grillContent[pionSelect[0]-1][pionSelect[1]-1] = pionSelect;
                console.log("Le pion avance de 1 case");
            }else{return console.log("mouvement impossible")}
        }else{ // Mouvement pion noir
            if(((x == pionSelect[0]-1)||(x == pionSelect[0]+1)) && (y == pionSelect[1]+1)){
                grillContent[pionSelect[0]-1][pionSelect[1]-1] = 0;
                content[0] = -1;
                pionSelect[0] = x; 
                pionSelect[1]  = y;
                grillContent[pionSelect[0]-1][pionSelect[1]-1] = pionSelect;
                console.log("Le pion avance de 1 case");
            }else{
                return console.log("mouvement impossible")
            }
        }
    }
    if(pionSelect[2] == "w"){
        pionSelect = [0,0,"b"];
    }else{
        pionSelect =[0,0,"w"];
    }
}
function tourMove(content,x,y){ // Commandes de la tour
        if((x == pionSelect[0]) || (y == pionSelect[1])){
            if(x>pionSelect[0]){
                for(let i=x-1;i>pionSelect[0];i--){
                    if(grillContent[i-1][pionSelect[1]-1] != 0){
                        return console.log("Mouvement impossible");
                    }
                }
            }else if(x<pionSelect[0]){
                for(let i=x+1;i<pionSelect[0];i++){
                    if(grillContent[i-1][pionSelect[1]-1] != 0){
                        return console.log("Mouvement impossible");
                    }
                }
            }
            if(y>pionSelect[1]){
                for(let i=y-1;i>pionSelect[1];i--){
                    if(grillContent[pionSelect[0]-1][i-1] != 0){
                        return console.log("Mouvement impossible");
                    }
                }
            }else if(y<pionSelect[1]){
                for(let i=y+1;i<pionSelect[1];i++){
                    if(grillContent[pionSelect[0]-1][i-1] != 0){
                        return console.log("Mouvement impossible");
                    }
                }
            }
            grillContent[pionSelect[0]-1][pionSelect[1]-1] = 0;
            if(content != 0){
                content[0] = -1
            }
            pionSelect[0] = x;
            pionSelect[1] = y;
            grillContent[pionSelect[0]-1][pionSelect[1]-1] = pionSelect;
            console.log("Le pion avance de 1 case");
        }else{
            return console.log("mouvement impossible")
        }
    if(pionSelect[2] == "w"){
        pionSelect = [0,0,"b"];
    }else{
        pionSelect =[0,0,"w"];
    }
}
function fouMove(content,x,y){ // Commandes du fou

    let check = false;
    for(let i=[pionSelect[0]+1,pionSelect[1]+1];i[0]<=8 && i[1]<=8;){
        if(i[0]==x && i[1]==y){
            check = true;
        }
        i[0]++;
        i[1]++;
    }
    for(let i=[pionSelect[0]-1,pionSelect[1]+1];i[0]>=1 && i[1]<=8;){
        if(i[0]==x && i[1]==y){
            check = true;
        }
        i[0]--;
        i[1]++;
    }
    for(let i=[pionSelect[0]-1,pionSelect[1]-1];i[0]>=1 && i[1]>=1;){
        if(i[0]==x && i[1]==y){
            check = true;
        }
        i[0]--;
        i[1]--;
    }
    for(let i=[pionSelect[0]+1,pionSelect[1]-1];i[0]<=8 && i[1]>=1;){
        if(i[0]==x && i[1]==y){
            check = true;
        }
        i[0]++;
        i[1]--;
    }

    if(check){
        if(x>pionSelect[0] && y>pionSelect[1]){
            for(let i=[x-1,y-1];i[0]>pionSelect[0] && i[1]>pionSelect[1];){
                if(grillContent[i[0]-1][i[1]-1] != 0){
                    return console.log("Mouvement impossible");
                }
                i[0]--;
                i[1]--;
            }
        }else if(x<pionSelect[0] && y>pionSelect[1]){
            for(let i=[x+1,y-1];i[0]<pionSelect[0] && i[1]>pionSelect[1];){
                if(grillContent[i[0]-1][i[1]-1] != 0){
                    return console.log("Mouvement impossible");
                }
                i[0]++;
                i[1]--;
            }
        }else if(x<pionSelect[0] && y<pionSelect[1]){
            for(let i=[x+1,y+1];i[0]<pionSelect[0] && i[1]<pionSelect[1];){
                if(grillContent[i[0]-1][i[1]-1] != 0){
                    return console.log("Mouvement impossible");
                }
                i[0]++;
                i[1]++;
            }
        }else{
           for(let i=[x-1,y+1];i[0]>pionSelect[0] && i[1]<pionSelect[1];){
                if(grillContent[i[0]-1][i[1]-1] != 0){
                    return console.log("Mouvement impossible");
                }
                i[0]--;
                i[1]++;
            }
        }

        grillContent[pionSelect[0]-1][pionSelect[1]-1] = 0;
        if(content != 0){
            content[0] = -1;
        }
        pionSelect[0] = x;
        pionSelect[1] = y;
        grillContent[pionSelect[0]-1][pionSelect[1]-1] = pionSelect;
        console.log("Le pion avance de 1 case");
    
        if(pionSelect[2] == "w"){
            pionSelect = [0,0,"b"];
        }else{
            pionSelect =[0,0,"w"];
        }
    }
}
function queenMove(content,x,y){ // Commandes du fou

    let check = false;
    if((x == pionSelect[0]) || (y == pionSelect[1])){
        check = true;
    }
    for(let i=[pionSelect[0]+1,pionSelect[1]+1];i[0]<=8 && i[1]<=8;){
        if(i[0]==x && i[1]==y){
            check = true;
        }
        i[0]++;
        i[1]++;
    }
    for(let i=[pionSelect[0]-1,pionSelect[1]+1];i[0]>=1 && i[1]<=8;){
        if(i[0]==x && i[1]==y){
            check = true;
        }
        i[0]--;
        i[1]++;
    }
    for(let i=[pionSelect[0]-1,pionSelect[1]-1];i[0]>=1 && i[1]>=1;){
        if(i[0]==x && i[1]==y){
            check = true;
        }
        i[0]--;
        i[1]--;
    }
    for(let i=[pionSelect[0]+1,pionSelect[1]-1];i[0]<=8 && i[1]>=1;){
        if(i[0]==x && i[1]==y){
            check = true;
        }
        i[0]++;
        i[1]--;
    }

    if(check){
        if(x>pionSelect[0] && y>pionSelect[1]){
            for(let i=[x-1,y-1];i[0]>pionSelect[0] && i[1]>pionSelect[1];){
                if(grillContent[i[0]-1][i[1]-1] != 0){
                    return console.log("Mouvement impossible");
                }
                i[0]--;
                i[1]--;
            }
        }else if(x<pionSelect[0] && y>pionSelect[1]){
            for(let i=[x+1,y-1];i[0]<pionSelect[0] && i[1]>pionSelect[1];){
                if(grillContent[i[0]-1][i[1]-1] != 0){
                    return console.log("Mouvement impossible");
                }
                i[0]++;
                i[1]--;
            }
        }else if(x<pionSelect[0] && y<pionSelect[1]){
            for(let i=[x+1,y+1];i[0]<pionSelect[0] && i[1]<pionSelect[1];){
                if(grillContent[i[0]-1][i[1]-1] != 0){
                    return console.log("Mouvement impossible");
                }
                i[0]++;
                i[1]++;
            }
        }else if(x>pionSelect[0] && y<pionSelect[1]){
           for(let i=[x-1,y+1];i[0]>pionSelect[0] && i[1]<pionSelect[1];){
                if(grillContent[i[0]-1][i[1]-1] != 0){
                    return console.log("Mouvement impossible");
                }
                i[0]--;
                i[1]++;
            }
        }else if(x==pionSelect[0] && y>pionSelect[1]){
            for(let i=[x,y-1];i[1]>pionSelect[1];){
                if(grillContent[i[0]-1][i[1]-1] != 0){
                    return console.log("Mouvement impossible");
                }
                i[1]--;
            }
        }else if(x==pionSelect[0] && y<pionSelect[1]){
            for(let i=[x,y+1];i[1]<pionSelect[1];){
                if(grillContent[i[0]-1][i[1]-1] != 0){
                    return console.log("Mouvement impossible");
                }
                i[1]++;
            }
        }else if(x>pionSelect[0] && y==pionSelect[1]){
            for(let i=[x-1,y];i[0]>pionSelect[0];){
                if(grillContent[i[0]-1][i[1]-1] != 0){
                    return console.log("Mouvement impossible");
                }
                i[0]--;
            }
        }else if(x<pionSelect[0] && y==pionSelect[1]){
           for(let i=[x+1,y];i[0]<pionSelect[0];){
                if(grillContent[i[0]-1][i[1]-1] != 0){
                    return console.log("Mouvement impossible");
                }
                i[0]++;
            }
        }

        grillContent[pionSelect[0]-1][pionSelect[1]-1] = 0;
        if(content != 0){
            content[0] = -1;
        }
        pionSelect[0] = x;
        pionSelect[1] = y;
        grillContent[pionSelect[0]-1][pionSelect[1]-1] = pionSelect;
        console.log("Le pion avance de 1 case");
    
        if(pionSelect[2] == "w"){
            pionSelect = [0,0,"b"];
        }else{
            pionSelect =[0,0,"w"];
        }
    }
}
function kingMove(content,x,y){ // Commandes de la tour
    let check = false;
    if(x==pionSelect[0]+1){
        if(y==pionSelect[1]+1){
            check = true;
        }else if(y==pionSelect[1]){
            check = true;
        }else if(y==pionSelect[1]-1){
            check = true;
        }
    }else if(x==pionSelect[0]){
        if(y==pionSelect[1]+1){
            check = true;
        }else if(y==pionSelect[1]-1){
            check = true;
        }
    }else if(x==pionSelect[0]-1){
        if(y==pionSelect[1]+1){
            check = true;
        }else if(y==pionSelect[1]){
            check = true;
        }else if(y==pionSelect[1]-1){
            check = true;
        }
    }
    if(check){
        grillContent[pionSelect[0]-1][pionSelect[1]-1] = 0;
        if(content != 0){
            content[0] = -1
        }
        pionSelect[0] = x;
        pionSelect[1] = y;
        grillContent[pionSelect[0]-1][pionSelect[1]-1] = pionSelect;
        console.log("Le pion avance de 1 case");
    }else{
        return console.log("mouvement impossible")
    }
    if(pionSelect[2] == "w"){
        pionSelect = [0,0,"b"];
    }else{
        pionSelect =[0,0,"w"];
    }
}

function click(content,x,y){
    if((content != 0) && (content[2] == pionSelect[2])){
        pionSelect = content;
        console.log(pionSelect,x,y);
    }else{
        if(pionSelect[0] == 0){}
        else{
            if(pionSelect[3] == "p"){
                console.log(pionSelect,content,x,y);
                pionMove(content,x,y);
            }else if(pionSelect[3] == "t"){
                console.log(pionSelect,content,x,y);
                tourMove(content,x,y);
            }else if(pionSelect[3] == "f"){
                console.log(pionSelect,content,x,y);
                fouMove(content,x,y);
            }else if(pionSelect[3] == "q"){
                console.log(pionSelect,content,x,y);
                queenMove(content,x,y);
            }else if(pionSelect[3] == "k"){
                console.log(pionSelect,content,x,y);
                kingMove(content,x,y);
            }else{
                return console.log("pion inexistant");
            }
        }
    }
}

document.addEventListener("mousedown", (event) => {
    if (event.button === 0) {
        // let caseSelect;
        let mouseX = event.clientX;
        let mouseY = event.clientY;
        let pionX = 1+Math.floor((mouseX-1)/100);
        let pionY = 1+Math.floor((mouseY-1)/100);
        let caseSelect = grillContent[pionX-1][pionY-1];
        click(caseSelect,pionX,pionY);
    }
}); 