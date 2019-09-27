
function verificaValor(){
	    var elto = document.getElementById('nombre-disfraz');
	    if(elto.value.length < 1 || elto.value.length > 5)
	        alert('El texto no puede ser vacio ni poseer más de 5 carácteres.');
	}

function validaenvia(){
	var nd = document.getElementById('nombre-disfraz');
	var dd = document.getElementById('descripcion-disfraz');
	var Email = document.getElementById('email');
	var nom = document.getElementById('nombre');
	var cel = document.getElementById('celular');
	var img = document.getElementById('Foto-disfraz');
	if(nd.value.length == 0 || nd.value.length > 30){
		alert('El texto no puede ser vacio ni poseer más de 30 carácteres.');
	}
	if(nd.value.length > 500){
		alert('La descripción no puede superar los 500 carácteres');
	}
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/g;
	if(Email.value.search(regex)==0 || Email.value == null){
   		alert('La dirección de email es incorrecta.');
  	}
  	if( nom.value== null || nom.value.length<3 || nom.value.length>80){
  		alert('Su nombre de contacto debe poseer mas de 3 carácteres y menos de 80');
  	}
  	var regtel = /^([0-9]+){9}$/g;
  	if(cel.value.search(regtel)==0 || cel.value == null){
  		alert('Numero incorrecto');
  	}


}