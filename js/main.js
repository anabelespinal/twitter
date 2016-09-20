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
		div.innerText = valorComentario;
		var comentarios = document.getElementById("contenedorComentarios");
		comentarios.insertBefore(div, comentarios.childNodes[0]);
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
    	boton.disabled = "true";
    } 
    if (longitud == 0){
  	  boton.disabled = true;
    }
    if (longitud == 140){
  	   boton.disabled = true;   
    }
    if(event.keyCode == 13){
    	var height = comentario.style.height;
    	var incremento = height + "10px"
    	document.getElementById("comentario").style.height = incremento;
    }
  });
	var textarea = document.getElementById("comentario");

  textarea.addEventListener('keydown', autosize);
             
	function autosize(){
		var el = this;
 setTimeout(function(){
		el.style.cssText = 'height:auto; padding:0';
    // for box-sizing other than "content-box" use:
    // el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
 }
}); 