var AmeliorationsVue = function(cliqueur, listeAmeliorations) {
	this.afficher = function() {
		var pageListeAmeliorations = AmeliorationsVue.html.replace("{POURCENTS_ACTUELS}", cliqueur.nombrePourcentActuel);
		$("body").html(pageListeAmeliorations);
		
		var htmlListeAmeliorations = $("#listeAmeliorations");
		
		var desactive = "";
		
		var htmlEnConstruction = "";
		
		for(var no_amelioration in listeAmeliorations){
			if(listeAmeliorations[no_amelioration].cout > cliqueur.nombrePourcentActuel){
				desactive = "disabled";
			}else{
				desactive = "";
			}
			
			htmlEnConstruction += AmeliorationsVue.htmlListe.replace("{ID}", listeAmeliorations[no_amelioration].id)
																.replace("{NOM}", listeAmeliorations[no_amelioration].nom)
																.replace("{NOMBRE}", listeAmeliorations[no_amelioration].nombreAchete)
																.replace("{PRIX}", listeAmeliorations[no_amelioration].cout)
																.replace("{DESACTIVE}", desactive)
			

		}
		
		htmlListeAmeliorations.html(htmlEnConstruction);
	}
}
AmeliorationsVue.html = $("#pageAmeliorations").html();
AmeliorationsVue.htmlListe = $("#pageAmeliorationsListe").html();