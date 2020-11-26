<?php 
session_start();

//obtient contenu du fichier json
$file = file_get_contents("../dico/dictionnaire.json");
$fileDico = json_decode($file, true);

/* aleatoire
* permet de retourner un mot de façon aléatoire
* 
*/
function aleatoire ()
{
	global $fileDico;

	if($_SESSION != Null){
		session_destroy();
		$_SESSION['mot'] = null;

		//random des mots 
		$rand_keys = array_rand($fileDico, 2 );
		$_SESSION['mot'] = $fileDico[$rand_keys[0]];

		$message  = array('success'=>false, 'mot'=>strlen( $fileDico[$rand_keys[0]] ) );

		return $message;
	}else{
		//ranom des mots 
		$rand_keys = array_rand($fileDico, 2 );
		$_SESSION['mot'] = $fileDico[$rand_keys[0]];

		$message  = array('success'=>false, 'mot'=>strlen($fileDico[$rand_keys[0]]) );

		return $message;
	}
}

function verif ($lettre)
{


	if($_SESSION['mot'] != Null){
		$recherche = $_SESSION['mot'];

		//met en majuscule
		$MajLettre = strtoupper($lettre);
		$MajRecherche = strtoupper($recherche);

		//sépare lettre par lettre
		$arrayRecherche = str_split($MajRecherche);
		$arrayLettre    = str_split($MajLettre);

		//position 
		$position = array();

		//cherche correspondance entre le mot et la lettre
		foreach ($arrayRecherche as $key => $value) {

			if($arrayLettre[0] == $value){
				array_push($position,$key);
			}else{

			}
		}

		$count = count($position);

		if($count == 0 ){

			$message  = array('success'=>false);
		}else{
			$message = array('success'=> true, 'position' => $position, 'taille' => strlen($recherche), 'lettre'=> $arrayLettre[0] );
		}

		return $message;
	}else{

		aleatoire ();
		
	}
}

if(!empty($_POST['action'] ) ){
	$action = htmlspecialchars($_POST['action']);

	if(isset($_POST['lettre']) ){
		$lettre = htmlspecialchars($_POST['lettre']);
	}

	switch ($action) {
		case 'random':
			$mot = aleatoire();

			echo json_encode($mot );
			break;

		case 'verif':
			$mot = verif($lettre);

			echo json_encode( $mot ) ;

		break;
		
		default:
			# code...
			break;
	}

}

?>