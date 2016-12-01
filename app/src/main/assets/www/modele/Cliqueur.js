var Cliqueur = function(){
	this.hydrate = function(id, nombrePourcentActuel, nombrePourcentTotal, nombrePourcentParClique){
		this.id = id;
		this.nombrePourcentActuel = nombrePourcentActuel;
		this.nombrePourcentTotal = nombrePourcentTotal;
		this.nombrePourcentParClique = nombrePourcentParClique;
	}
	
	this.clique = function(){
		this.nombrePourcentActuel++;
		this.nombrePourcentTotal++;
	}
}