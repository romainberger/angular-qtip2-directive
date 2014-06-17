!function($) {

  'use strict';

  angular.module('qtip2', [])
    .directive('qtip', function() {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
          var my = attrs.my || 'bottom center'
            , at = attrs.at || 'top center'
            , qtipClass = attrs.class || 'qtip'

          if (attrs.title) {
            var content = {'title': attrs.title, 'text': attrs.content}
          } else {
            var content = attrs.content
          }

          $(element).qtip({
            content: content,
            position: {
              my: my,
              at: at,
              target: element
            },
            hide: {
              fixed : true,
              delay : 100
            },
            style: qtipClass
          })
        }
      }
    })

}(window.jQuery);
