$(document).ready(function(){

let url = '../php/Mot.php';
var error = 0 ;

	//Afficher le nombre de trait
	$.post(url,{action:'random'},function(data) {


		for (var i = 0; i < data.length; i++) {
			$('#trouve').append('_ ');
		}
  		
  		console.log(data)
  		console.log('taille : '+data.length)
	});



String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}
	//ecouter le clavier
	$('.alpha').click(function (){
		var lettre = $(this).html(); 

		//envoye lettre 
		$.post(url,{action: 'verif', lettre : lettre },function (data) {
			console.log('success : '+data.success);
			console.log('position :' + data.position);
			console.log(data)

			if(data.success == true ){
    			
    			var text = $('#trouve').html();
		
				for (var i = 0; i < data.taille; i++) {
					console.log(text)

						if(i == data.position){
							if(text.indexOf('_') == -1 ){

								console.log( text.indexOf('_') )

							}else{
							var new_text = text.replaceAt(data.position, data.lettre);
							console.log(new_text)

							$('#trouve').html(new_text)
							}

									
							
		
						}else{
							if(data.taille *2 == $('#trouve').html().length ||  $('#trouve').html().length > data.taille*2 ){

							}else{
								
								$('#trouve').append('_ ');
								

							}
							
						}
					
			
				}

			}else{

			 error ++;

			 switch(error){
			 	case 1 :

			 		$('#img-pendu').css('background-position', '-250px 0px');
			 	break;

			 	case 2 :

			 		$('#img-pendu').css('background-position', '-500px 0px');
			 	break;

			 	case 3 :

			 		$('#img-pendu').css('background-position', '-750px 0px');
			 	break;

			 	case 4 :

			 		$('#img-pendu').css('background-position', '-1000px 0px');
			 	break;
			 	case 5 :

			 		$('#img-pendu').css('background-position', '-1250px 0px');
			 	break;
			 	case 6 :

			 		$('#img-pendu').css('background-position', '-1500px 0px');
			 	break;

			 	case 7 :

			 		$('#img-pendu').css('background-position', '-1750px 0px');
			 	break;
			 	case 8 :

			 		$('#img-pendu').css('background-position', '-2000px 0px');
			 	break;
			 	case 9 :
			 		$('#img-pendu').css('background-position', '-2250px 0px');

			 		
			 	break;

			 	default :

			 	break;
			 }
			 console.log(error)
			}

		}, "json");
	});




		
		
	
});