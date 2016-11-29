var Amelioration = function(id, cout, nom, taux, nombreAchete){
	this.construire = function(){
		this.id = id;
		this.cout = cout;
		this.nom = nom;
		this.taux = taux;
		this.nombreAchete = nombreAchete;
	}
	
	this.construire();
}