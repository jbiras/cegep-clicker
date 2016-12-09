var Amelioration = function(id, cout, nom, taux, nombreAchete){
	this.construire = function(){
		this.id = id;
		this.cout = cout;
		this.nom = nom;
		this.taux = taux;
		this.nombreAchete = nombreAchete;
	}
	
	this.achat = function(cliqueur){
		this.nombreAchete++;
		cliqueur.nombrePourcentActuel -= this.cout;
		cliqueur.nombrePourcentParSeconde += this.taux;
		this.cout = this.cout * 1.11;
	}
	
	this.construire();
}