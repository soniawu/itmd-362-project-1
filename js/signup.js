$.noConflict();

// jQuery 3.x-style ready event and locally scoped $
(function($) {
  $(document).ready(
    function() {
      $('html').removeClass('nojs');
      $('html').addClass('hasjs');
      
      $('#signup-form').on('submit', function(e) {
        var successMsg = '<p id="success-msg">You have successfuly signed up for the running event.</p>'; 
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
       /* var currentValue = $('#email').val();
        var validPattern = $('#email').attr('pattern');
        console.log(currentValue,validPattern); */
       
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
        $('#signup-form').append(successMsg);
        console.log($('#name').val(), "  <end here>");
        e.preventDefault();
      });
    })
})(jQuery);
