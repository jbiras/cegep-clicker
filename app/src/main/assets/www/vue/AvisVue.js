var AvisVue = function(listeAvis) {
	this.afficher = function(actionAjouterAvis) {
		var htmlEnConstruction = AvisVue.html
		var htmlListeAvis = $("#listeAvis");
		for(var noAvis in listeAvis) {
			htmlEnConstruction += AvisVue.html_item
				.replace("{COMMENTAIRE}", listeAvis[noAvis].commentaire)
				.replace("{NOTE}", listeAvis[noAvis].note);
		}
		$("body").html(htmlEnConstruction);
		$("#formAvis").on('submit', $.proxy(this.ajouterAvis, this));
		this.actionAjouterAvis = actionAjouterAvis;
	}
	
	this.ajouterAvis = function() {
		var note = parseInt($("#note").val());
		var commentaire = $("#commentaire").val();
		
		var avis = new Avis(id = null, note, commentaire);
		this.actionAjouterAvis(avis);
		
		window.location.hash = "";
		event.preventDefault();
	}
}
AvisVue.html = $("#pageVotreAvis").html();
AvisVue.html_item = $("#itemListeAvis").html();