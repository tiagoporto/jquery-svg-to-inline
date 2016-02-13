$.fn.svgToInline = function() {
	this.each(function() {
		var path = $(this).attr('data') || $(this).attr('src');
		var current = $(this);
		// var getClass = '';


		// $($(this).attr('class').split(' ')).each(function() {
		// 	if (this.toString() !== '.svg') {
		// 		getClass = this.toString();
		// 	};
		// });


		$.ajax({
			url : path,
			dataType: "text",
			success : function (data) {
				var element = data.replace(/<[?!][\s\w\"-\/:=?]+>/g, '');

				current.replaceWith( element );
			}
		});

	});
};