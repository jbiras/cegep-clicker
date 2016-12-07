var AmeliorationDAO = function(){
	
	this.listeAmeliorations = [];
	
	this.initialiser = function(){
		this.baseDeDonnees = window.openDatabase("CegepCliqueur", "1.0", "CegepCliqueur", 200000);
		
		this.baseDeDonnees.transaction(
		function(operation){
			var SQL_CREATION = "CREATE TABLE IF NOT EXISTS amelioration(id INTEGER PRIMARY KEY AUTOINCREMENT, cout REAL, nom VARCHAR(30), taux REAL, nombreAchete INTEGER)";

			operation.executeSql(SQL_CREATION);
		},
		this.reagirErreur,
		this.reagirSucces
		);
	}
	
	this.ajouterAmelioration = function(amelioration){
		this.baseDeDonnees.transaction(
			function(operation){
				var SQL_AJOUT = "INSERT INTO amelioration(cout, nom, taux, nombreAchete) VALUES(?, ?, ?, ?)";
				var parametres = [amelioration.cout, amelioration.nom, amelioration.taux, amelioration.nombreAchete];
				operation.executeSql(SQL_AJOUT, parametres);
			},
			this.reagirErreur,
			this.reagirSucces
		);
	}
	
	this.modifierAmelioration = function(amelioration){
		this.baseDeDonnees.transaction(
			function(operation){
				var SQL_MODIFICATION = "UPDATE amelioration SET cout = ?, nom = ?, taux = ?, nombreAchete = ? where id = ?";
				var parametres = [amelioration.cout, amelioration.nom, amelioration.taux, amelioration.nombreAchete, amelioration.id];
				operation.executeSql(SQL_MODIFICATION, parametres);
			},
			this.reagirSucces,
			this.reagirErreur
		);
	}
	
	this.listerToutesLesAmeliorations = function(finalisation){
		var self = this;
		
		self.baseDeDonnees.transaction(
			function(operation){
				var SQL_SELECTION = "SELECT * FROM amelioration";
				operation.executeSql(SQL_SELECTION, [], function(operation, resultat)
				{
					self.listeAmeliorations = [];
				
					if(resultat.rows.length > 0){
						for(var position = 0; position<resultat.rows.length; position++){
							var enregistrementAmelioration = resultat.rows.item(position);
							amelioration = new AmeliorationDAO(enregistrementAmelioration.id,
												enregistrementAmelioration.cout,
												enregistrementAmelioration.nom,
												enregistrementAmelioration.taux,
												enregistrementAmelioration.nombreAchete);
							self.listeAmeliorations[self.listeAmeliorations.length] = amelioration;
						}
					}else{
						var SQL_AJOUT = "INSERT INTO amelioration(cout, nom, taux, nombreAchete) VALUES(10, 'Machines à café' , 0.2, 0)";
						var SQL_AJOUT2 = "INSERT INTO amelioration(cout, nom, taux, nombreAchete) VALUES(100, 'Giga d'internet' , 0.8, 0)";
						var SQL_AJOUT3 = "INSERT INTO amelioration(cout, nom, taux, nombreAchete) VALUES(500, 'Canne de billard' , 4, 0)";
						amelioration = new Amelioration(1,10, "Machine à café", 0.2,0);
						self.listeAmeliorations[self.listeAmeliorations.length] = amelioration;
						amelioration = new Amelioration(2,100, "Giga d'internet", 0.8,0);
						self.listeAmeliorations[self.listeAmeliorations.length] = amelioration;
						amelioration = new Amelioration(3,500, "Canne de billard", 4,0);
						self.listeAmeliorations[self.listeAmeliorations.length] = amelioration;
					}
						

				});
			},
			this.reagirErreur,
			
			function(){
				finalisation(self.listeAmeliorations);
			}
		);
	}
	
	this.reagirErreur = function(erreur){
		console.log("ERREUR:SQL:" + erreur.code + ":" + erreur.message);
		//alert("ERREUR:SQL:" + erreur.code + ":" + erreur.message);
	}
	
	this.reagirSucces = function(){
		console.log("SUCCES:SQL:");
		//alert("SUCCES:SQL:");
	}
	
	this.initialiser();
	
	
	
	this.trouverAmeliorationParId = function(idAmelioration){
		for(var noAmelioration in this.listeAmeliorations){
			if(this.listeAmeliorations[noAmelioration].id == idAmelioration){
				return this.listeAmeliorations[noAmelioration];
			}
		}
	};
	
}
