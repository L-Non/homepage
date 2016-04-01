// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/*! Real Shadow v1.4.1 http://indamix.github.io/real-shadow | https://raw.github.com/Indamix/real-shadow/master/license.txt */
(function(k,n){function c(b,d){this!==k&&this!==n&&(d=b,b=this);var a;a=d||{};a=h({},a,"flat"===a.style?p.a:"drop"===a.type?p.b:p.c,{inset:a.inset?"inset":"",inverse:a.inverse?-1:1});for(var e=0;e<b.length;++e)l.push(t(b[e],a));q||(!1!==a.followMouse&&a.angle===n&&(document.body.addEventListener("mousemove",c.frame),q=!0),k.addEventListener("resize",c.update));c.frame();return b}function t(b,d){return h({node:b,color:b.getAttribute("data-shadow-color")||"0,0,0"},r(b),d)}function r(b){var d=
b.clientWidth>>1,a=b.clientHeight>>1;do d+=b.offsetLeft,a+=b.offsetTop;while(b=b.offsetParent);return{x:d,y:a}}var p={c:{length:7,opacity:.05},b:{length:4,opacity:.2},a:{length:40,opacity:1}},u=1/1500,v=Math.PI,l=[],q;c.reset=function(){l=[];document.body.removeEventListener("mousemove",c.frame);k.removeEventListener("resize",c.update);q=!1};c.update=function(){for(var b=l.length,d;b--;)d=l[b],h(d,r(d.node));c.frame()};c.frame=function(b){b||(b={pageX:k.innerWidth>>1,pageY:0});for(var d=
l.length,a;d--;){a=l[d];var e=(a.pageX===n?b.pageX:a.pageX)-a.x,c=(a.pageY===n?b.pageY:a.pageY)-a.y,g=Math.pow(e*e+c*c,.8)*u+1;2.3<g&&(g=2.3);var f=a,c=a.angle===n?Math.atan2(e,c)-v:a.angle;a=Array(f.length-1);for(var e=Math.sin(c),c=Math.cos(c),h=void 0,m=1;m<f.length;++m)h=("flat"===f.style?m:Math.pow(m,g))*f.inverse,a[m-1]=(h*e|0)+"px "+(h*c|0)+"px "+("flat"===f.style?0:Math.pow(m,1.7)|0)+"px rgba("+f.color+","+f.opacity+")"+f.inset;"drop"===f.type?f.node.style.filter=f.node.style.webkitFilter=
"drop-shadow("+a.join(") drop-shadow(")+")":f.node.style["text"===f.type?"textShadow":"boxShadow"]=a.join(",")}};var h=Object.assign||function(b){for(var c=1;c<arguments.length;c++){var a=arguments[c],e;for(e in a)a.hasOwnProperty(e)&&(b[e]=a[e])}return b},g=!1;"function"===typeof k.jQuery&&($.fn.realshadow=c,g=!0);"function"===typeof define&&define.amd&&(define(function(){return c}),g=!0);"undefined"!==typeof module&&module.exports&&(module.exports=c,g=!0);g||(k.realshadow=c)})(window);
