var AmeliorationsVue = function(cliqueur) {
	this.afficher = function() {
		console.log(cliqueur)
		var htmlEnConstruction = 
			AmeliorationsVue.html
			.replace("{POURCENTS_ACTUELS}", cliqueur.nombrePourcentActuel)
			.replace("{NOMBRE_MACHINES}", "5")
			.replace("{PRIX_MACHINE}", "2%")
			.replace("{NOMBRE_GIGAS}", "1")
			.replace("{PRIX_GIGA}", "17%")
			.replace("{NOMBRE_CANNES}", "0")
			.replace("{PRIX_CANNE}", "80%");
		$("body").html(htmlEnConstruction);
	}
}
AmeliorationsVue.html = $("#pageAmeliorations").html();