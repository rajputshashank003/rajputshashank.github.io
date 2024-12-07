let main = document.querySelector(".main");

let count = 1; // used to define colours 


for(let x = 0; x < 64; x++){
    let div = document.createElement("div");
    div.className = `div-${x}`;
    div.classList.add("inner-div");

    if(x%8 == 0){
        count == 0 ? count = 1 : count = 0;
    }

    if(count == 1){
        div.style.backgroundColor = "#769656";
        count = 0;
    } else {
        div.style.backgroundColor = "#eeeed2";
        count = 1;
    }

    if(x == 0 || x == 7 ){
        let img = document.createElement("img");
        img.src= "elephantb.png";
        img.classList.add(`elephant`);
        img.classList.add(`black`);
        img.classList.add("sizeOfPieces");
        div.appendChild(img);
    }

    if(x == 4){
        let img = document.createElement("img");
        img.src= "kingb.png";
        img.classList.add(`king`);
        img.classList.add(`black`);
        img.classList.add("sizeOfPieces");
        div.appendChild(img);
    }
    if(x >= 8 && x < 16){ // used to set pawns on their place 
        let img = document.createElement("img");
        img.src= "pawn-black.png";
        img.classList.add(`pawns`);
        img.classList.add(`black`);
        img.classList.add("sizeOfPieces");
        div.appendChild(img);
    } 
    

    if(x == 2 || x == 5){
        let img = document.createElement("img");
        img.src= "camelb.png";
        img.classList.add(`camel`);
        img.classList.add(`black`);
        img.classList.add("sizeOfPieces");
        div.appendChild(img);
    }
    if(x == 1 || x == 6){
        let img = document.createElement("img");
        img.src= "horseb.png";
        img.classList.add(`horse`);
        img.classList.add(`black`);
        img.classList.add("sizeOfPieces");
        div.appendChild(img);
    }
    if(x == 3){
        let img = document.createElement("img");
        img.src= "ministerb.png";
        img.classList.add("minister");
        img.classList.add(`black`);
        img.classList.add("sizeOfPieces");
        div.appendChild(img);
    }
    
// whites start -----------------------------

    if(x >= 48 && x <= 55){
        let img = document.createElement("img");
        img.src= "pawnw.png";
        img.classList.add("pawns-2");
        img.classList.add(`white`);
        img.classList.add("sizeOfPieces");
        div.appendChild(img);
    }

    if(x == 63 || x == 56){
        let img = document.createElement("img");
        img.src= "elephantw.png";
        img.classList.add("elephant");
        img.classList.add(`white`);
        img.classList.add("sizeOfPieces");
        div.appendChild(img);
    }
    if(x == 62 || x == 57){
        let img = document.createElement("img");
        img.src= "horsew.png";
        img.classList.add("horse");
        img.classList.add(`white`);
        img.classList.add("sizeOfPieces");
        div.appendChild(img);
    }

    if(x == 61 || x == 58){
        let img = document.createElement("img");
        img.src= "camelw.png";
        img.classList.add("camel");
        img.classList.add(`white`);
        img.classList.add("sizeOfPieces");
        div.appendChild(img);
    }

    if(x == 60){
        let img = document.createElement("img");
        img.src= "ministerw.png";
        img.classList.add("minister");
        img.classList.add(`white`);
        img.classList.add("sizeOfPieces");
        div.appendChild(img);
    }
    if(x == 59){
        let img = document.createElement("img");
        img.src= "kingw.png";
        img.classList.add("king");
        img.classList.add(`white`);
        img.classList.add("sizeOfPieces");
        div.appendChild(img);
    }

    main.appendChild(div);
}

let boxes = document.querySelectorAll(".inner-div");
let alreadyselected ; // it is an index for the div[alreadyselected] ;
let asInd ;
let lstCol = "white";

