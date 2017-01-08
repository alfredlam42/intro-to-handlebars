(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['newForm'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form>\n  <input placeholder=\"Pokedex Number\" name=\"pokedexNum\" type=\"text\" />\n  <input placeholder=\"Pokemon Name\" name=\"name\" type=\"text\" />\n  <input placeholder=\"Type\" name=\"affinity\" type=\"text\" />\n  <input placeholder=\"Description\" name=\"description\" type=\"text\" />\n</form>";
},"useData":true});
templates['newFormLink'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a href=\"#new\">Add New Pokemon</a>";
},"useData":true});
})();