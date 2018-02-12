jQuery(function($) {

  $('#timeline').on('click', '.zilla-likes', function() {//when zilla-likes is clicked
    var link = $(this);//gets the div zilla-likes
    if (link.hasClass('active')) return false; //if it has already been liked, exit

    link.addClass('active'); //else mark as liked

    var id = $(this).attr('id'),//gets attribute Id
        postfix = link.find('.zilla-likes-postfix').text();//gets text after likes (which is blank)

    $.ajax({ //ajax to check if it has already been liked
      type: 'POST',
      url: zilla_likes.ajaxurl,
      data: {
        action: 'zilla-likes',
        likes_id: id,
        postfix: postfix,
      },
      xhrFields: {
        withCredentials: true,
      },
      success: function(data) {
        link.html(data).addClass('active').attr('title','You already like this');
      },
    });

    return false;
  });

  if ($('body.ajax-zilla-likes').length) {
    $('.zilla-likes').each(function() {
      var id = $(this).attr('id');
      $(this).load(zilla_likes.ajaxurl, {
        action: 'zilla-likes',
        post_id: id,
      });
    });
  }
});
