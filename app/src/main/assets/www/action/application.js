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
		this.listeAmeliorations = listeAmeliorations
		console.log(listeAmeliorations);
		ameliorationsVue = new AmeliorationsVue(this.cliqueur, listeAmeliorations);
		ameliorationsVue.afficher();
		$("button[id^='amelioration']").on('click' ,$.proxy(this.acheterAmelioration, this));
	},

	afficherLesStatistiques:function(cliqueur) {
		this.cliqueur = cliqueur;
		this.statistiquesVue = new StatistiquesVue(cliqueur);
		this.statistiquesVue.afficher();
		$("#effacer").on('click', $.proxy(this.supprimerDonnees, this));

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
		try{
			this.cliqueurDAO.ajouterCliqueur(this.cliqueur);
		}catch(err){
			console.log(err);
			//this.cliqueurDAO.modifierCliqueur(this.cliqueur);
		}
	},
	
	acheterAmelioration:function(){
		var idAmelioration = event.target.id;
		var idAmelioration = idAmelioration.slice(12);
		alert(idAmelioration);
		this.listeAmeliorations.forEach(function(amelioration){
			if(amelioration.id == idAmelioration){
				amelioration.achat(this.cliqueur);
				console.log(amelioration);
				this.ameliorationDAO.modifierAmelioration(amelioration);
				this.sauvegarderCliqueur();
				
			}
		}, this);
		this.afficherLesAmeliorations(this.listeAmeliorations)
	},
	
	supprimerDonnees:function() {
		if(this.cliqueur.id == null) {
			// ¯\_(ツ)_/¯
		} else {
			this.cliqueurDAO.supprimerCliqueur();
			this.cliqueur = new Cliqueur(1,0, 0, 0);
			this.ameliorationDAO.supprimerToutesAmeliorations();
			this.afficherLesStatistiques(this.cliqueur);
		}
	},
	
	ajouterAvis:function(avis) {
		this.avisDAO.ajouterAvis(avis);
	}
};
applicationCegepCliqueur.lancer();



