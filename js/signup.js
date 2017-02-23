$.noConflict();

// jQuery 3.x-style ready event and locally scoped $
(function($) {
  $(document).ready(
    function() {
      $('html').removeClass('nojs');
      $('html').addClass('hasjs');
      $('input#signup-bnt').prop("disabled", false);
      $('#signup-form').on('submit', function(e) {
         
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var emailCurrentValue = $('#email').val();
        var nameValidPattern = $('#name').attr('pattern');
        var emailValidPattern = $('#email').attr('pattern');
        var phoneValidPattern = $('#phone').attr('pattern');
        
        var successMsg = '<p id="rspn-msg"><span class="blue-text">'+ name + ',</span> thank you for signup the running event. Email will be sent to you for the login process</p>';
         
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
        $('#signup-form').append(successMsg);
        $('input#signup-bnt').prop("disabled", true);
        
        e.preventDefault();
      });
    })
})(jQuery);
