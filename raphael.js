//Wuerfel/////////////////////////////////////////////////////////////////

function wuerfel (nummer) {
    this.wuerfelNr = nummmer;
    this.wert = 1;
    this.aktiv = true;
    this.getWuerfelNr = function(){
        return this.wuerfelNr;
    };
    this.setWuerfelNr =function(nr){
        this.wuerfelNr = nr;
    };
    this.getWert = function(){
        return this.wert;
    };
    this.setWert = function(wert){
        this.wert = wert;
    };
    this.isAktiv = function(){
        return this.aktiv;
    };
    this.setAktiv = function(boolean){
        this.wert = boolean;
    };
    this.berechneWert = function(){
        var wertNeu = Math.floor(Math.random() * 6) + 1;
        this.wert = wertNeu;
    };
    this.notify =function(){
        
    }
}

//Spieler////////////////////////////////////////////////////////////////

function spieler (name, spielerNummer) {
    this.name = name;
    this.spielerNummer = spielerNummer;
    this.punkte = 0;
    this.position = 0;
    this.offeneWuerfe = 0;
    this.punktezettel = new Punktezettel;
    this.getName = function(){
        return this.name;
    };
    this.setName =function(name){
        this.name = name;
    };
    this.getSpielerNummer = function(){
        return this.spielerNummer;
    };
    this.setSpielerNummer =function(spielerNummer){
        this.spielerNummer = spielerNummer;
    };
    this.getPunke = function(){
        return this.punkte;
    };
    this.setPunkte =function(punkte){
        this.punkte = punkte;
    };
    this.getOffenWuerfe = function(){
        return this.offeneWuerfe;
    };
    this.setOffenWuerfe =function(offeneWuerfe){
        this.offeneWuerfe = offeneWuerfe;
    };
    this.getPosition = function(){
        return this.name;
    };
    this.setPosition =function(position){
        this.position = position;
    };
    this.getPunktezettel = function(){
        return this.punktezettel;
    };
    this.setPunktezettel = function(pZettel){
        this.punktezettel = pZettel;
    };
    this.pruefeOffeneWuerfe = function(){
        if(this.getOffenWuerfe() === 3){
            return false;
        }
        else{
            return true;
        }
    };
    this.abziehenOffeneWuerfe = function(){
        this.offeneWuerfe--;
    }
    this.notify = function(){
        
    };
}

//Punktezettel/////////////////////////////////////////////////////////

function Punktezettel (){
    this.summeOben = 0;
    this.summeUnten = 0;
    this.summeGesamt = 0;
    this.punktefelder = [
        var einser = new Einser();
        var zweier = new Zweier();
        var dreier = new Dreier();
        var vierer = new Vierer();
        var fuenfer = new Fuenfer();
        var sechser = new Sechser();
        var dreierpasch = new Dreierpasch();
        var viererpasch = new Viererpasch();
        var fullhouse = new FullHouse();
        var kleineStrasse = new KleineStrasse();
        var grosseStrasse = new GrosseStrasse();
        var kniffel = new Kniffel();
        var chance = new Chance();]
    
}

//Punktefeld/////////////////////////////////////////////////////////

function Punktefeld (){}
Punktefeld.prototype.punkte = 0;
Punktefeld.prototype.belegt = false;
this.getPunke = function(){
        return this.punkte;
    };
    this.setPunkte =function(punkte){
        this.punkte = punkte;
    };
this.isBelegt = function(){
        return this.belegt;
    };
    this.setBelegt =function(boolean){
        this.belegt = boolean;
    };

//Einser/////////////////////////////////////////////////////////////

function Einser(){}
Einser.prototype = new Punktefeld();
    this.auswerten = function(wurf){
        if(wurf[0] === 0){
            this.setPunkte(0);
            this.setBelegt(true);
        }
        else{
            this.punkte = wurf[0] * 1;
            this.setBelegt(true);
        }
    }
}



//SpielController/////////////////////////////////////////////////////////

