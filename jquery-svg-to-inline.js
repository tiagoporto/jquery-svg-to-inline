/*!	jQuery SVG to Inline v0.0.1beta
*	https://github.com/tiagoporto/jquery-svg-to-inline
*	Copyright (c) 2015-2016 Tiago Porto (tiagoporto.com)
*	Released under the MIT license
*/

$.fn.svgToInline = function() {
	var usedClass = this.selector;

	this.each(function() {
		var path = $(this).attr('data') || $(this).attr('src');
		var current = $(this);
		var getClass = [];
		var newElementClass = '';

		$($(this).attr('class').split(' ')).each(function() {
			if (this.toString() !== usedClass.replace('.', '')) {
				getClass.push( this.toString() );
			};
		});

		if(getClass.length > 0){
			var elementClass = '';

			for (var i = 0; i < getClass.length; ++i) {
				var space = '';

				if (i !== getClass.length - 1) {
				  space = ' ';
				}

				elementClass += getClass[i] + space;

			}
		}

		if(elementClass !== ''){
			newElementClass = `class="${elementClass}"`;
		};

		$.ajax({
			url : path,
			dataType: "text",
			success : function (data) {
				var element = data.replace(/<[?!][\s\w\"-\/:=?]+>/g, '');

				var getSvgTag = element.match(/<svg[\w\s\t\n:="\\'\/.#-]+>/g);

				var addedClass = getSvgTag[0].replace('>', `${newElementClass}>`);

				var newElement = element.replace(/<svg[\w\s\t\n:="\\'\/.#-]+>/g, addedClass);

				current.replaceWith( newElement );
			}
		});

	});
};