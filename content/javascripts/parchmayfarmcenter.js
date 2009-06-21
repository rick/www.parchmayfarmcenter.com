jQuery(function($) {
//  $('.link-cell').hover(function() {
//    
//  });

  $('.link-cell a').click(function(event) { 
    event.preventDefault();
    $('#content-area').load(this.href);
  });

  $('a.content-link').click(function(event) { 
    event.preventDefault();
    $('#content-area').load(this.href);
  });
});