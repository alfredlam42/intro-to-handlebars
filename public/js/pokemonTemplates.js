(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['newForm'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form method=\"POST\" action=\"/pokemon\">\n  <input placeholder=\"Pokedex Number\" name=\"pokemon[pokedex_number]\" type=\"text\" />\n  <input placeholder=\"Pokemon Name\" name=\"pokemon[name]\" type=\"text\" />\n  <input placeholder=\"Type\" name=\"pokemon[affinity]\" type=\"text\" />\n  <input placeholder=\"Description\" name=\"pokemon[description]\" type=\"text\" />\n  <button type=\"submit\">Add Pokemon</button>\n</form>";
},"useData":true});
templates['newFormLink'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a href=\"#new\">Add New Pokemon</a>";
},"useData":true});
templates['newPokemon'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<tr class=\"pokemon\">\n  <td class=\"pokedexNumber\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.pokemon : depth0)) != null ? stack1.pokedex_number : stack1), depth0))
    + "</div>\n  <td class=\"pokemonName\"><a href=\"/pokemon/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.pokemon : depth0)) != null ? stack1.pokedex_number : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.pokemon : depth0)) != null ? stack1.name : stack1), depth0))
    + "</a></td>\n</tr>";
},"useData":true});
})();