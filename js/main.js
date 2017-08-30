(function(){
	
	var app = {
		initialize: function() {
			this.setUpListeners();
			this.updateResult();
		},
		
		setUpListeners: function() {
			$("#increase-radius").on("click", $.proxy(this.increaseRadius, this));
			$("#reduce-radius").on("click", $.proxy(this.reduceRadius, this));
			
			$("#bg-color").on("change", $.proxy(this.bgChangeColor, this));
			$("#border-color").on("change", $.proxy(this.brChangeColor, this));
		},
		
		create: $(".create"),
		maxRadius: 20,
		minRadius: 0,
		
		bgChangeColor: function() {
			var newColor = "#" + $("#bg-color").val();
			this.create.css({
				"background-color": newColor
			});
			this.updateResult();
		},
		
		brChangeColor: function() {
			var newColor = "#" + $("#border-color").val();
			this.create.css({
				"border-color": newColor
			});
			this.updateResult();
		},
		
		increaseRadius: function() {
			var currentRadius = this.create.css("border-radius"),
				step = $("#step").val(),
				newRadius = (parseInt(currentRadius) + parseInt(step));
		
			if(newRadius > this.maxRadius){
				newRadius = this.maxRadius;
				$("#increase-radius").prop("disabled", true);
			}

			if(newRadius > this.minRadius){
				$("#reduce-radius").removeProp("disabled");
			}

			this.create.css({
			  	"border-radius": newRadius
			})

			this.updateResult();
		},
		
		reduceRadius: function() {
			var currentRadius = this.create.css("border-radius"),
				step = $("#step").val(),
				newRadius = (parseInt(currentRadius) - parseInt(step));

			if(newRadius < this.minRadius){
				newRadius = this.minRadius;
				$("#reduce-radius").prop("disabled", true);				
			}

			if(newRadius < this.maxRadius){
				$("#increase-radius").removeProp("disabled");
			}

			this.create.css({
			  "border-radius": newRadius
			})

			this.updateResult();
		},
		
		updateResult: function() {
			var borderRad = this.create.css("border-radius"),
				bgColor = this.create.css("background-color"),
				brColor = this.create.css("border-color"),
				codeResultArea = $("#code-result");
			
			codeResultArea.text(
				'border-radius: ' + borderRad + ';\n' +
				'border-color: ' + brColor + ';\n' +
				'background-color: ' + bgColor + ';'
			)
		}
	}
	
	app.initialize();
  
}());