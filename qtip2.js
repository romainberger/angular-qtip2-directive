!function($) {

    'use strict';

    angular.module('qtip2', [])
        .directive('qtip', function() {
            return {
                restrict: 'A',
                scope : {
                    qtipVisible : '=',
                    qtip : '@',
                    qtipTitle : '@'
                },
                link: function(scope, element, attrs) {
                    console.debug('Applying qTip:', attrs);
                    var my = attrs.qtipMy || 'bottom center'
                        , at = attrs.qtipAt || 'top center'
                        , qtipClass = attrs.qtipClass || 'qtip'
                        , content = attrs.qtipContent || attrs.qtip;

                    if (attrs.qtipTitle) {
                        content = {'title': attrs.qtipTitle, 'text': attrs.qtip};
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
                    });

                    if(attrs.qtipVisible) {
                        scope.$watch('qtipVisible', function (newValue) {
                            $(element).qtip('toggle', newValue);
                        });
                    }

                    scope.$watch('qtip', function(newValue) {
                        $(element).qtip('option', 'content.text', newValue);
                    });

                    if (attrs.qtipTitle) {
                        scope.$watch('qtipTitle', function (newValue) {
                            $(element).qtip('option', 'content.title', newValue);
                        });
                    }
                }
            }
        })

}(window.jQuery);
