var StatistiquesVue = function() {
	this.afficher = function() {
		var htmlEnConstruction = 
			StatistiquesVue.html
			.replace("{POINTS_ACTUELS}", "96%")
			.replace("{POINTS_TOTAUX}", "452%")
			.replace("{POINTS_PAR_CLIC}", "0.9%");
		$("body").html(htmlEnConstruction);
	}
}
StatistiquesVue.html = $("#pageStatistiques").html();