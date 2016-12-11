get '/' do
  redirect '/trainer'
end

get '/trainer' do
  starters = Array.new.concat(Pokemon.all)
  handlebars :'/trainer/index', locals: {pokemons: starters, }
end