$(document).ready(function(){
  $('.text-forms__input-error').on('blur', function() {
    $('.text-forms__input-error-message').fadeOut('medium');
  });
  $('.text-forms__input-error').on('focus', function() {
    $(this).siblings('.text-forms__input-error-message').show();
  });
  $('.text-forms__input-error-message').hide();
});