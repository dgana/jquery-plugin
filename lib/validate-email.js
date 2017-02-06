let email = $('#inputEmail');
email.keyup(function() {
  const regex = /\S+@\S+\.\S+/
  if(regex.test(email.val())) {
    email.css('border','1px solid green')
  } else {
    email.css('border','1px solid red')
  }
});
