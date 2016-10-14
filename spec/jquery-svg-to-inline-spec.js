describe('Replace SVG', function() {
    var fixture;

    beforeEach(function() {
        // loadFixtures('example.html');
        fixture = setFixtures('<img src="https://upload.wikimedia.org/wikipedia/de/e/ec/Metallica_Logo.svg"  class="svg metallica">');

        $_elementClass = '.svg';
    });

	it('Replace img tag', function() {
        $( $_elementClass ).svgToInline();
        console.debug($('svg'));
        expect(body).toHaveClass('accessibility-font');
	});
});
