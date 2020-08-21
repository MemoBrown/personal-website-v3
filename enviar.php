<?php
//Llamando a los input
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];

//datos correo
$destinatario = "contact@memobrown.com";
$asunto = "Contacto desde sitio web";

$carta = "De: $nombre \n";
$carta .= "Telefono: $telefono \n";
$carta .= "correo: $correo \n";
$carta .= "Mensaje: $mensaje";

//Enviando mensaje
mail($destinatario, $asunto, $carta);
header('Location: exito.html');


?>