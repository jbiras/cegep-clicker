var CliqueurVue = function() {
	this.afficher = function() {
		var htmlEnConstruction = 
			CliqueurVue.html
			.replace("{POINTS}", "96%");
		$("body").html(htmlEnConstruction);
	}
}
CliqueurVue.html = $("#pagePrincipale").html();