// SMOOTH SCROLL FOR IE / EDGE / SAFARI
$('.nav-item a').on('click', function(e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body')
            .animate({
                scrollTop: $(hash).offset().top
            }, 800);
    }
});



/* File: jquery.barfiller.js*/

$(document).ready(function() {
    $('#bar1').barfiller({
        barColor: '#28a745'
    });
    $('#bar2').barfiller();
    $('#bar3').barfiller({
        barColor: '#fc6'
    });
    $('#bar4').barfiller({
        barColor: '#adb5bd'
    });
    $('#bar5').barfiller();
    $('#bar6').barfiller({
        barColor: 'green'
    });
    $('#bar7').barfiller({
        barColor: '#856404'
    });
});


var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();

(function($) {

    $.fn.barfiller = function(options) {

        var defaults = $.extend({
            barColor: '#16b597',
            tooltip: true,
            duration: 1000,
            animateOnResize: true,
            symbol: "%"
        }, options);


        /******************************
        Private Variables
        *******************************/

        var object = $(this);
        var settings = $.extend(defaults, options);
        var barWidth = object.width();
        var fill = object.find('.fill');
        var toolTip = object.find('.tip');
        var fillPercentage = fill.attr('data-percentage');
        var resizeTimeout;
        var transitionSupport = false;
        var transitionPrefix;

        /******************************
        Public Methods
        *******************************/

        var methods = {

            init: function() {
                return this.each(function() {
                    if (methods.getTransitionSupport()) {
                        transitionSupport = true;
                        transitionPrefix = methods.getTransitionPrefix();
                    }

                    methods.appendHTML();
                    methods.setEventHandlers();
                    methods.initializeItems();
                });
            },

            /******************************
            Append HTML
            *******************************/

            appendHTML: function() {
                fill.css('background', settings.barColor);

                if (!settings.tooltip) {
                    toolTip.css('display', 'none');
                }
                toolTip.text(fillPercentage + settings.symbol);
            },


            /******************************
            Set Event Handlers
            *******************************/
            setEventHandlers: function() {
                if (settings.animateOnResize) {
                    $(window).on("resize", function(event) {
                        clearTimeout(resizeTimeout);
                        resizeTimeout = setTimeout(function() {
                            methods.refill();
                        }, 300);
                    });
                }
            },

            /******************************
            Initialize
            *******************************/

            initializeItems: function() {
                var pctWidth = methods.calculateFill(fillPercentage);
                object.find('.tipWrap').css({
                    display: 'inline'
                });

                if (transitionSupport)
                    methods.transitionFill(pctWidth);
                else
                    methods.animateFill(pctWidth);
            },

            getTransitionSupport: function() {

                var thisBody = document.body || document.documentElement,
                    thisStyle = thisBody.style;
                var support = thisStyle.transition !== undefined || thisStyle.WebkitTransition !== undefined || thisStyle.MozTransition !== undefined || thisStyle.MsTransition !== undefined || thisStyle.OTransition !== undefined;
                return support;
            },

            getTransitionPrefix: function() {
                if (/mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase())) {
                    return '-moz-transition';
                }
                if (/webkit/.test(navigator.userAgent.toLowerCase())) {
                    return '-webkit-transition';
                }
                if (/opera/.test(navigator.userAgent.toLowerCase())) {
                    return '-o-transition';
                }
                if (/msie/.test(navigator.userAgent.toLowerCase())) {
                    return '-ms-transition';
                } else {
                    return 'transition';
                }
            },

            getTransition: function(val, time, type) {

                var CSSObj;
                if (type === 'width') {
                    CSSObj = {
                        width: val
                    };
                } else if (type === 'left') {
                    CSSObj = {
                        left: val
                    };
                }

                time = time / 1000;
                CSSObj[transitionPrefix] = type + ' ' + time + 's ease-in-out';
                return CSSObj;

            },

            refill: function() {
                fill.css('width', 0);
                toolTip.css('left', 0);
                barWidth = object.width();
                methods.initializeItems();
            },

            calculateFill: function(percentage) {
                percentage = percentage * 0.01;
                var finalWidth = barWidth * percentage;
                return finalWidth;
            },

            transitionFill: function(barWidth) {

                var toolTipOffset = barWidth - toolTip.width();
                fill.css(methods.getTransition(barWidth, settings.duration, 'width'));
                toolTip.css(methods.getTransition(toolTipOffset, settings.duration, 'left'));

            },

            animateFill: function(barWidth) {
                var toolTipOffset = barWidth - toolTip.width();
                fill.stop().animate({
                    width: '+=' + barWidth
                }, settings.duration);
                toolTip.stop().animate({
                    left: '+=' + toolTipOffset
                }, settings.duration);
            }

        };

        if (methods[options]) { // $("#element").pluginName('methodName', 'arg1', 'arg2');
            return methods[options].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof options === 'object' || !options) { // $("#element").pluginName({ option: 1, option:2 });
            return methods.init.apply(this);
        } else {
            $.error('Method "' + method + '" does not exist in barfiller plugin!');
        }
    };

})(jQuery);



        /******************************
        Form validation
        *******************************/

function validateEmail () {
	var getEmail = document.getElementById("getValue");
	var email = getEmail.value;
	var regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	if (regExp.test (email)) {
		getEmail.style.backgroundColor="green"
	} else {
		getEmail.style.backgroundColor="red"
	}
}