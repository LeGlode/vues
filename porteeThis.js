window.valeur = "Louison Bobet";

const objet = {
    valeur: "Love is in the air",
    fleche: () => {
	console.log('() => ', this.valeur);
    },
    accolade(){
	console.log('(){} ', this.valeur);
    }
};

console.log("window.valeur ", window.valeur);
console.log("objet.valeur ",objet.valeur);
console.log("objet fonction => ", objet.fleche());
console.log("objet fonction(){} ", objet.accolade());
