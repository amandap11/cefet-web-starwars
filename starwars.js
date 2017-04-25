// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado
$(document).ready(
	function(){
		$.ajax({
		url: 'http://swapi.co/api/films/',
		method: 'GET',
		success: function(resposta){
			atualizaLista(resposta);
		}
	});
});

function atualizaLista(resposta){

	let listaFilmes = resposta.results;

	for (var i = 0; i < listaFilmes.length; i++){

		console.log(listaFilmes[i]);

		$("ul").append("<li data-episode-url=" + listaFilmes[i].url + " + >Episódio " + 
			listaFilmes[i].episode_id + "</li>");


	}		
}