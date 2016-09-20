window.addEventListener("load", function(){

	var boton = document.getElementById("enviar");
	boton.addEventListener("click", function(e){
		e.preventDefault();
		var comentario = document.getElementById("comentario");
		var valorComentario = comentario.value;
		agregarMensaje(valorComentario);

		boton.disabled = true;
	});

	function agregarMensaje(valorComentario){
		var div = document.createElement("div");
		div.innerText = valorComentario;
		var comentarios = document.getElementById("contenedorComentarios");
		comentarios.insertBefore(div, comentarios.childNodes[0]);
	};

	comentario.addEventListener("keydown", function(){
		boton.disabled = false;
    var max = 140;
    var valorComentario = document.getElementById("comentario").value;
    var longitud = valorComentario.length;
    if(longitud <= max) { 
        document.getElementById("contador").value = max-longitud; 
      }else{
        document.getElementById("contador").value = max -longitud;
    }
    if(longitud == 120){
    	document.getElementById("contador").setAttribute("class", "verde");
    }
    if(longitud == 130){
    	document.getElementById("contador").setAttribute("class", "rojo");
    }
    // if (longitud == -1){
  	 //  boton.disabled = true;
    // }
    // if(event.keyCode == 13){
    // 	document.getElementById("comentario").style.height = "10px";
    // }
 	});

 // Al presionar enter ("/n") que crezca el textarea de acuerdo al tamaño del texto.
}); 