$(function() {
$('.sidebar a').each(function() {
$(this).on('click', function(e) {
e.preventDefault();
var scrollTo = $(this).attr('href');
var whitespace = scrollTo == '#s1' ? 150 : 20;
$('html,body').animate({
  scrollTop: $(scrollTo).offset().top - whitespace
}, 500);
});
});
});