function forPawnsBlacks(index){
    if(alreadyselected && alreadyselected.classList.contains("pawns") && !alreadyselected.classList.contains(lstCol)){
        if(asInd >=8 && asInd <= 15 && index == asInd +8 + 8 && boxes[index].childNodes.length == 0 ){
            lstCol = boxes[asInd].childNodes[0].classList[1];
            boxes[index].appendChild(alreadyselected);
            // console.log("moved");
            boxes[index].childNodes[0].classList.remove("img-extrashow");
            asInd = undefined;
            alreadyselected = undefined;
        } else if(index == asInd + 8 && boxes[index].childNodes.length == 0){
            lstCol = boxes[asInd].childNodes[0].classList[1];
            boxes[index].appendChild(alreadyselected);
            // console.log("moved");
            boxes[index].childNodes[0].classList.remove("img-extrashow");
            asInd = undefined;
            alreadyselected = undefined;
            moveCount = 1;

        } else if((index == asInd + 7) || (index == asInd + 9)){
            if(boxes[index].childNodes.length != 0 && boxes[index].childNodes[0].classList[1] != boxes[asInd].childNodes[0].classList[1] ){
                lstCol = boxes[asInd].childNodes[0].classList[1];
                boxes[index].removeChild(boxes[index].firstElementChild);
                boxes[index].appendChild(alreadyselected);
                // console.log("removed");
                boxes[index].childNodes[0].classList.remove("img-extrashow");
                asInd = undefined;
                alreadyselected = undefined;
                moveCount = 1;
            } else {
                boxes[asInd].childNodes[0].classList.remove("img-extrashow");
                asInd = undefined;
                alreadyselected = undefined;
            }
        } else if(asInd != index){
            boxes[asInd].childNodes[0].classList.remove("img-extrashow");
            asInd = undefined;
            alreadyselected = undefined;
            // console.log("wrong move ");
        } 
    }  else if(alreadyselected && alreadyselected.classList.contains(lstCol)){
        boxes[asInd].childNodes[0].classList.remove("img-extrashow");
        asInd = undefined;
        alreadyselected = undefined;
    }
}

function forPawnsWhites(index){
    if(alreadyselected && alreadyselected.classList.contains("pawns-2") && !alreadyselected.classList.contains(lstCol)){
        if(asInd >= 48 && asInd <= 55 && index == asInd -8 - 8 && boxes[index].childNodes.length == 0 ){
            lstCol = boxes[asInd].childNodes[0].classList[1];
            boxes[index].appendChild(alreadyselected);
            boxes[index].childNodes[0].classList.remove("img-extrashow");
            asInd = undefined;
            alreadyselected = undefined;
        } else if(index == asInd - 8 && boxes[index].childNodes.length == 0){
            lstCol = boxes[asInd].childNodes[0].classList[1];
            boxes[index].appendChild(alreadyselected);
            boxes[index].childNodes[0].classList.remove("img-extrashow");
            // console.log("moved");
            asInd = undefined;
            alreadyselected = undefined;
        } else if((index == asInd - 7) || (index == asInd - 9)){
            if(boxes[index].childNodes.length != 0 && boxes[index].childNodes[0].classList[1] != boxes[asInd].childNodes[0].classList[1] ){
                lstCol = boxes[asInd].childNodes[0].classList[1];

                boxes[index].removeChild(boxes[index].firstElementChild);
                boxes[index].appendChild(alreadyselected);
                boxes[index].childNodes[0].classList.remove("img-extrashow");
                // console.log("removed");
                asInd = undefined;
                alreadyselected = undefined;
            } else {
                // console.log("any piece not available to remove !");
                boxes[asInd].childNodes[0].classList.remove("img-extrashow");
                asInd = undefined;
                alreadyselected = undefined;
            }
        } else if(asInd != index){
            boxes[asInd].childNodes[0].classList.remove("img-extrashow");
            // boxes[index].childNodes[0].classList.remove("img-extrashow");
            asInd = undefined;
            alreadyselected = undefined;
            // console.log("wrong move ");
        }
    } else if(alreadyselected && alreadyselected.classList.contains(lstCol)){
        boxes[asInd].childNodes[0].classList.remove("img-extrashow");
        asInd = undefined;
        alreadyselected = undefined;
    }
}

