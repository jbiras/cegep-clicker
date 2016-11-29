var applicationCegepCliqueur = {
	lancer:function() {
		/*this.cliqueurDAO = new CliqueurDAO();
		this.ameliorationDAO = new AmeliorationDAO();*/
		//this.listeTodos = this.todosDAO.listerTousLesTodos();
		
		$(window).on('hashchange', $.proxy(this.naviguer, this));
		
		this.initialiserPourDonnees();
	},
	
	initialiserPourDonnees:function() {
		/*this.cliqueurDAO = new CliqueurDAO();
		this.ameliorationDAO = new AmeliorationDAO();*/
		this.naviguer();
	},
	
	naviguer:function() {
		var ancre = window.location.hash;
		if(!ancre) {
			cliqueurVue = new CliqueurVue();
			cliqueurVue.afficher();
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