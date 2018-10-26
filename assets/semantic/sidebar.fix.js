;(function ( $ ) {

  "use strict";

  $.fn.fixSidebar = function() {
    var $allModules     = $(this);

    $allModules
      .each(function() {
        var
          selector        = {
            pusher: ".pusher"
          },
          $module         = $(this),
          $context        = $("body");
        if($module.nextAll(selector.pusher).length === 0) {
          $module.addClass("fixed").detach().prependTo($context);
        }
      });

    return this;
  };

})( jQuery, window, document );