function moveFunc1(index){
    if(!alreadyselected.classList.contains(lstCol)){
        if(boxes[index].childNodes.length == 0){
            lstCol = boxes[asInd].childNodes[0].classList[1];
            boxes[asInd].childNodes[0].classList.remove("img-extrashow");
            // boxes[index].childNodes[0].classList.remove("img-extrashow");
            boxes[index].appendChild(alreadyselected);

        } else if(boxes[index].childNodes.length != 0 && boxes[index].childNodes[0].classList[1] != boxes[asInd].childNodes[0].classList[1]){
            lstCol = boxes[asInd].childNodes[0].classList[1];
            boxes[asInd].childNodes[0].classList.remove("img-extrashow");
            boxes[index].childNodes[0].classList.remove("img-extrashow");
            if(boxes[index].firstChild.classList.contains("king")){
                if(boxes[index].firstChild.classList.contains("black")){
                    window.alert("white wins");
                } else {
                    window.alert("black wins");
                }
            }
            boxes[index].removeChild(boxes[index].firstElementChild);
            boxes[index].appendChild(alreadyselected);

            // console.log("removed");
        } else if(boxes[index].childNodes.length != 0 &&boxes[index].childNodes[0].classList[1] == boxes[asInd].childNodes[0].classList[1]
           ){

            boxes[asInd].childNodes[0].classList.remove("img-extrashow");
            alreadyselected = undefined;
            asInd = undefined;
            // console.log("reselect anything ");
        }

    }
        
}

function forCommmonElephant(index){
    let temparr = [0,8,16,24,32,40,48,56,64];
    let hei ;
    let hsi ;
    for(let ind = 0;ind<temparr.length;ind++){
        if(asInd - temparr[ind] < 0){
            hei = temparr[ind]-1;
            hsi = temparr[ind]-8;
            break;
        }
    }
    let col = asInd - hsi;
    let row = hsi/8;
    let vsi = asInd - (row * 8);
    let vei = asInd + (8*(8 - (row + 1)));

    if(index <= hei && index >= hsi){
        if(asInd <= index){
            let len = asInd+1 ;
            while(len <= index){
                if(len == index){
                    moveFunc1(index);
                    alreadyselected = undefined;
                    asInd = undefined;
                    return true;
                }  else if(boxes[len] && boxes[len].childNodes.length == 1){
                    // console.log(boxes[len]);
                    boxes[asInd].childNodes[0].classList.remove("img-extrashow");
                    boxes[index].childNodes[0].classList.remove("img-extrashow");                    
                    alreadyselected = undefined;
                    asInd = undefined;
                    return false;
                }
                len += 1;
            }
        } else {
            let len = asInd-1 ;
            while(len >= index){
                if(len == index){
                    moveFunc1(index);

                    alreadyselected = undefined;
                    asInd = undefined;
                    return true;
                }  else if(boxes[len] && boxes[len].childNodes.length == 1){
                    // console.log(boxes[len]);
                    boxes[asInd].childNodes[0].classList.remove("img-extrashow");
                    boxes[index].childNodes[0].classList.remove("img-extrashow"); 
                    alreadyselected = undefined;
                    asInd = undefined;
                    return false;
                }
                len -= 1;
            }
        }
    } else {
        let len = asInd+8 ;
        while(len <= index){
            if(len == index ){
                moveFunc1(index);
                
                alreadyselected = undefined;
                asInd = undefined;
                return true;
            }  else if(boxes[len] && boxes[len].childNodes.length == 1){
                // console.log(boxes[len]);
                boxes[asInd].childNodes[0].classList.remove("img-extrashow");
                // boxes[index].childNodes[0].classList.remove("img-extrashow"); 
                alreadyselected = undefined;
                asInd = undefined;
                return false;
            }
            len += 8;
        }

        

        len = asInd-8 ;
        while(index <= len){
            if(len == index ){
                moveFunc1(index);
                
                alreadyselected = undefined;
                asInd = undefined;
                return true;
            } else if(boxes[len] && boxes[len].childNodes.length == 1){
                // console.log(boxes[len]);
                boxes[asInd].childNodes[0].classList.remove("img-extrashow");
                // boxes[index].childNodes[0].classList.remove("img-extrashow"); 
                alreadyselected = undefined;
                asInd = undefined;
                return false;
            }
            len -= 8;
        }
    }
}

function forElephant(index ){
    
    if(alreadyselected && alreadyselected.classList.contains("elephant") ){      
        forCommmonElephant(index);
    }  // at the time when you select place when you want to set your elephant 

}

function utilCamel1(index,num){
    let newlen = asInd + num;
            let x = [];
            let y = asInd ;
            while(y <= index){
                x.push(y);
                y += num;
            }
    if(x.includes(index)){
        while(newlen <= index){
            if(newlen == index ){
                moveFunc1(index);
               
                alreadyselected = undefined;
                asInd = undefined;
                return true;
            } else if(boxes[newlen] && boxes[newlen].childNodes.length == 1){
                boxes[asInd].childNodes[0].classList.remove("img-extrashow");
                // alreadyselected = undefined;
                // asInd = undefined;
                return false;
            }
            newlen += num;
        }
    } 
}

