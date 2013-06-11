var Car = function() {
	this._text = '';
	this.text = function(value) {
		if (value != undefined)
			this._text = value;
		return this._text;
	}
};
