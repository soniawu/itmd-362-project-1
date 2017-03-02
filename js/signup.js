$.noConflict();

// jQuery 3.x-style ready event and locally scoped $
(function($) {
  $(document).ready(
    function() {
      // Not utilizing nojs/hasjs classes this time. 
      // Leave them here as a pattern for future reference.
      $('html').removeClass('nojs');
      $('html').addClass('hasjs');
      // When page is refreshed, unhide the signup button
      // Empty input fields
      $('input#signup-bnt').removeClass('hide');
      $('#name').val('');
      $('#email').val('');
      $('#phone').val('');
      
      // Listen to the form submit.
      $('#signup-form').on('submit', function(e) {
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var emailCurrentValue = $('#email').val();
        var nameValidPattern = $('#name').attr('pattern');
        var emailValidPattern = $('#email').attr('pattern');
        var phoneValidPattern = $('#phone').attr('pattern');
        
        var successMsg = '<p id="rspn-msg"><span class="blue-text">'+ name + ',</span> thank you for signup the running event. Email will be sent to you for the login process</p>';
         
        // Validation maybe done in HTML by pattern attribute for some browsers,
        // but not for others. Do additional validation here.
        if (name === '') {
          alert('Name can not be blank.');
          return false;
        }
        if (email === '') {
          alert('Email can not be blank.');
          return false;
        }
        if (phone === '') {
          alert('Phone can not be blank.');
          return false;
        }
        if (!(name.match(nameValidPattern))) {
          alert('Please enter your name at "FirstName LastName" format');
          return false;
        }
        if (!(emailCurrentValue.match(emailValidPattern))) {
          alert('Please enter your email address at "you@example.com" format');
          return false;
        }
        if (!(phone.match(phoneValidPattern))) {
          alert('Please enter your phone number at "xxx-xxx-xxxx or xxxxxxxxxx" format');
          return false;
        } 
        
        // All fields are valid. form is submitted.
        // Post reply message and hide the sign up button.
        $('#signup-form').append(successMsg);
        $('input#signup-bnt').addClass('hide');
        
        e.preventDefault();
      });
    })
})(jQuery);
