//Initialisierung//////////////////////////////////////////////////////////

    var SpielController
    var PunkteController

function init(){
    SpielController = new SpielController();
    PunkteController = new PunkteController();
    alert("done");
}


//Wuerfel/////////////////////////////////////////////////////////////////

function wuerfel (nummer) {
    this.wuerfelNr = nummer;
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
        this.einser = new Einser(),
        this.zweier = new Zweier(),
        this.dreier = new Dreier(),
        this.vierer = new Vierer(),
        this.fuenfer = new Fuenfer(),
        this.sechser = new Sechser(),
        this.dreierpasch = new Dreierpasch(),
        this.viererpasch = new Viererpasch(),
        this.fullhouse = new FullHouse(),
        this.kleineStrasse = new KleineStrasse(),
        this.grosseStrasse = new GrosseStrasse(),
        this.kniffel = new Kniffel(),
        this.chance = new Chance()]
    
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

function Einser(){
    this.auswerten = function(wurf){
        if(wurf[0] === 0){
            this.setPunkte(0);
            this.setBelegt(true);
        }
        else{
            this.punkte = wurf[0] * 1;
            this.setBelegt(true);
        }
    };
}
Einser.prototype = new Punktefeld();

//Zweier/////////////////////////

function Zweier(){
    this.auswerten = function(wurf){
        
    };
}
Zweier.prototype = new Punktefeld();

//dreier/////////////////////////

function Dreier(){
    this.auswerten = function(wurf){
        
    };
}
Dreier.prototype = new Punktefeld();

//vierer/////////////////////////

function Vierer(){
    this.auswerten = function(wurf){
        
    };
}
Vierer.prototype = new Punktefeld();

//fuenfer/////////////////////////

function Fuenfer(){
    this.auswerten = function(wurf){
        
    };
}
Fuenfer.prototype = new Punktefeld();


//sechser/////////////////////////

function Sechser(){
    this.auswerten = function(wurf){
        
    };
}
Sechser.prototype = new Punktefeld();

//dreierpasch/////////////////////////

function Dreierpasch(){
    this.auswerten = function(wurf){
        
    };
}
Dreierpasch.prototype = new Punktefeld();

//viererpasch/////////////////////////

function Viererpasch(){
    this.auswerten = function(wurf){
        
    };
}
Viererpasch.prototype = new Punktefeld();

//FullHouse/////////////////////////

function FullHouse(){
    this.auswerten = function(wurf){
        
    };
}
FullHouse.prototype = new Punktefeld();

//kleineStrasse/////////////////////////

function KleineStrasse(){
    this.auswerten = function(wurf){
        
    };
}
KleineStrasse.prototype = new Punktefeld();

//grosseStrasse/////////////////////////

function GrosseStrasse(){
    this.auswerten = function(wurf){
        
    };
}
GrosseStrasse.prototype = new Punktefeld();

//Kniffel/////////////////////////

function Kniffel(){
    this.auswerten = function(wurf){
        
    };
}
Kniffel.prototype = new Punktefeld();

//Chance/////////////////////////

function Chance(){
    this.auswerten = function(wurf){
        
    };
}
Chance.prototype = new Punktefeld();


//SpielController/////////////////////////////////////////////////////////

