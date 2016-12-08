var AvisDAO = function(){
	
this.listeAvis = [];
	
	this.initialiser = function(){
		
		this.baseDeDonnees = window.openDatabase("CegepCliqueur", "1.0", "CegepCliqueur", 200000);
		
		this.baseDeDonnees.transaction(
			function(operation){
				var SQL_CREATION = "CREATE TABLE IF NOT EXISTS avis(id INTEGER PRIMARY KEY AUTOINCREMENT, note INTEGER, commentaire TEXT)";				
				
				operation.executeSql(SQL_CREATION);
				
			},
			this.reagirErreur,
			this.reagirSucces
		
		);
	}
	
	this.ajouterAvis = function(avis){
		this.baseDeDonnees.transaction(
			function(operation){
				var SQL_AJOUT = "INSERT INTO avis (note, commentaire) VALUES (?,?)";
				var parametres = [avis.note, avis.commentaire];
				operation.executeSql(SQL_AJOUT, parametres);				
			},
			this.reagirErreur,
			this.reagirSucces
		
		);
	}
	
	this.modifierAvis = function(avis){
		this.baseDeDonnees.transaction(
			function(operation){
				var SQL_MODIFICATION = "UPDATE avis SET note = ?, commentaire = ? WHERE id = ?";
				var parametres = [avis.note, avis.commentaire, avis.id];
				operation.executeSql(SQL_MODIFICATION, parametres);
			},
			this.reagirErreur,
			this.reagirSucces			
		);
	}
	
	this.listerTousLesAvis = function(finalisation){
		var self = this;
		
		self.baseDeDonnees.transaction(
			function(operation){
				var SQL_SELECTION = "SELECT * FROM avis";
				operation.executeSql(SQL_SELECTION, [], function(operation, resultat){
					self.listeAvis = [];
					for(var position = 0; position<resultat.rows.length; position++){
						var enregistrementAvis = resultat.rows.item(position);
						var avis = new Avis(
							enregistrementAvis.id,
							enregistrementAvis.note,
							enregistrementAvis.commentaire
						);
						self.listeAvis[self.listeAvis.length] = avis;
					}
					
				});
				
				
			},
			this.reagirErreur,
			function(){
				finalisation(self.listeAvis);
			}		
		);
	}
	
	
	this.reagirErreur = function(erreur){
		console.log("ERREUR:SQL: "+ erreur.code + " : "+erreur.message);
	}
	
	this.reagirSucces = function(){
		console.log("SUCCES SQL YOLO");
	}
	
	this.initialiser();	
};