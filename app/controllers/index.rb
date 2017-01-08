get '/' do
  redirect '/pokemon'
end

get '/pokemon' do
  pokemons = Array.new.concat(Pokemon.all)
  handlebars :'/pokemon/index', locals: {pokemons: pokemons}
end

get '/pokemon/:pokedexNum' do
  pokemon = Pokemon.find_by(pokedex_number: params[:pokedexNum])
  handlebars :'/pokemon/show', locals: {pokemon: pokemon}
end

post '/pokemon' do
  Pokemon.create(params[:pokemon])

  if request.xhr?
    params[:pokemon].to_json
  end
end