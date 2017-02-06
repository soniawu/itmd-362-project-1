$.noConflict();

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  
  $('#signup-form').on('submit',function() {
    var successMsg = '<p id="success-msg">You have successfuly signed up for the running event.</p>';
    $('#signup-form').append(successMsg);
    //console.log($('#name').val(),"  <end here>");
  })

});
