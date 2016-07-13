function CreationTableauLangages() {
	langages = ["Html","CSS","Java","PHP"]
	return langages;
}

function CreationTableauNombres() {
	nombres = [0,1,2,3,4,5];
	return nombres;
}

function RemplacementElement(langages) {
	Remplacement = langages.splice(2, 1, "Javascript");
	return langages;
}

function AjoutElementLangages(langages) {
	Remplacement = langages.push("Ruby", "Python");
	return langages;
}

function AjoutElementNombres(nombres) {
	Ajout = nombres.unshift(-2,-1);
	return nombres;
}

function SuppressionPremierElement(langages) {
	Suppression = langages.shift(langages);
	return langages;
}

function SuppressionDernierElement(langages) {
	Suppression = langages.pop(langages);
	return langages;
}

function ConversionChaineTableau(reseaux_sociaux) {
	reseaux_sociaux = reseaux_sociaux.split(",");
	return reseaux_sociaux;
}

function ConversionTableauChaine(langages) {
	langages_chaine = langages.toString();
	return langages_chaine;
}

function TriTableau(reseaux_sociaux) {
	reseaux_sociaux = reseaux_sociaux.sort();
	return reseaux_sociaux;
}

//**********************BONUS************************//

function InversionTableau(langages) {
	langages = langages.reverse(); 
	return langages;
}

function TriSpecial(langages){
	langages = langages.sort(function(a, b) { return a.length - b.length; });
	return langages;
}