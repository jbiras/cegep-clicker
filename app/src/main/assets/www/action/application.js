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
			ameliorationsVue = new AmeliorationsVue();
			ameliorationsVue.afficher();
		} else if(ancre.match(/^#statistiques/)) {
			statistiquesVue = new StatistiquesVue();
			statistiquesVue.afficher();
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
	}
	
	/*sauvegarderNouveauTodo:function(todo) {
		this.todosDAO.ajouterTodo(todo);
	},
	
	sauvegarderModificationsTodo:function(todo) {
		this.todosDAO.modifierTodo(todo);
	},
	
	afficherTousLesTodos:function(listeTodos) {
		this.listeTodosVue = new ListeTodosVue(listeTodos);
		this.listeTodosVue.afficher();
	}*/
};
applicationCegepCliqueur.lancer();

