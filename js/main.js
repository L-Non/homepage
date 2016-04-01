(function ($, root, undefined) {

  $(function () {

    'use strict';

    $('.logo').realshadow({
      type: 'text',
      length: 4,
      color: '119,119,119'
    });

    $('.headline').realshadow({
      type: 'text',
      inverse: true,
      length: 9
    });

    $('.contact').realshadow({
      type: 'text'
    });



  });

})(jQuery, this);



