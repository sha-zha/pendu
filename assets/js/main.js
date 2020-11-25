$(document).ready(function(){

let url = '../php/Mot.php';
var error = 0 ;
var good = 0;

	//Afficher le nombre de trait
	$.post(url,{action:'random'},function(data) {

		for (var i = 0; i < data.mot; i++) {
			$('#trouve').append('<span id="'+i+'" class="mx-auto">_</span>');
		}

  		
	},"json");



String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}
	//ecouter le clavier
	$('.alpha').click(function (){
		var lettre = $(this).html(); 

		//envoye lettre 
		$.post(url,{action: 'verif', lettre : lettre },function (data) {
			var span= $('#trouve').find('span');



			if(data.success == true ){
    			
    			
    			
    			for (var i = 0; i < span.length; i++) {

    				//remplacer le _ par la lettre
    			    for (var j = 0; j < data.position.length; j++) {
    			    	console.log($(span[i]).attr('id') )
    			    	console.log(data.position[j])
    					//correspondance possition
    					if($(span[i]).attr('id') == data.position[j] ){
    						$(span[i]).html(data.lettre)

    						good++;

    						if(span.length == good ){
								$('#message').html('<p class="alert alert-info ">Vous avez gagné</p><a>Rejouer ?</a>')
							}
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