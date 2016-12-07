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
			avisVue = new AvisVue();
			avisVue.afficher();
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
	},

	afficherLesStatistiques:function(cliqueur) {
		this.cliqueur = cliqueur;
		this.statistiquesVue = new StatistiquesVue(cliqueur);
		this.statistiquesVue.afficher();
		$("#effacer").on('click', $.proxy(this.supprimerCliqueur, this));

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
	
	supprimerCliqueur:function() {
		if(this.cliqueur.id == null) {
			// ¯\_(ツ)_/¯
		} else {
			this.cliqueurDAO.supprimerCliqueur(this.cliqueur);
			cliqueur = new Cliqueur();
			cliqueur.hydrate(this.cliqueur, 0, 0, 1);
			this.afficherLesStatistiques(cliqueur);
		}
	}
};
applicationCegepCliqueur.lancer();

