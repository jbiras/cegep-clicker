var CliqueurVue = function(cliqueur) {
	this.afficher = function() {
		var htmlEnConstruction = 
			CliqueurVue.html
			.replace("{POINTS}", cliqueur.nombrePourcentActuel.toFixed(2)+ " %");
		$("body").html(htmlEnConstruction);
		this.afficherCanvas();
	}
	
	this.afficherCanvas = function(){
		// Get a reference to the canvas object
		var canvas = document.getElementById('monCanvas');
		// Create an empty project and a view for the canvas:
		paper.setup(canvas);
		
		var rectangle = new Rectangle(new Point(50, 50), new Point(280, 250));
		var cornerSize = new Size(80, 50);
		var path = new Path.RoundRectangle(rectangle, cornerSize);
		path.fillColor = 'blue';

		var rectangle = new Rectangle(new Point(30, -30), new Point(130, 150));
		var cornerSize = new Size(40, 40);
		var path = new Path.RoundRectangle(rectangle, cornerSize);
		path.position += [87.5, 90];
		path.fillColor = 'white';

		var rectangle = new Rectangle(new Point(30, 80), new Point(210, 150));
		var cornerSize = new Size(40, 40);
		var path = new Path.RoundRectangle(rectangle, cornerSize);
		path.position += [48, 40];
		path.rotate(90);
		path.fillColor = 'blue';
			
		var rectangle = new Rectangle(new Point(30, -30), new Point(180, 15));
		var path = new Path.RoundRectangle(rectangle);
		path.position += [100, 235];
		path.fillColor = 'white';

		var rectangle = new Rectangle(new Point(30, 0), new Point(90, 15));
		var path = new Path.RoundRectangle(rectangle);
		path.position += [108, 50];
		path.fillColor = 'white';
	}
}
CliqueurVue.html = $("#pagePrincipale").html();