var SpielController = function() {
    var aktuellerSpieler;
    wuerfel1 = new wuerfel(1);
    wuerfel2 = new wuerfel(2);
    wuerfel3 = new wuerfel(3);
    wuerfel4 = new wuerfel(4);
    wuerfel5 = new wuerfel(5);
    startenSpiel = function(){
        document.getElementById("start").style="display:none";
        document.getElementById("einstellungen").style="display:block";
        //view einstellungen
    };
    spielPausieren = function(){
        //view Start
    };
    spielFortsetzen = function(){
        //view Spiel
    };
    festlegenSpielerAnzahl = function(anzahl){
        spielerAnzahl = anzahl;
        for(var i = 0; i< anzahl; i++){
              if(i===0){
              var spieler1 = new spieler("Spieler1",1);
              document.getElementById("s1").style="display:block";
              }
              if(i===1){
              var spieler2 = new spieler("Spieler2",2);
              document.getElementById("s2").style="display:block";
              }
              if(i===2){
              var spieler3 = new spieler("Spieler3",3);
              document.getElementById("s3").style="display:block";
              }
              if(i===3){
              var spieler4 = new spieler("Spieler4",4);
              document.getElementById("s4").style="display:block";
              }
              if(i===4){
              var spieler5 = new spieler("Spieler5",5);
              document.getElementById("s5").style="display:block";
              }
            
        }
    };
    eingebenSpielerName = function(){
        spieler1.setName(document.getElementById("NameSpieler1").value);
        spieler2.name = document.getElementById("NameSpieler2").value;
        spieler3.name = document.getElementById("NameSpieler3").value;
        spieler4.name = document.getElementById("NameSpieler4").value;
        spieler5.name = document.getElementById("NameSpieler5").value;
        
        beginneZug();
    };
    auswaehlenSpieler = function(){
          if(aktuellerSpieler == undefined){
              aktuellerSpieler=spieler1;
          }
          else if(aktuellerSpieler.SpielerNr === spielerAnzahl){
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
        auswaehlenSpieler();
        //öffen View Spiel
    };
    wuerfel = function(){
        if(würfel1.aktiv){
            wuerfel1.berechneWerte();
        }
        if(würfel2.aktiv){
            wuerfel2.berechneWerte();
        }
        if(würfel3.aktiv){
            wuerfel3.berechneWerte();
        }
        if(würfel4.aktiv){
            wuerfel4.berechneWerte();
        }
        if(würfel5.aktiv){
            wuerfel5.berechneWerte();
        }
    };
    beendenWurf = function(){
        aktuellerSpieler.offeneWuerfe = 0; 
    };
    auwaehlenPunktefeld = function(id){
        var gewaehltesPunktefeld = document.getElementById(id);
        
        for(var i = 0; i < aktuellerSpieler.punktezettel.punktefelder.length;i++)
        {
            if(i === id)
            {
                aktuellerSpieler.punktezettel.punktefelder[i].
                aktuellerSpieler.punktezettel.punktefelder[i].auswerten;
            }
        }
 
    };
    berechnePosition = function(){
        
        var ranking = []
        
        for(var i= 0; i < spielerAnzahl;i++){
            if(i===0){
                ranking[i] = spieler1.getPunke();
            }
            if(i===1){
                ranking[i] = spieler2.getPunke();
            }
            if(i===2){
                ranking[i] = spieler3.getPunke();
            }
            if(i===3){
                ranking[i] = spieler4.getPunke();
            }
            if(i===4){
                ranking[i] = spieler5.getPunke();
            }
        }
        
    }

}

//PunkteController////////////////////////////////////////////////////////

 var PunkteController = function(){
     berechneSummeOben = function(){
         
     };
     berechneSummeUnten = function(){
         
     };
     berechneSummeGesammt = function(){
         var summeGesamt = PunkteController.berechneSummeOben() + PunkteController.berechneSummeUnten();
         return summeGesamt;
     };
     pruefeWuerfel = function(){
         
     };
     berechnePunktefeld = function(){
         
     };
     eintragenPunktefeld = function(){
         
     };
     auswertenWuefelWerte = function(){
         
         var wuerfelWerte = [0,0,0,0,0,0];
         
         for(var i = 1; i<7;i++){
             if(i === wuerfel1.getWert){
                 wuerfelWerte[i-1]++;
             }
             if(i === wuerfel2.getWert){
                 wuerfelWerte[i-1]++;
             }
             if(i === wuerfel3.getWert){
                 wuerfelWerte[i-1]++;
             }
             if(i === wuerfel4.getWert){
                 wuerfelWerte[i-1]++;
             }
             if(i === wuerfel5.getWert){
                 wuerfelWerte[i-1]++;
             }
             if(i === wuerfel6.getWert){
                 wuerfelWerte[i-1]++;
             }
         }
     };
 }
