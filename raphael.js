function wuerfel (nummer) {
    this.wuerfelNr = nummmer;
    this.wert = 1;
    this.aktiv = true
}

var SpielController = function() {
    var aktuellerSpieler;
    var wuerfel1 = new wuerfel(1);
    var wuerfel2 = new wuerfel(2);
    var wuerfel3 = new wuerfel(3);
    var wuerfel4 = new wuerfel(4);
    var wuerfel5 = new wuerfel(5);
    startenSpiel = function(){
        document.location = "einstellungen.html";
    };
    spielPausieren = function(){
        document.location = "start.html";
    };
    spielFortsetzen = function(){
        document.location = "spiel.html";
    };
    festlegenSpielerAnzahl = function(anzahl){
        spielerAnzahl = anzahl;
        for(var i = 0; i< anzahl; i++){
              if(i===0){
              var spieler1 = new spieler("Spieler1",1)
              }
              if(i===1){
              var spieler2 = new spieler("Spieler2",2)
              }
              if(i===2){
              var spieler3 = new spieler("Spieler3",3)
              }
              if(i===3){
              var spieler4 = new spieler("Spieler4",4)
              }
              if(i===4){
              var spieler5 = new spieler("Spieler5",5)
              }
        }
    };
    eingebenSpielerName = function(){
        spieler1.name = document.getElementById("NameSpieler1").value;
        spieler2.name = document.getElementById("NameSpieler2").value;
        spieler3.name = document.getElementById("NameSpieler3").value;
        spieler4.name = document.getElementById("NameSpieler4").value;
        spieler5.name = document.getElementById("NameSpieler5").value;
    };
    auswählenSpieler = function(){
          if(aktuellerSpieler.SpielerNr === spielerAnzahl){
              aktuellerSpieler = spieler1;
          }else{
              if(aktuellerSpieler.SpielerNr === 1){
                aktuellerSpieler = spieler2;
              }
              if(aktuellerSpieler.SpielerNr === 2){
                aktuellerSpieler = spieler3;
              }
              if(aktuellerSpieler.SpielerNr === 3){
                aktuellerSpieler = spieler4;
              }
              if(aktuellerSpieler.SpielerNr === 4){
                aktuellerSpieler = spieler5;
              }
          }
    };
    beginneZug = function(){
        aktuellerSpieler.offeneWuerfe = 3;
    };
    wuerfel = function(){
        if(würfel1.aktiv){
            wuerfel1.berechneWerte;
        }
        if(würfel2.aktiv){
            wuerfel2.berechneWerte;
        }
        if(würfel3.aktiv){
            wuerfel3.berechneWerte;
        }
        if(würfel4.aktiv){
            wuerfel4.berechneWerte;
        }
        if(würfel5.aktiv){
            wuerfel5.berechneWerte;
        }
    };
    beendenWurf = function(){
        aktuellerSpieler.offeneWuerfe = 0;
        
    }

}

