var AvisVue = function() {
	this.afficher = function(actionAjouterAvis) {
		var htmlEnConstruction = AvisVue.html
		$("body").html(htmlEnConstruction);
		$("#envoyer").on('submit', $.proxy(this.ajouterAvis, this));
		this.actionAjouterAvis = actionAjouterAvis;
	}
	
	this.ajouterTodo = function() {
		var note = $("#note").val();
		var date = $("#commentaire").val();
		
		var avis = new Avis(id = null, note, commentaire);
		
		this.actionAjouterAvis(avis);
		
		window.location.hash = "";
		event.preventDefault();
	}
}
AvisVue.html = $("#pageVotreAvis").html();