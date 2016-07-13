var fizzbuzz = {	

	fizzbuzz : function (value) { 
		if (value % 3 === 0) {
			if (value % 5 === 0) {
				return 'fizzbuzz'; }
				else {
		return 'fizz';
	}
	}
		else if (value % 5 === 0) {
			return 'buzz';
	}
		else {
			return value.toString();
		}
	}
};
