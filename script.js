var pokeImg = document.getElementById('poke-img');
var pokeDex = document.getElementById('poke-dex');

function addPoke() {
    var pokeStr = '';
    
    for (var i = 1; i < 152; i++) {
        pokeStr += '<img id="'+i+'"src=https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/'+ i +'.png>'
    }
    
    pokeImg.innerHTML = pokeStr;
    
}
    function clickPoke() {
		
		for (var i = 1; i < 152; i++) {
        document.getElementById(i).addEventListener('click', function() {
			var pokeInfo = '';
			var url = 'https://pokeapi.co/api/v2/pokemon/'+this.id;
		
			$.get(url, function(res) {
				console.log(res);
				 
				pokeInfo += '<h1>'+res.forms[0].name+'</h1><img src="'+res.sprites.front_default+'"/img><h2>Types</h2><ul><li>'+res.types[0].type.name+'</li><li>'+res.types[1].type.name+'</li><h2>Height</h2><p>'+res.height+'</p><h2>Weight</h2><p>'+res.weight+'</p>'
				
				pokeDex.innerHTML = pokeInfo;
			
			}, 'json');
			
			
			
        
        })
                                                    
	}
}


addPoke();
clickPoke();