(function ($, root, undefined) {

  $(function () {

    'use strict';

    $('.logo').realshadow({
      type: 'text',
      length: 7,
      color: '0,0,0',
    });

    $('.headline li').realshadow({
      type: 'text'
    });

    $('.contact .btn').realshadow({
      // type: 'text'
      length: 1,
      color: '102,102,102',
      inverse: true
    });



  });

})(jQuery, this);



