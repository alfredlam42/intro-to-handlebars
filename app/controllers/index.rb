get '/' do
  redirect '/pokemon'
end

get '/pokemon' do
  pokemons = Array.new.concat(Pokemon.all)
  handlebars :'/pokemon/index', locals: {pokemons: starters, }
end