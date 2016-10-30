$(document).ready(function(){
  placeHeader('Intro To Handlebars');
  placeTemplateAJAXCall('post-listings', 'post_preview', '/api/posts')
  postingMouseOver();
  postingMouseOff();
})

function postingMouseOver(){
  $('#post-listings').on('mouseover', 'a', function(){
    $(this).css('background', 'gray');
  })
}

function postingMouseOff(){
  $('#post-listings').on('mouseleave', 'a', function(){
    $(this).css('background', 'white');
  })
}

function placeTemplateAJAXCall(containerID, templateName, path){
  // console.log(containerID, templateName, path);
  // console.log('making AJAX call');
  var request =   $.ajax({
    method: 'GET',
    url: '/api/posts',
    dataType: 'JSON'
  });

  request.done(function(response){
    // var responseData = JSON.parse(response);
    placeTemplateJSON(containerID, templateName, response);
  })
}

function placeTemplateJSON(containerID, templateName, data){
  var template = Handlebars.templates[templateName];
  $('#' + containerID).html(template(data));
}

function placeHeader(title){
  var data = {title: title};
  placeTemplateJSON('header', 'header', data);
}