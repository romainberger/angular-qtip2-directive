angular.module('qtip2', [])
  .directive('qtip', function($rootScope, $timeout, $window) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var my = attrs.my || 'bottom center'
          , at = attrs.at || 'top center'

        element.qtip({
          content: attrs.content,
          position: {
            my: my,
            at: at,
            target: element
          },
          hide: {
            fixed : true,
            delay : 100
          },
          style: 'qtip'
        })
      }
    }
  })
