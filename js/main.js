(function(){
  
	var increaseRad = $("#increase-radius"),
		reduceRad = $("#reduce-radius"),
		create = $(".create"),
		maxRadius = 20,
		minRadius = 0;

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

		console.log(currentRadius);		
		console.log(newRadius);

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

		console.log(currentRadius);		
		console.log(newRadius);

	}); 
  
}());