function SpielController() {
    var aktuellerSpieler;
    spielerAnzahlAlt=0;
    wuerfel1 = new wuerfel(1);
    wuerfel2 = new wuerfel(2);
    wuerfel3 = new wuerfel(3);
    wuerfel4 = new wuerfel(4);
    wuerfel5 = new wuerfel(5);
    
    this.oeffneAnleitung = function(){
    document.getElementById("start").style.display="none";
    document.getElementById("anleitung").style.display="block"
    };
    
    this.schließeAnleitung = function(){
    document.getElementById("anleitung").style.display="none";
    document.getElementById("start").style.display="block";
    };
    
    this.startenSpiel = function(){
        document.getElementById("start").style.display="none";
        document.getElementById("einstellungen").style.display="block";
        
    };
    this.abbrechen = function(){
        document.getElementById("start").style.display="block";
        document.getElementById("einstellungen").style.display="none";
        init();
    };
    this.spielPausieren = function(){
        document.getElementById("start").style.display="block";
        document.getElementById("spiel").style.display="none";
    };
    this.spielFortsetzen = function(){
        document.getElementById("start").style.display="none";
        document.getElementById("spiel").style.display="block";
    };
    this.festlegenSpielerAnzahl = function(anzahl){
        spielerAnzahl = anzahl;
        
        
        if(spielerAnzahl >= spielerAnzahlAlt){
            for(var i = 0; i< spielerAnzahl; i++){
              if(i===0){
              var spieler1 = new spieler("Spieler1",1);
              document.getElementById("s1").style.display="block";
              }
              if(i===1){
              var spieler2 = new spieler("Spieler2",2);
              document.getElementById("s2").style.display="block";
              }
              if(i===2){
              var spieler3 = new spieler("Spieler3",3);
              document.getElementById("s3").style.display="block";
              }
              if(i===3){
              var spieler4 = new spieler("Spieler4",4);
              document.getElementById("s4").style.display="block";
              }
              if(i===4){
              var spieler5 = new spieler("Spieler5",5);
              document.getElementById("s5").style.display="block";
              }
            spielerAnzahlAlt = spielerAnzahl;
            }    
        }else if(spielerAnzahl<spielerAnzahlAlt){

            for(var i = spielerAnzahlAlt; i>spielerAnzahl; i--){
              
              if(i===2){
              var spieler2 = undefined;
              document.getElementById("s2").style.display="none";
              }
              else if(i===3){
              var spieler3 = undefined;
              document.getElementById("s3").style.display="none";
              }
              else if(i===4){
              var spieler4 = undefined;
              document.getElementById("s4").style.display="none";
              }
              else if(i===5){
              var spieler5 = undefined;
              document.getElementById("s5").style.display="none";
              }
            }
            spielerAnzahlAlt = spielerAnzahl;
        }
        
    };
    this.eingebenSpielerName = function(){
        spieler1.setName(document.getElementById("NameSpieler1").value);
        spieler2.name = document.getElementById("NameSpieler2").value;
        spieler3.name = document.getElementById("NameSpieler3").value;
        spieler4.name = document.getElementById("NameSpieler4").value;
        spieler5.name = document.getElementById("NameSpieler5").value;
        
        beginneZug();
    };
    this.auswaehlenSpieler = function(){
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
    this.beginneZug = function(){
        aktuellerSpieler.offeneWuerfe = 3;
        auswaehlenSpieler();
        //öffen View Spiel
    };
    this.wuerfel = function(){
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
    this.beendenWurf = function(){
        aktuellerSpieler.offeneWuerfe = 0; 
    };
    this.auwaehlenPunktefeld = function(id){
        var gewaehltesPunktefeld = document.getElementById(id);
        
        for(var i = 0; i < aktuellerSpieler.punktezettel.punktefelder.length;i++)
        {
            if(i === id)
            {
   aktuellerSpieler.punktezettel.punktefelder[i].auswerten(PunkteController.auswertenWuerfelWerte());
            }
        }
 
    };
    this.berechnePosition = function(){
        
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

function PunkteController() {
     this.berechneSummeOben = function(){
         
     };
     this.berechneSummeUnten = function(){
         
     };
     this.berechneSummeGesammt = function(){
         var summeGesamt = PunkteController.berechneSummeOben() + PunkteController.berechneSummeUnten();
         return summeGesamt;
     };
     this.pruefeWuerfel = function(){
         
     };
     this.berechnePunktefeld = function(){
         
     };
     this.eintragenPunktefeld = function(){
         
     };
     this.auswertenWuefelWerte = function(){
         
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
         
         return wuerfelWerte;
     };
 }