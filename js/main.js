window.addEventListener("load", function(){
	var boton = document.getElementById("enviar");
	boton.addEventListener("click", function(e){
		e.preventDefault();
		var comentario = document.getElementById("comentario");
		var valorComentario = comentario.value;
		agregarMensaje(valorComentario);
		valorComentario.value = "";
	});

	function agregarMensaje(valorComentario){
		var div = document.createElement("div");
		div.innerText = valorComentario;
		var comentarios = document.getElementById("contenedorComentarios");
		comentarios.insertBefore(div, comentarios.childNodes[0]);
	};
})




// window.onload = function(){
// 	var enviar = document.getElementById("enviar");
// 	enviar.onclick = function(e){
// 		e.preventDefault();
// 		var comentario = document.getElementById("comentario").value;       //setAtribute("class","comentarios");
// 		var repo = document.createElement("div");
// 		var textnode = document.createTextNode(comentario);
// 		repo.appendChild(textnode);
// 		var list = document.getElementById("contenedorComentarios");
// 		list.insertBefore(repo, list.childNodes[0]);
// 		document.getElementById("comentario").value = "";
// 	}; 
// 	var textArea = document.getElementById("comentario");
// 	textArea.onmouseover = function(){
// 		textArea.style.height = "60px";
// 	};
// 	textArea.onmouseout = function(){
// 		textArea.style.height = "30px";
// 	};
// }