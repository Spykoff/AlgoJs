var equipe = [ "rouge", "bleu"];

var valeurequipe = Math.floor(Math.random()*equipe.length);

var poste = [ "adc", "support", "jungle", "mid", "top", "spectateur"];

var valeurposte = Math.floor(Math.random()*poste.length);

var resultat = [ "PERDRE!", "GAGNER!"];

var valeurresultat = Math.floor(Math.random()*resultat.length);

var postefinal = poste[valeurposte];

var equipefinal = equipe[valeurequipe];

var resultatfinal = resultat[valeurresultat];

console.log("Tu es dans l'equipe" + " " + equipefinal + "\n" + 
            "Ton poste sera" + " " + postefinal + "\n" +
            "Bonne chance !" + "\n" + 
            "Tu vas" + " " + resultatfinal);