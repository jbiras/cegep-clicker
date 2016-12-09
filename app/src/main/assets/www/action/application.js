var applicationCegepCliqueur = {
	
	lancer:function() {
				
		$(window).on('hashchange', $.proxy(this.naviguer, this));
		
		if(navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)){
			$(document).on("deviceready", $.proxy(this.initialiserPourDonnees(),this));
		}else{
			this.initialiserPourDonnees();
		}
	},
	
	initialiserPourDonnees:function() {
		this.cliqueurDAO = new CliqueurDAO();
		this.ameliorationDAO = new AmeliorationDAO();
		this.avisDAO = new AvisDAO();
		this.naviguer();
	},
	
	naviguer:function() {
		var ancre = window.location.hash;
		if(!ancre) {
			this.cliqueurDAO.trouverLeCliqueur($.proxy(this.afficherLeCliqueur,this));
		} else if(ancre.match(/^#ameliorations/)) {
			this.ameliorationDAO.listerToutesLesAmeliorations($.proxy(this.afficherLesAmeliorations, this));
			
		} else if(ancre.match(/^#statistiques/)) {
			this.cliqueurDAO.trouverLeCliqueur($.proxy(this.afficherLesStatistiques, this));
		} else if(ancre.match(/^#avis/)) {
			this.avisDAO.listerTousLesAvis($.proxy(this.afficherLesAvis, this));
		}
	},
	
	afficherLeCliqueur:function(cliqueur){
		this.cliqueur = cliqueur;
		this.cliqueurVue = new CliqueurVue(cliqueur);
		this.cliqueurVue.afficher();
		$("#cliqueur").on('click', $.proxy(this.cliquer, this));
		$("#sauvegarder").on('click', $.proxy(this.sauvegarderCliqueur, this));
	},
	

	afficherLesAmeliorations:function(listeAmeliorations){
		console.log(listeAmeliorations);
		ameliorationsVue = new AmeliorationsVue(this.cliqueur, listeAmeliorations);
		ameliorationsVue.afficher();
		$("button[id^='amelioration']").on('click', $(this).id ,$.proxy(this.acheterAmelioration, this));
	},

	afficherLesStatistiques:function(cliqueur) {
		this.cliqueur = cliqueur;
		this.statistiquesVue = new StatistiquesVue(cliqueur);
		this.statistiquesVue.afficher();
		$("#effacer").on('click', $.proxy(this.supprimerCliqueur, this));

	},
	
	afficherLesAvis:function(listeAvis) {
		this.avisVue = new AvisVue(listeAvis);
		this.avisVue.afficher($.proxy(this.ajouterAvis, this));
	},
	
	cliquer:function(){
		this.cliqueur.clique();
		this.afficherLeCliqueur(this.cliqueur);
	},
	
	sauvegarderCliqueur:function(){
		if(this.cliqueur.id == null){
			this.cliqueurDAO.ajouterCliqueur(this.cliqueur);
		}else{
			this.cliqueurDAO.modifierCliqueur(this.cliqueur);
		}
	},
	
	acheterAmelioration:function(){
		var idAmelioration = event.target.id;
		var lol = idAmelioration.slice(12);
		alert(lol);
	},
	
	supprimerCliqueur:function() {
		if(this.cliqueur.id == null) {
			// ¯\_(ツ)_/¯
		} else {
			this.cliqueurDAO.supprimerCliqueur(this.cliqueur);
			cliqueur = new Cliqueur(this.cliqueur, 0, 0, 0);
			this.afficherLesStatistiques(cliqueur);
		}
	},
	
	ajouterAvis:function(avis) {
		this.avisDAO.ajouterAvis(avis);
	}
};
applicationCegepCliqueur.lancer();



