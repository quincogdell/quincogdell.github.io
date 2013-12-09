console.log('This would be the main JS file.');
var app = app || {};
var $btnRepos;

$(document).ready(function(){
  console.log('ready')
  $btnRepos = $("#btn-repos");
  $btnRepos.on("click", app.showRepos);

  $(document).on("ajaxStart", function() {
    console.log("throbber")
    $("#throbber").html("<img src='./images/ajax-loader.gif'>");
  });

});


app.showRepos = function(e){
  e.preventDefault();
  console.log('showRepos')
  $.ajax({
    type: "get",
    url: "https://api.github.com/users/quincogdell/repos",
  }).done(function(response){
      app.appendRepos(response)
      $("#throbber").remove();
    });
};


app.appendRepos = function(response){

  $.each(response, function(){
    var repo = "<li>" + this.name + "</li>";
    $("#repos").append(repo);
  })
};
