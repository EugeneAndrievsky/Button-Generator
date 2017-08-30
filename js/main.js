(function(){
  
	var increaseRad = $("#increase-radius"),
		reduceRad = $("#reduce-radius"),
		create = $(".create"),
		maxRadius = 20,
		minRadius = 0,
		bgColorInput = $("#bg-color"),
		brColorInput = $("#border-color"),
		codeResultArea = $("#code-result");

	increaseRad.on("click", function() {

		var currentRadius = create.css("border-radius"),
			step = $("#step").val(),
			newRadius = (parseInt(currentRadius) + parseInt(step));
		
		if(newRadius > maxRadius){
			newRadius = maxRadius;
			$(this).prop("disabled",true);
		}
		
		if(newRadius > minRadius){
			reduceRad.removeProp("disabled");
		}
		
		create.css({
		  "border-radius": newRadius
		})

		updateResult();

	}); 	

	reduceRad.on("click", function() {

		var currentRadius = create.css("border-radius"),
			step = $("#step").val(),
			newRadius = (parseInt(currentRadius) - parseInt(step));
		
		if(newRadius < minRadius){
			newRadius = minRadius;
			$(this).prop("disabled", true)
		}
		
		if(newRadius < maxRadius){
			increaseRad.removeProp("disabled");
		}
		
		create.css({
		  "border-radius": newRadius
		})

		updateResult();

	}); 
	
	bgColorInput.on("change", function(){
		var newColor = "#" + $(this).val();
		create.css({
			"background-color": newColor
		});
		updateResult();
	});
	
	brColorInput.on("change", function(){
		var newColor = '#' + $(this).val();
		create.css({
			"border-color": newColor
		});
		updateResult();
	});
	
	var updateResult = function(){
		var borderRad = create.css("border-radius"),
			bgColor = create.css("background-color"),
			brColor = create.css("border-color");
		
		console.log(borderRad);
		console.log(bgColor);
		console.log(brColor);
		
		codeResultArea.text(
			'border-radius: ' + borderRad + ';\n' +
			'border-color: ' + brColor + ';\n' +
			'background-color: ' + bgColor + ';'
		)
	}
	
	updateResult();
	
}());
