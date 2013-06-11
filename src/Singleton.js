var Singleton = {
	_text : '',
	text : function(value) {
		if (value != undefined)
			this._text = value;
		return this._text;
	}
}