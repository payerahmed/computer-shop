window.jQuery(function ($) {
  $('.togglebtn').on('click', function () {
    $($(this).data('target')).slideToggle()
  }).each(function () {
    $($(this).data('target')).hide()
  })
})
