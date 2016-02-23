function foo() {
	// we cannot access 'quuz' here
	var bar = 'lexically scoped';
	function zip() {
		// we can access 'bar' here
		var quux = 'lexically scoped - accessible within zip()';
	}
}
