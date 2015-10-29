function wuerfeln(){
var wBild;

for (var i=0; i<6; i++){
var wErgebnis = Math.floor(Math.random() * 6) + 1;


switch (wErgebnis){
    case 1:
        wBild = "/bilder/Einser.png";
        break;
    case 2:
        wBild = "/bilder/Zweier.png";
        break;
    case 3:
        wBild = "/bilder/Dreier.png";
        break;
    case 4:
        wBild = "/bilder/Vierer.png";
        break;
    case 5:
        wBild = "/bilder/Fuenfer.png";
        break;
    case 6:
        wBild = "/bilder/Sechser.png";
        break;
    }
    
    switch (i) {
        case 0:
            document.getElementById("w1").setAttribute("src", wBild);
            break;
        case 1:
            document.getElementById("w2").setAttribute("src", wBild);
            break;
        case 2:
            document.getElementById("w3").setAttribute("src", wBild);
            break;    
        case 3:
            document.getElementById("w4").setAttribute("src", wBild);
            break;   
        case 4:
            document.getElementById("w5").setAttribute("src", wBild);
            break;    
            
    }
}
};