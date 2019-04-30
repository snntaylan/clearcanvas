$(document).ready(function() {
  $(".Menu-link").click(function(event) {
    event.preventDefault();
    $(".Menu-overlay").toggleClass("open");
    $(".Menu").toggleClass("open");
  });
});
