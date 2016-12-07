var AmeliorationsVue = function(cliqueur, listeAmeliorations) {
	this.afficher = function() {
		var htmlEnConstruction = AmeliorationsVue.html.replace("{POURCENTS_ACTUELS}", cliqueur.nombrePourcentActuel);
		
		
		for(var no_amelioration in listeAmeliorations){
			htmlEnConstruction += AmeliorationsVue.htmlListe.replace("{ID}", listeAmeliorations[no_amelioration].id)
																.replace("{NOM}", listeAmeliorations[no_amelioration].nom)
																.replace("{NOMBRE}", listeAmeliorations[no_amelioration].nombreAchete)
																.replace("{PRIX}", listeAmeliorations[no_amelioration].cout)
		}
		
		$("body").html(htmlEnConstruction);
	}
}
AmeliorationsVue.html = $("#pageAmeliorations").html();
AmeliorationsVue.htmlListe = $("#pageAmeliorationsListe").html();