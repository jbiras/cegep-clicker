var Cliqueur = function(id, nombrePourcentActuel, nombrePourcentTotal, nombrePourcentParSeconde){
	this.construire = function(){
		this.id = id;
		this.nombrePourcentActuel = nombrePourcentActuel;
		this.nombrePourcentTotal = nombrePourcentTotal;
		this.nombrePourcentParSeconde = nombrePourcentParSeconde
	}
	
	this.clique = function(){
		this.nombrePourcentActuel++;
		this.nombrePourcentTotal++;
	}
	
	this.cliqueParSeconde = function(){
		this.nombrePourcentActuel += (nombrePourcentParSeconde/2);
		this.nombrePourcentTotal += (nombrePourcentParSeconde/2);
	}
	
	this.construire();
}