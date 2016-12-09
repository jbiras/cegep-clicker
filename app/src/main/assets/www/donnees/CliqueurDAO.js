var CliqueurDAO = function(){
	
	this.cliqueur;
	
	this.initialiser = function(){
		
		this.baseDeDonnees = window.openDatabase("CegepCliqueur", "1.0", "CegepCliqueur", 200000);
		
		this.baseDeDonnees.transaction(
			function(operation){
				var SQL_CREATION = "CREATE TABLE IF NOT EXISTS cliqueur(id INTEGER PRIMARY KEY AUTOINCREMENT, nombrePourcentActuel REAL, nombrePourcentTotal REAL, nombrePourcentParSeconde REAL )";				
				
				operation.executeSql(SQL_CREATION);
				
			},
			this.reagirErreur,
			this.reagirSucces
		
		);
	}
	
	this.ajouterCliqueur = function(cliqueur){
		this.baseDeDonnees.transaction(
			function(operation){
				var SQL_AJOUT = "INSERT INTO cliqueur (nombrePourcentActuel, nombrePourcentTotal, nombrePourcentParSeconde) VALUES (?,?,?)";
				var parametres = [cliqueur.nombrePourcentActuel, cliqueur.nombrePourcentTotal, cliqueur.nombrePourcentParSeconde];
				operation.executeSql(SQL_AJOUT, parametres);				
			},
			this.reagirErreur,
			this.reagirSucces
		
		);
	}
	
	this.modifierCliqueur = function(cliqueur){
		this.baseDeDonnees.transaction(
			function(operation){
				var SQL_MODIFICATION = "UPDATE cliqueur SET nombrePourcentActuel = ?, nombrePourcentTotal = ?, nombrePourcentParSeconde = ? WHERE id = ?";
				var parametres = [cliqueur.nombrePourcentActuel, cliqueur.nombrePourcentTotal, cliqueur.nombrePourcentParSeconde, cliqueur.id];
				operation.executeSql(SQL_MODIFICATION, parametres);
			},
			this.reagirErreur,
			this.reagirSucces			
		);
	}
	
	this.supprimerCliqueur = function(cliqueur){
		this.baseDeDonnees.transaction(
			function(operation){
				var SQL_SUPPRESSION = "DELETE FROM cliqueur where id = ?";
				var parametres = [cliqueur.id];
				operation.executeSql(SQL_SUPPRESSION, parametres);
			},
			this.reagirErreur,
			this.reagirSucces
		);
	}
	
	this.trouverLeCliqueur = function(finalisation){
		var self = this;
		
		self.baseDeDonnees.transaction(
			function(operation){
				var SQL_SELECTION = "SELECT * FROM cliqueur";
				operation.executeSql(SQL_SELECTION, [], function(operation, resultat){
					try{
						var enregistrementCliqueur = resultat.rows.item(0);
						var cliqueur = new Cliqueur(enregistrementCliqueur.id,
							enregistrementCliqueur.nombrePourcentActuel,
							enregistrementCliqueur.nombrePourcentTotal,
							enregistrementCliqueur.nombrePourcentParSeconde);
					}catch(err){
						var cliqueur = new Cliqueur(null, 0, 0, 0);
					}
					
					
					self.cliqueur = cliqueur;
					
				});
				
				
			},
			this.reagirErreur,
			function(){
				finalisation(self.cliqueur);
			}		
		);
	}
	
	
	this.reagirErreur = function(erreur){
		console.log("ERREUR:SQL: "+ erreur.code + " : "+erreur.message);
	}
	
	this.reagirSucces = function(){
		console.log("SUCCES SQL");
	}
	
	this.initialiser();
	
	
};