$(document).ready(function(){

	//Afficher le nombre de trait
	$.post('../php/Mot.php',{action:'random'},function(data) {


		for (var i = 0; i < data.length; i++) {
			$('#trouve').append('_ ');
		}
  		
  		console.log(data)
	});

	//ecouter le clavier




		
		
	
});