<?php 
	
	$server ="localhost";
	$user = "id14473004_perdidocs";
	$pass = "MS927282ms927282$";
	$db = "id14473004_bd1" ;
	$port = "3306";

	$conexion = new mysqli($server,$user,$pass,$db,$port);

	//insert delete and update
	function InDeUp($st , $conexion = null){
		if(!$conexion)global $conexion;
		$rest = $conexion -> query($st);
		return $conexion -> affected_rows;
	}

	//select
	function Consultar($st , $conexion = null){
		if(!$conexion)global $conexion;
		$rest = $conexion -> query($st);
		$datos = array();
		foreach ($rest as $registro) {
			$datos[] = $registro;
		}
		for($i=0;$i<count($datos);$i++){
		    $datos[$i]['estado'] = "true";
		}
		if (isset($datos[0])) { 
			return $datos;
		}else{
			return false;
		}
	
		//return $datos;

	}

	//utf-8
	function ConvertirUTF8($array){

		array_walk_recursive($array, function(&$item,$key){

			if (!mb_detect_encoding($item,'utf-8', true)) {
				$item = utf8_encode($item);
			}	
		});
		return $array;
	}

 ?>