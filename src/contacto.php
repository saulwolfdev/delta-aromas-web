<?php
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$ciudad = $_POST['ciudad'];
$mensaje = $_POST['mensaje'];
$para = 'resetdoctrine@hotmail.com';
$titulo = 'Correo Web de: ' . $nombre;
$header = 'From: ' . $email;
$msjCorreo = "Nombre: $nombre\n E-Mail: $email\n Telf: $telefono\n Ciudad: $ciudad\n Mensaje:\n $mensaje";

$header .= "MIME-Version: $nombre\r\n";
$header .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
			$msjCorreo = '<html><body>';
			$msjCorreo .= '<img src="correo.jpg" alt="Website Change Request" />';
			$msjCorreo .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
			$msjCorreo .= "<tr style='background: #eee;'><td><strong>Nombre:</strong> </td><td>" . strip_tags($_POST['nombre']) . "</td></tr>";
			$msjCorreo .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($_POST['email']) . "</td></tr>";
			$msjCorreo .= "<tr><td><strong>Teléfono</strong> </td><td>" . strip_tags($_POST['telefono']) . "</td></tr>";
			$msjCorreo .= "<tr><td><strong>Distrito / Provincia:</strong> </td><td>" . strip_tags($_POST['ciudad']) . "</td></tr>";
			$addURLS = $_POST['addURLS'];
			if (($addURLS) != '') {
			    $msjCorreo .= "<tr><td><strong>URL To Change (additional):</strong> </td><td>" . strip_tags($addURLS) . "</td></tr>";
			}
			$curText = htmlentities($_POST['curText']);           
			if (($curText) != '') {
			    $msjCorreo .= "<tr><td><strong>CURRENT Content:</strong> </td><td>" . $curText . "</td></tr>";
			}
			$msjCorreo .= "<tr><td><strong>Mensaje:</strong> </td><td>" . htmlentities($_POST['mensaje']) . "</td></tr>";
			$msjCorreo .= "</table>";
			$msjCorreo .= "</body></html>";
			
  
if ($_POST['submit']) {
if (mail($para, $titulo, $msjCorreo, $header)) {
echo "<script language='javascript'>
alert('Mensaje enviado, Muchas Gracias.');
window.location.href = 'http://www.deltaaromas.com/';
</script>";
} else {
echo 'Falló el envio';
}
}
?>