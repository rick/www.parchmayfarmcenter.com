jQuery(function($) {
//  $('.link-cell').hover(function() {
//    
//  });

  $('.link-cell a').click(function(event) { 
    event.preventDefault();
    $('#content-area').load(this.href);
  });
});