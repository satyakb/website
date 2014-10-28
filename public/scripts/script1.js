$(function() {
  $('.heading').hover(function() {
    $(this).children('.collapse').show();
  }, function() {
    $(this).children('.collapse').hide();
  })
  $('.heading').click(function() {
    var collapse = $(this).children('.collapse');

    var prop = collapse.prop('icon');
    if (prop === 'remove') collapse.prop('icon', 'add');
    else collapse.prop('icon', 'remove');
    
    $(this).siblings('.content').slideToggle();
  })
  $('a').click(function(e) {
    e.stopPropagation()
  })
  $('.fab').click(function(e) {
    $("html, body").animate({ scrollTop: 0 });
  })

  // li 
  //           a(href="mailto:satyab@seas.upenn.edu" target="_blank") Email
  var email = "satyab";
  var emailHost = "seas.upenn.edu";
  var li = $('<li/>');
  var a = $('<a/>', {
    href: "mail" + "to:" + email + "@" + emailHost,
    text: 'Email',
    target: '_blank',
  })
  li.prepend(a);
  $('.contact-list').prepend(li);

})