// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado

$.ajax({
  url: 'https://swapi.co/api/films/',
  method: 'GET',      // opcional: 'GET' é o valor padrão
  success: function(resposta){

		console.log(resposta);

		filmes = resposta.results;

		filmes.sort(function(movie1, movie2){
			return movie1.episode_id - movie2.episode_id;
		});

		for (let filme of filmes) {

			let episode = obtemEpisodioRomano(filme.episode_id);

			$('ul').append('<li data-episode-url="' + filme.url
				+ '">Episode ' + episode + '</li>');

		}

		$('li').click(function(e){

			let url = e.target.getAttribute('data-episode-url');

			console.log(url);
			$.ajax({
				url: url,
				method: 'GET',
				success: function(filme){

					let episode = obtemEpisodioRomano(filme.episode_id);

					$('.reading-animation').html('Episode ' + episode + '<br>' +
					filme.title.toUpperCase() + '<br><br>' + filme.opening_crawl);

				}
			});
		});
	}
});

function obtemEpisodioRomano(episodio){
	switch(episodio){
		case 1:
			episode = 'I';
			break;
		case 2:
			episode = 'II';
			break;
		case 3:
			episode = 'III';
			break;
		case 4:
			episode = 'IV';
			break;
		case 5:
			episode = 'V';
			break;
		case 6:
			episode = 'VI';
			break;
		case 7:
			episode = 'VII';
			break;
	}
	return episode;
}
