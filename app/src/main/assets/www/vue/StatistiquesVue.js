var StatistiquesVue = function(cliqueur) {
	this.afficher = function() {
		var nombrePourcentActuel = Math.round(cliqueur.nombrePourcentActuel*100)/100;
		var nombrePourcentTotal = Math.round(cliqueur.nombrePourcentTotal*100)/100;
		var nombrePourcentParSeconde = Math.round(cliqueur.nombrePourcentParSeconde*100)/100;
		var htmlEnConstruction = 
			StatistiquesVue.html
			.replace("{POINTS_ACTUELS}", nombrePourcentActuel + "%")
			.replace("{POINTS_TOTAUX}",nombrePourcentTotal + "%")
			.replace("{POINTS_PAR_CLIC}", nombrePourcentParSeconde + "%");
		$("body").html(htmlEnConstruction);
	}
}
StatistiquesVue.html = $("#pageStatistiques").html();