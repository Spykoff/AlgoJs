const today = new Date();
const anniv = new Date(2011, 8, 27);
var anneetoday = today.getFullYear();
var anneeanniv = anniv.getFullYear();


var res = anneetoday - anneeanniv;
console.log(res);

    if(res < 18) { 
        return console.log("trop jeune");
    }
    else {
        return console.log("tu es majeur !");
    }
//console.log(anneetoday);
//console.log(anneeanniv);
//var resultat = calcul(res);
//console.log("mot " + calcul(res));