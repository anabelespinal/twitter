window.addEventListener("load", function(){
	var boton = document.getElementById("enviar");
	var comentario = document.getElementById("comentario");

	boton.addEventListener("click", function(e){
		e.preventDefault();
		var valorComentario = comentario.value;
		agregarMensaje(valorComentario);
		document.getElementById("contador").innerText = "140";
		comentario.value = "";
		boton.disabled = true;
	});

	function agregarMensaje(valorComentario){
		var div = document.createElement("div");
		div.setAttribute("class","comentarios");
		var divDos = document.createElement("div");
		divDos.setAttribute("class","hora")
		var nuevoDato = new Date();
    var hora = nuevoDato.toLocaleTimeString();
		div.innerText = valorComentario;
		divDos.innerText = hora;
		var comentarios = document.getElementById("contenedorComentarios");
		comentarios.insertBefore(div, comentarios.childNodes[0])
		comentarios.insertBefore(divDos, comentarios.childNodes[1]);
	};

	comentario.addEventListener("keydown", function(){
		boton.disabled = false;
    var max = 140;
    var longitud = comentario.value.length;
    var contador = document.getElementById("contador");
    if(longitud <= max) { 
        contador.innerText = max-longitud; 
      }else{
        contador.innerText = max -longitud;
    }
    if(longitud >= 120){
    	contador.setAttribute("class", "verde");
    }else{
    	contador.setAttribute("class", "negro");
    }
    if(longitud >= 130){
    	contador.setAttribute("class", "rojo");
    } 
    if(longitud > 140){
    	contador.setAttribute("class", "rojo");
    	boton.disabled = true;
    } 
    // if (longitud == 0){
  	 //  boton.disabled = true;
    // }
  });

	var textarea = document.getElementById("comentario");
	textarea.addEventListener('keydown', textareaheight);
             
	function textareaheight(){
		var el = this;
 		setTimeout(function(){
			el.style.cssText = 'height:auto; padding:0';
	    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  	},0);
 	}
}); 































