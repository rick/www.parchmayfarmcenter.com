jQuery(function($) {
  
  // hovers for cell images
  var holder;
  $('.link-cell > a > img').hover(
    function() {
      holder = this.src;
      $(this).attr('src', this.src.replace(/\.png/, '-hover.png'));
    }, 
    function() {
      $(this).attr('src', holder.replace(/-hover\.png/, '.png'));
      holder = '';
    }
  );

  // jquery load of content area on link click
  $('.link-cell a, a.content-link').click(function(event) { 
    event.preventDefault();
    $('#content-area').load(this.href);
  });
});