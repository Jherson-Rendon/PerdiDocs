<?php 
	require_once('funciones.php');	


		header("Access-Control-Allow-Origin: *");
    	header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    	header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");
    	header("Content-Type: application/json");
    	header("Allow: GET, POST, OPTIONS, PUT, DELETE");
    	


		$accion=null;
		$tipo=null;
		$num=null;
		if (isset($_GET['url'])) {
			$accion = $_GET['url'];
		}
		
		switch ($_SERVER['REQUEST_METHOD']) {
			case 'GET':
				
				if($accion=="documentos") {

					if (isset($_GET['t']) && isset($_GET['d'])) {

					$tipo=$_GET['t'];
					$num=$_GET['d'];
						
					}else{
						http_response_code(400);
						print_r(json_encode(Reportar(true,400,"variables_error")));
						die;
					}

					if (isset($tipo) && isset($num)) {

						$rest= Documento($tipo,$num);
						
						print_r( json_encode($rest));
						http_response_code(200);
						

					}else{
						http_response_code(400);
						print_r(json_encode(Reportar(true,400,"variables_error")));
					}
				}elseif ($accion=="todosdocumentos"){
				    $rest= TodosDocumentos();
				    print_r( json_encode($rest));
				    http_response_code(200);
				}else{
				        print_r(json_encode(Reportar(true,400,"ruta_error")));
						http_response_code(400);
					}


				break;

			case 'POST':
				$postbody = file_get_contents("php://input");
				$array = json_decode($postbody, true);
				if (json_last_error()==0) { 
					
					switch ($accion) {

						case "documentos";

							$rest= GuardarDocumento($array);
						    http_response_code($rest['codigo']);
						    print_r( json_encode($rest));

							break;

						default:
							
					}

				}else{
				    http_response_code(404);
					print_r(json_encode(Reportar(true,404,"json_invalido")));
				}

				break;
			

			default:

				http_response_code(405);
				print_r(json_encode(Reportar(true,405,"metodo_denegado")));

				break;


		}


 ?>