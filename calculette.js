var a=prompt("entrer votre premier nombre");
var b=prompt("entrer votre deuxieme nombre");
var operation=prompt("entrer votre operation");
if (operation==="+"){resultat=parseFloat(a)+parseFloat(b)}
if(operation==="-"){resultat=parseFloat(a)-parseFloat(b)}
if(operation==="*"){resultat=parseFloat(a)*parseFloat(b)}
if(operation==="/"){resultat=parseFloat(a)/parseFloat(b)}
 console.log( "resultat" + resultat);