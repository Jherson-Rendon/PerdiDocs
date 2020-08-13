<?php 
	require_once('bd.php');	
    
    function TodosDocumentos(){
		$query = "select * from documento";
		$respuesta = Consultar($query);
		if ($respuesta==false) {
			return Reportar("true","404","no_hay_registros");
		}else{
		    return ConvertirUTF8($respuesta);
		}
	}

	//esto es un comentario
    
	function Documento($tipo,$num){
		$query = "select * from documento where numero='$num' AND tipo_tipo_doc=$tipo";
		$respuesta = Consultar($query);
		if ($respuesta==false) {	
			return Reportar(true,404,"inexistente");
		}else{
		    return ConvertirUTF8($respuesta);
		}
	}

	function GuardarDocumento($array){

		$tipo= $array['tipo'];
		$numero= $array['numero'];
		$contacto=$array['contacto'];

		$fecha_actual= getdate();
		$fecha=$fecha_actual['year'].'/'.$fecha_actual['mon'].'/'.$fecha_actual['mday'];

		$query = "INSERT INTO documento(tipo_tipo_doc, numero, contacto, fecha) VALUES ($tipo,'$numero','$contacto','$fecha')";

		if (ValidarDatos($tipo,$numero,$contacto)===true) {
			InDeUp($query);
			return Reportar(false,200,"guardado_correctamente");
		}else{
			return Reportar(true,400,"parametros_errados");
		}
		
		
	}
	

	function Actualizar($indice,$array){
		$tipo= $array['tipo'];
		$numero= $array['numero'];
		$contacto=$array['contacto'];
		$fecha_actual= getdate();
		$fecha=$fecha_actual['year'].'/'.$fecha_actual['mon'].'/'.$fecha_actual['mday'];

		$query="UPDATE documento SET tipo_tipo_doc=$tipo,numero='$numero',contacto='$contacto',fecha='$fecha' WHERE id=$indice";

		$verificarR="SELECT * FROM documento where id=$indice";

		if (Consultar($verificarR)===false) {
			return Reportar(true,404,"inexistente");
		}elseif (ValidarDatos($tipo,$numero,$contacto)===true) {
			InDeUp($query);
			return Reportar(false,200,"actualizado_correctamente");
		}else{
			return Reportar(true,400,"parametros_errados");
		}

	}

	function Eliminar($indice){

		$query="DELETE FROM documento WHERE id=$indice";
		$verificarR="SELECT * FROM documento where id=$indice";

		if (Consultar($verificarR)===false) {
			return Reportar(true,404,"inexistente");
		}else{
			InDeUp($query);
			return Reportar(false,200,"Eliminado_correctamente");
		}
	}

	
	function Reportar($estado,$cod,$msm){
	    
	    $json = array(
	            "estado_error" => $estado,
	            "codigo" => $cod,
	            "mensaje" => $msm
	        );
	        
	    return $json;
	}

	function ValidarDatos($tipo,$numero,$contacto){
		if ($tipo==='1' || $tipo==='2' || $tipo==='3' || $tipo==='4' ) {
			if (ctype_digit ($numero) && strlen($numero)<=12) {
				if (ctype_digit ($contacto) && strlen($contacto)<=10){
						
						return true;
					
				}else{
					return false;
					}
			}else{
				return false;
				}
		}else{
			return false;
		}
	}
 ?>