jQuery(function($) {
  
  // hovers for cell images
  var holder;
  $('.link-cell > a > img').livequery(function() {
    $(this).hover(function() {
      holder = this.src;
      $(this).attr('src', this.src.replace(/\.png/, '-hover.png'));
    }, 
    function() {
      $(this).attr('src', holder.replace(/-hover\.png/, '.png'));
      holder = '';
    });
  });

  // jquery load of content area on link click
  $('.link-cell a, a.content-link').livequery('click', function(event) { 
    event.preventDefault();
    $('#content-area').load(this.href);
    $('#grid').load(this.href.replace(/\.html/, '-grid.html'));
  });
  
  // "return home" links
  $('a.home-link').livequery('click', function (event) { 
    event.preventDefault();
    $('#grid').load('/home-grid.html');
    $('#content-area').load('/home-contents.html');
  });
});