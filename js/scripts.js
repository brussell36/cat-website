$(document).ready(function() {
  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-bg");
  });

  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-bg");
  })
});