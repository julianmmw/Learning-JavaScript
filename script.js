var song = {
               "Title":    "Song Title",
               "Composer": "Author",
               "Melody":   "x4C2D2|E2C2C2D2|E2C2E2F2|G4E2F2|G4G1A1G1F1|E2C2G1A1G1F1|E2C2D2G2|C4D2G2|C4x4"  
             };

function getChord(notes){}

function getHarmony(){
  console.log("Get Harmony started");
  var tab = []; //crea arreglo de tablatura
  var c = 0 //define el numero del compas actual
  tab[c] = ""; //crea el compas cero como un string vacio
  for (i = 0; i < song.Melody.length; i++){
    var character = song.Melody[i];    
    switch(character){
      case "|":
        c++ //incrementa en 1, el numero de compas actual
        tab[c] = "";
        break;
        
      case "x":
        tab[c]+= character; //se añade el caracter al compas
        break;
        
      default:
        if(character.match(/[A-G]/)){
          tab[c]+= character;
           
        }
        
    }
  }
console.log(tab);
}
/*
"ABCDEFG".indexOf(character) == 2
*/