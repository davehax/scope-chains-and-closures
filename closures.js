function foo() {
	// we cannot access 'quuz' here
	var bar = 'lexically scoped';
	quux = 'globally scoped';

	function zip() {
		// we can access 'bar' here
		var quux = 'lexically scoped - accessible within zip()';
		bar = true;
	}

	return zip;
}
