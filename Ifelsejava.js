//Opgave 2.1
//Denne funktion omkrænset mit if/else statement. Den bliver kaldt når jeg trykker på knappen der er linket til funktionen FindNavn.
function FindNavn() {
    var name=document.txt.name.value; 

//Hvis navnet er Johnny skal den skrive Hej Johnny
    if (name=="Johnny") {
        document.txt.resultat.value = "Hej " + name;
    }
//Hvis ikke skal den skrive kys
    else {
        document.txt.resultat.value = "kys";
    }
    
}

//Opgave 2.2

function FindNumber() {
    
    var Num=document.NumberForm.Number.value;
    
    if (Num>20) {
        
        document.NumberForm.NumberResult.value = "What a nice number m8";
    }
    
    else {
        document.NumberForm.NumberResult.value = "Shit number m8";
        
    }
    
}




