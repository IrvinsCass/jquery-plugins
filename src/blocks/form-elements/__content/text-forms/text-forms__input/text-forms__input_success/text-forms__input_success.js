$(document).ready(function(){
  $('.text-forms__input-success').on('blur', function() {
    $('.text-forms__input-success-message').fadeOut('medium');
  });
  $('.text-forms__input-success').on('focus', function() {
    $(this).siblings('.text-forms__input-success-message').show();
  });
  $('.text-forms__input-success-message').hide();
});