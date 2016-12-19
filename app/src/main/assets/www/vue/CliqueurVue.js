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
			
		var rectangle = new Rectangle(new Point(0, 0), new Point(230, 180));
		var cornerSize = new Size(80, 50);
		var path = new Path.RoundRectangle(rectangle, cornerSize);
		path.fillColor = 'blue';
		
		var rectangle = new Rectangle(new Point(-20, -80), new Point(80, 100));
		var cornerSize = new Size(40, 40);
		var path = new Path.RoundRectangle(rectangle, cornerSize);
		path.fillColor = '#ffeecc';
		path.position = new Point(115, 100);

		var rectangle = new Rectangle(new Point(-20, 30), new Point(160, 100));
		var cornerSize = new Size(40, 40);
		var path = new Path.RoundRectangle(rectangle, cornerSize);
		path.rotate(90);
		path.fillColor = 'blue';
		path.position = new Point(115, 105);
			
		var rectangle = new Rectangle(new Point(-20, -80), new Point(130, -35));
		var path = new Path.RoundRectangle(rectangle);
		path.fillColor = '#ffeecc';
		path.position = new Point(155, 178);

		var rectangle = new Rectangle(new Point(-20, -50), new Point(40, -35));
		var path = new Path.RoundRectangle(rectangle);
		path.fillColor = '#ffeecc';
		path.position = new Point(115, 7.5);

		
	}
}
CliqueurVue.html = $("#pagePrincipale").html();