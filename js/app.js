$(function() {

  //Set up instafeed
  var feed = new Instafeed({
      clientId: 'ceb2c2a3f09b41569a13a6053c3c9380',
      target: 'instafeed',
      get: 'tagged',
      tagName: 'photographyportfolio',
      links: true,
      limit: 8,
      sortBy: 'most-recent',
      resolution: 'standard_resolution',
      template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
  });
  feed.run();

});
