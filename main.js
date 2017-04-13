$(function() {
  $('.kyle-popup').on({'click': function() {
    $('.popup').toggleClass('visible');
    $('.beachball1').toggleClass('kyle-face');
    
    const imgSrc = ($('.beachball1').attr('src') === 'images/kyle.jpeg')
      ? 'images/beachball.png'
      : 'images/kyle.jpeg';
    $('.beachball1').attr('src', imgSrc);
  }
  });
});
// nope nope nope
// $('.kyle-face').toggleClass('visible');
// if (!$('.beachball1').hasClass('kyle-face')) {
//   $('.kyle-face').addClass('show-kyle');

//   $('.beachball1').addClass('kyle-face');
// } 
// else {
//   $('.beachball1').removeClass('kyle-face');
//   $('.kyle-face').removeClass('show-kyle');
// }
// $('.beachball1').toggleClass('kyle-face');
// $('.kyle-face').toggleClass('show-kyle');
