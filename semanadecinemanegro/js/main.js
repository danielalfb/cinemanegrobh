(function ($) {
  $(function () {
    $('.menu__icon').on('click', function () {
      $(this).closest('.navbar').toggleClass('menu_state_open');
    });
  });
})(jQuery);

function translate() {
  var lang = localStorage.getItem("lang");
  if (lang) {
      if (lang == "pt") {
          $('[lang="pt"]').show();
          $('[lang="en"]').hide();
      } else {
          $('[lang="en"]').show();
          $('[lang="pt"]').hide();
      }
  } else {
      $('[lang="en"]').hide();
      localStorage.setItem('lang', 'pt');
  };
  $('.language').click(function() {
      $('[lang="pt"]').toggle();
      $('[lang="en"]').toggle();
      if (lang === 'pt') {
          localStorage.setItem('lang', 'en');
      } else {
          localStorage.setItem('lang', 'pt');
      }
  });
  var btnContainer = document.getElementById("language");
  var btns = btnContainer.getElementsByClassName("button_lang");
  for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("current_lang");
    current[0].className = current[0].className.replace("current_lang", "");
    this.className += " current_lang";
  })
  }
}
translate();
