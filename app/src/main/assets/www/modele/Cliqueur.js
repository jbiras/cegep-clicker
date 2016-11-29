var Cliqueur = function(id, nombrePourcentActuel, nombrePourcentTotal, nombrePourcentParClique){
	this.construire = function(){
		this.id = id;
		this.nombrePourcentActuel = nombrePourcentActuel;
		this.nombrePourcentTotal = nombrePourcentTotal;
		this.nombrePourcentParClique = nombrePourcentParClique;
	}
	
	this.construire();
}