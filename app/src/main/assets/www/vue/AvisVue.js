var AvisVue = function() {
	this.afficher = function() {
		var htmlEnConstruction = AvisVue.html
		$("body").html(htmlEnConstruction);
	}
}
AvisVue.html = $("#pageVotreAvis").html();