var CliqueurVue = function(cliqueur) {
	this.afficher = function() {
		var htmlEnConstruction = 
			CliqueurVue.html
			.replace("{POINTS}", cliqueur.nombrePourcentActuel+ " %");
		$("body").html(htmlEnConstruction);
	}
}
CliqueurVue.html = $("#pagePrincipale").html();