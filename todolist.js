//exports.mytodolist = function (){
//  return "start todolist";
//}

var dico = new Map();

var t1 = "acheter du pain";
var t2 = "sport";
var t3 = "rdv";

dico.set(1, t1);
dico.set(2, t2);
dico.set(3, t3);
//dico.size; // 3


exports.searchtask = function (test){    
  return dico.get(test);
}


//exports.showall = function (){
// var alltask = dico;
//  console.log(alltask[0]);
//  for (var [key, value] of alltask) {
//  return key;
//}
//}
for(x = 0; x < dico.length; x++) {  
var elem = dico.get(x);}
  exports.showall = function (){
  }
  console.log(elem); 
  


  //dico.get(""); // undefined
    //dico.has(""); // false
    //dico.delete("t1");
