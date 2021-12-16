const today = new Date();
const anniv = new Date(2010, 8, 27);
var anneetoday = today.getFullYear();
var anneeanniv = anniv.getFullYear();


var res = anneetoday - anneeanniv;

function calcul(res) {
    if ( res < 18) {
        return console.log("trop jeune");
    }
    else {
        return console.log("tu es majeur !");
    }
}



console.log(anneetoday);
console.log(anneeanniv);
console.log(res);
console.log(calcul(res));