function utilCamel2(index,num){
    let newlen = asInd - num;
            let x = [];
            let y = asInd ;
            while(y >= index){
                x.push(y);
                y -= num;
            }
    if(x.includes(index)){
        while(newlen >= index){
            if(newlen == index ){
                moveFunc1(index);
                alreadyselected = undefined;
                asInd = undefined;
                return true;
            } else if(boxes[newlen] && boxes[newlen].childNodes.length == 1){
                boxes[asInd].childNodes[0].classList.remove("img-extrashow");
                // alreadyselected = undefined;
                // asInd = undefined;
                return false;
            }
            newlen -= num;
        }
    }
}

function forCamel(index){
    
    if(alreadyselected && index != asInd && alreadyselected.classList.contains("camel")){
        if(asInd < index){
            if(utilCamel1(index,7) || utilCamel1(index,9)){
                return true;
            } else {
                boxes[asInd].childNodes[0].classList.remove("img-extrashow");
                asInd = undefined;
                alreadyselected = undefined;
                return ;
            }
        } else if(asInd > index ) {
            if(utilCamel2(index,7) || utilCamel2(index,9)){
                return true;
            } else {
                boxes[asInd].childNodes[0].classList.remove("img-extrashow");
                asInd = undefined;
                alreadyselected = undefined;
                return ;
            }
        }
    }
}

function selectFunc(index){
    
    if(!alreadyselected && boxes[index].childNodes.length != 0){
        alreadyselected = boxes[index].childNodes[0];
        // console.log("hello");
        
        asInd = index;
        // console.log( " selected  " + alreadyselected.classList);
        boxes[asInd].childNodes[0].classList.add("img-extrashow");
        // console.log(alreadyselected);
    } 
}

function forKing(index){
    if(alreadyselected && alreadyselected.classList.contains("king")){
        if(asInd - 8 == index || asInd + 8 == index || asInd + 1 == index || asInd - 1 == index
            || asInd +9 == index || asInd - 9 == index || asInd -7 == index || asInd +7 == index){
            moveFunc1(index);
            alreadyselected = undefined;
            asInd = undefined;
        }
    }
}

function forHorse(index){
    if(alreadyselected && alreadyselected.classList.contains("horse")){
        if(asInd + 1 + 8 + 8 == index || asInd - 1 + 8 + 8 == index || asInd + 1 - 8 - 8 == index 
            || asInd - 1 - 8 - 8 == index || asInd + 1 + 1 + 8 == index || asInd - 1 - 1 + 8 == index 
            || asInd + 1 + 1 - 8 == index || asInd - 1 - 1 - 8 == index){
            moveFunc1(index);
            alreadyselected = undefined;
            asInd = undefined;
        } else if(index != asInd){
            boxes[asInd].childNodes[0].classList.remove("img-extrashow");
            alreadyselected = undefined;
            asInd = undefined;
        }
    }
}

function forMinisterCamel(index){
    if(asInd < index){
        let num = 7;
        if(utilCamel1(index,num)){
            return true;
        }
        num = 9;
        if(utilCamel1(index,num)){
            return true;
        }

    } else if(asInd > index ) {
        let num = 7;
        if(utilCamel2(index,num)){
            return true;
        }
        num = 9;
        if(utilCamel2(index,num)){
            return true;
        }
    }
    return false;
}

function forMinisterElephant(index){
    forCommmonElephant(index);
    return false;// at the time whe
}

function forMinister(index){
    if(alreadyselected && alreadyselected.classList.contains("minister")){
        if(forMinisterCamel(index)){
            return true;
        } else if(forMinisterElephant(index)){
            return true;
        }
    }
}

function addEventListenersForBoxes(index) {
    boxes[index].addEventListener("click", () => {
        selectFunc(index);
        
        forElephant(index);
        forPawnsBlacks(index);
        forPawnsWhites(index);
        forCamel(index);
        forKing(index); // Added forKing function
        forHorse(index);
        forMinister(index);
    });
}

for (let i = 0; i < 64; i++) {
    addEventListenersForBoxes(i);
}

let reset = document.querySelector(".reset");

reset.addEventListener("click" , () => {
    location.reload();
} );