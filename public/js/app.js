$(document).ready(function(){
  addNewForm();
  addNewPokemon();
})

function addNewForm(){
  $('.newPokemonForm').on('click', 'a', function(event){
    event.preventDefault();

    var formTemplate = Handlebars.templates['newForm'];
    $('.newPokemonForm').html(formTemplate());
  })
}

function addNewPokemon(){
  $('.newPokemonForm').on('submit', 'form', function(event){
    event.preventDefault();

    var data = $(this).serialize();
    var path = $(this).attr('action');
    var method = $(this).attr('method');

    var request = $.ajax({
      method: method,
      url: path,
      data: data,
      dataType: 'JSON'
    });

    request.done(function(response){
      addToList(response);
      replaceWithLink();
    })
  })

  function addToList(data){
    var newPokemonTemplate = Handlebars.templates['newPokemon'];
    $('#pokemonList').append(newPokemonTemplate({pokemon: data}))
  }

  function replaceWithLink(){
    var linkTemplate = Handlebars.templates['newFormLink'];
    $('.newPokemonForm').html(linkTemplate());
  }
}