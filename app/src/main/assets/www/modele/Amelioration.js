var Amelioration = function(id, cout, nom, taux, nombreAchete){
	this.construire = function(){
		this.id = id;
		this.cout = cout;
		this.nom = nom;
		this.taux = taux;
		this.nombreAchete = nombreAchete;
	}
	
	this.achat = function(cliqueur){
		if(cliqueur.nombrePourcentActuel >= this.cout){
			this.nombreAchete++;
			cliqueur.nombrePourcentActuel -= this.cout;
			cliqueur.nombrePourcentActuel = cliqueur.nombrePourcentActuel.toFixed(2);
			cliqueur.nombrePourcentParSeconde += this.taux;
			this.cout = this.cout * 1.11;
			this.cout = Math.round(this.cout*100)/100;
		}
		
	}
	
	this.construire();
}