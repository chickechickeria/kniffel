var SpielController = {
    aktuellerSpieler,
    wuerfel1 = new Wuerfel(1),
    wuerfel2 = new Wuerfel(2),
    wuerfel3 = new Wuerfel(3),
    wuerfel4 = new Wuerfel(4),
    wuerfel5 = new Wuerfel(5),
    startenSpiel = function(){
        document.location = "einstellungen.html";
    },
    spielPausieren = function(){
        document.location = "start.html";
    },
    spielFortsetzen = function(){
        document.location = "spiel.html";
    },
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
    },
    eingebenSpielerName = function(){
        spieler1.name = document.getElementById("NameSpieler1");
        spieler2.name = document.getElementById("NameSpieler2");
        spieler3.name = document.getElementById("NameSpieler3");
        spieler4.name = document.getElementById("NameSpieler4");
        spieler5.name = document.getElementById("NameSpieler5");
    }
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
    },
    beginneZug = function(){
        aktuellerSpieler.offeneWuerfe = 3;
    }
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
    }
    beendenWurf = function(){
        aktuellerSpieler.offeneWuerfe = 0;
        
    }

}