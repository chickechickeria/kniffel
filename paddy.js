//Einser/////////////////////////////////////////////////////////////

function Einser(){
    this.auswerten = function(wurf){
        if(wurf[0] === 0){
            this.setPunkte(0);
            this.setBelegt(true);
        }
        else{
            this.setPunkte(wurf[0] * 1);
            this.setBelegt(true);
        }
    }
}
    
Einser.prototype = new Punktefeld();

//Zweier/////////////////////////

function Zweier(){
    this.auswerten = function(wurf){
        if(wurf[1] === 0){
            this.setPunkte(0);
            this.setBelegt(true);
        }
        else{
            this.setPunkte(wurf[1] * 2);
            this.setBelegt(true);
        }
    }
}

Zweier.prototype = new Punktefeld();

//dreier/////////////////////////

function Dreier(){
    this.auswerten = function(wurf){
        if(wurf[2] === 0){
            this.setPunkte(0);
            this.setBelegt(true);
        }
        else{
            this.setPunkte(wurf[2] * 3);
            this.setBelegt(true);
        }
    }
}
Dreier.prototype = new Punktefeld();

//vierer/////////////////////////

function Vierer(){
    this.auswerten = function(wurf){
        if(wurf[3] === 0){
            this.setPunkte(0);
            this.setBelegt(true);
        }
        else{
            this.setPunkte(wurf[3] * 4);
            this.setBelegt(true);
        }
    }
}
Vierer.prototype = new Punktefeld();

//fuenfer/////////////////////////

function Fuenfer(){
    this.auswerten = function(wurf){
        if(wurf[4] === 0){
            this.setPunkte(0);
            this.setBelegt(true);
        }
        else{
            this.setPunkte(wurf[4] * 5);
            this.setBelegt(true);
        }
    }
}
Fuenfer.prototype = new Punktefeld();


//sechser/////////////////////////

function Sechser(){
    this.auswerten = function(wurf){
        if(wurf[5] === 0){
            this.setPunkte(0);
            this.setBelegt(true);
        }
        else{
            this.setPunkte(wurf[5] * 6);
            this.setBelegt(true);
        }
    }
}
Sechser.prototype = new Punktefeld();

//dreierpasch/////////////////////////

function Dreierpasch(){
    this.auswerten = function(wurf){
        this.setPunkte(0);
        this.setBelegt(true);
        for(var i = 0; i< spielerAnzahl; i++){
            if (wurf[i] >= 3){
                this.setPunkte(wurf[0] * 1 + wurf[1] * 2 + wurf[2] * 3 + wurf[3] * 4 + wurf[4] * 5 + wurf[5] * 6);
            }
        }

    }
}
Dreierpasch.prototype = new Punktefeld();

//viererpasch/////////////////////////

function Viererpasch(){
    this.auswerten = function(wurf){
        this.setPunkte(0);
        this.setBelegt(true);
        for(var i = 0; i< spielerAnzahl; i++){
            if (wurf[i] >= 4){
                this.setPunkte(wurf[0] * 1 + wurf[1] * 2 + wurf[2] * 3 + wurf[3] * 4 + wurf[4] * 5 + wurf[5] * 6);
            }
        }

    }
}
Viererpasch.prototype = new Punktefeld();

//FullHouse/////////////////////////

function FullHouse(){
    this.auswerten = function(wurf){
        this.setPunkte(0);
        this.setBelegt(true);       
        for(var i = 0; i< spielerAnzahl; i++){
            if (wurf[i] = 2){
                for(var j = 0; j< spielerAnzahl; j++){
                    if (wurf[j] = 3){
                        this.setPunkte(wurf[0] * 1 + wurf[1] * 2 + wurf[2] * 3 + wurf[3] * 4 + wurf[4] * 5 + wurf[5] * 6);
                        this.setBelegt(true);
                    }   
                }   

            }
        }
    }
}
FullHouse.prototype = new Punktefeld();

//kleineStrasse/////////////////////////

function KleineStrasse(){
    this.auswerten = function(wurf){
        this.setPunkte(0);
        this.setBelegt(true);
        for(var i = 0; i< spielerAnzahl; i++){
            if (wurf[0] >= 1) && (wurf[1] >= 1) && (wurf[2] >= 1) && (wurf[3] >= 1){
                this.setPunkte(30);
            }
            if (wurf[1] >= 1) && (wurf[2] >= 1) && (wurf[3] >= 1) && (wurf[4] >= 1){
                this.setPunkte(30);
            }
            if (wurf[2] >= 1) && (wurf[3] >= 1) && (wurf[4] >= 1) && (wurf[5] >= 1){
                this.setPunkte(30);
            }
            
        }

    }
}
KleineStrasse.prototype = new Punktefeld();

//grosseStrasse/////////////////////////

function GrosseStrasse(){
    this.auswerten = function(wurf){
        this.setPunkte(0);
        this.setBelegt(true);
        for(var i = 0; i< spielerAnzahl; i++){
            if (wurf[0] >= 1) && (wurf[1] >= 1) && (wurf[2] >= 1) && (wurf[3] >= 1) && (wurf[4] >= 1){
                this.setPunkte(30);
            }
            if (wurf[1] >= 1) && (wurf[2] >= 1) && (wurf[3] >= 1) && (wurf[4] >= 1) && (wurf[5] >= 1){
                this.setPunkte(30);
            }
            
        }

    }
}
GrosseStrasse.prototype = new Punktefeld();

//Kniffel/////////////////////////

function Kniffel(){
    this.auswerten = function(wurf){
        this.setPunkte(0);
        this.setBelegt(true);
        for(var i = 0; i< spielerAnzahl; i++){
            if (wurf[i] = 5){
                this.setPunkte(50);
            }
        }

    }
}
Kniffel.prototype = new Punktefeld();

//Chance/////////////////////////

function Chance(){
    this.auswerten = function(wurf){
     this.setPunkte(wurf[0] * 1 + wurf[1] * 2 + wurf[2] * 3 + wurf[3] * 4 + wurf[4] * 5 + wurf[5] * 6) 
    }
}
Chance.prototype = new Punktefeld();