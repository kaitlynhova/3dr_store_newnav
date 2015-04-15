$( document ).ready(function() {
  $( "#products" ).click(function() {
    $( "#product-list" ).slideToggle();
    $( "#mobile-product-list" ).slideToggle();
  });

  $( "#desktop-search-button" ).click(function() {
    $( "#poppin-search-bar" ).slideToggle();
  });

  $( "#products" ).click(function() {
    $( "#caret" ).toggleClass('spincaret');
  });
});
