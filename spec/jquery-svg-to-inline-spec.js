describe('Replace SVG', function() {

    // beforeEach(function() {
    // });

    it('Replace img tag', function() {
        $('body').append('<img src="https://upload.wikimedia.org/wikipedia/de/e/ec/Metallica_Logo.svg" class="svg metallica">');
        $('.svg').svgToInline();
    });
});
