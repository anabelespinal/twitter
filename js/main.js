window.addEventListener("load", function(){

	var boton = document.getElementById("enviar");
	boton.disabled = true;
	boton.addEventListener("click", function(e){
		e.preventDefault();
		var comentario = document.getElementById("comentario");
		var valorComentario = comentario.value;
		agregarMensaje(valorComentario);
		valorComentario.value = "";

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
    if (longitud == 0){
      boton.disabled = true;
    }
	});
}); 