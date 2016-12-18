var CliqueurVue = function(cliqueur) {
	this.afficher = function() {
		var htmlEnConstruction = 
			CliqueurVue.html
			.replace("{POINTS}", cliqueur.nombrePourcentActuel.toFixed(2)+ " %");
		$("body").html(htmlEnConstruction);
	}
}
CliqueurVue.html = $("#pagePrincipale").html();