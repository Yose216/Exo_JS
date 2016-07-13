
//*****************Les chaines de caractères*******************************//

function tailleString(string) {
	result = string.length;
	return result;
}

function remplaceCar (str, avant, apres) {
	result = str.replace(avant, apres);
	return result;
}

function concatString (str,plus) {
	result = str.concat(plus);
	return result; 
}

function afficherCar(str) {
	result = str.substring(4,5);
	return result;
}

function afficherNCar(str) {
	result = str.substring(0,9);
	return result;
}

function majusculeString(str) {
	result = str.toLocaleUpperCase();
	return result;
}

function SupprEspaceString(str) {
	result = str.trim();
	return result;
}

function IsString(str) {
	result = str.startsWith(str);
	return result;
}

function AfficherExtensionString(str) {
	result = str.substr(str.lastIndexOf('j'))
	return result;
}

function NombreEspaceString (str) {
	result = str.match(/[ ]/g).length;
	return result;
}

//*****************Les Bonus*******************************//

function InverseString(str) {
	result = str.split('').reverse().join('');
	return result; 
}

function minusculeString(str) {
	result = str.toLocaleLowerCase();
	return result;
}

function countDistinctCar(str) {
    result = str.split("").filter(function(str, i, x) {
        return x.indexOf(str) === i;
    }).length;    
    return result;
}

//*****************Les nombres et opérations mathématiques*******************************//

function calculPuissance (x, y) {
	result = Math.pow(x,y);
	return result;
}

function valeurAbsolue (x) {
	result = Math.abs(x);
	return result;
}

function valeurAbsolueArray (tab) {
	result = tab.map(Math.abs);
	return result;
}



//*****************Les Bonus*******************************//

function sufaceCercle (r) {
   result =  Math.round(Math.PI*(r*r));
   return result;
} 

function hypothenuse (x, y) {
	result = Math.sqrt((x*x) + (y*y));
	return result;
}

function calculIMC (Poids, Taille) {
	imc = (Poids/(Taille*Taille))*100;
	result = Math.round(imc)/100;
	return result;
}
