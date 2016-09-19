window.onload = function(){
	var enviar = document.getElementById("enviar");
	enviar.onclick = function(){
		var comentario = document.getElementById("comentario").value;       //setAtribute("class","comentarios");
		var repo = document.createElement("div");
		var textnode = document.createTextNode(comentario);
		repo.appendChild(textnode);
		var list = document.getElementById("contenedorComentarios");
		list.insertBefore(repo, list.childNodes[0]);
		document.getElementById("comentario").value = "";
	}; 
	var textArea = document.getElementById("comentario");
	textArea.onfocus = function(){
		textArea.style.height = "60px";
	};
	textArea.onblur = function(){
		textArea.style.height = "30px";
	};
}