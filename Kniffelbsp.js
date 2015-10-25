function Kniffel(w1,w2,w3,w4,w5){

if (w1 == w2 == w3 == w4 == w5){
return 50;
}
else return 0;
}

function Einser(w1,w2,w3,w4,w5){

var i = 0;

if (w1 == 1){
i++;
}

if (w2 == 1){
i++;
}

if (w3 == 1){
i++;
}

if (w4 == 1){
i++;
}

if (w5 == 1){
i++;
}

return i;

}

function Dreierpasch(w1,w2,w3,w4,w5){ //Vorraussetzung Würfel sind nach Augenzahl sortiert

if (w1 == w2){
if (w2 == w3){
return w1+w2+w3+w4+w5;
}
}

if (w2 == w3){
if (w3 == w4){
return w1+w2+w3+w4+w5;
}
}

if (w3 == w4){
if (w4 == w5){
return w1+w2+w3+w4+w5;
}
}

else return false;

}

function klStrasse(w1,w2,w3,w4,w5){

if (w1+1 == w2) && (w2+1 == w3) && (w3+1 == w4){
return 30;
}

if (w2+1 == w3) && (w3+1 == w4) && (w4+1 == w5) {
return 30;
}

else return 0;

}


