
(function ($) {
  $(function () {
    $('.menu__icon').on('click', function () {
      $(this).closest('.navbar').toggleClass('menu_state_open');
    });
  });
})(jQuery);
