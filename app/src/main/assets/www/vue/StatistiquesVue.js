var StatistiquesVue = function(cliqueur) {
	this.afficher = function() {
		var htmlEnConstruction = 
			StatistiquesVue.html
			.replace("{POINTS_ACTUELS}", cliqueur.nombrePourcentActuel + "%")
			.replace("{POINTS_TOTAUX}", cliqueur.nombrePourcentTotal + "%")
			.replace("{POINTS_PAR_CLIC}", cliqueur.nombrePourcentParSeconde + "%");
		$("body").html(htmlEnConstruction);
	}
}
StatistiquesVue.html = $("#pageStatistiques").html();