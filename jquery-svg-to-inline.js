/*! jQuery SVG to Inline v0.1.2beta
*   https://github.com/tiagoporto/jquery-svg-to-inline
*   Copyright (c) 2015-2016 Tiago Porto (tiagoporto.com)
*   Released under the MIT license
*/

$.fn.svgToInline = function () {
    'use strict';

    var usedClass = this.selector;

    this.each(function () {
        var svg = {
                currency: $(this),
                newClass: '',
                oldClass: '',
                path: $(this).attr('data') || $(this).attr('src')
            },
            classes = {
                getting: [],
                inject: $(this).attr('class').split(' ')
            };

        classes.inject.forEach(function (element) {
            element.toString() !== usedClass.replace('.', '') && classes.getting.push(element.toString());
        });


        if (classes.getting.length > 0) {
            var elementClass = '';

            for (var i = 0; i < classes.getting.length; ++i) {
                var space = '';

                if (i !== classes.getting.length - 1) {
                    space = ' ';
                }

                elementClass += classes.getting[i] + space;
            }
        }

        if (elementClass !== '') {
            svg.newClass = 'class="' + elementClass + '"';
        }

        $.ajax({
            url: svg.path,
            dataType: 'text',
            success: function success(data) {
                var element = data.replace(/<[?!][\s\w\"-\/:=?]+>/g, '');

                var getSvgTag = element.match(/<svg[\w\s\t\n:="\\'\/.#-]+>/g);

                // var getSag = getSvgTag[0].match(/class=\"(.*?)\"/);

                // getSag[1] && (svg.newClass = getSag[1] + ' ' + svg.newClass);


                var addedClass = getSvgTag[0].replace(/class=\"[\w\s]+\"/, '');
                addedClass = addedClass.replace('>', ' ' + svg.newClass + '>');

                var newElement = element.replace(/<svg[\w\s\t\n:="\\'\/.#-]+>/g, addedClass);

                svg.currency.replaceWith(newElement);
            }
        });
    });
};
