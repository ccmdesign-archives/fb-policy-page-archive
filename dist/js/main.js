$(document).ready(function () {
  $('.js-lang-switch--fr').click(function () {
      $('.js-target').addClass('js-fr');
      $('.js-target').removeClass('js-en');
  });

  $('.js-lang-switch--en').click(function () {
      $('.js-target').addClass('js-en');
      $('.js-target').removeClass('js-fr');
  });
});
