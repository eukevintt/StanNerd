function trocar(titulo,imagem,link){
	document.getElementById('titulo').value = titulo;
	document.getElementById('imagem_principal').src = imagem;
	document.getElementById('link').href = link;
}