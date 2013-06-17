// Model
var Model = function(data) {
	this.set = function(name, value) {
		this[name] = value;
	}
	this.get = function(name) {
		if (this[name] != undefined) {
			return this[name];
		}
		return null;
	}
	this.remove = function(name) {
		if (this[name])
			delete this[name];
	}
	this.construct = function(data) {
		if (data) {
			for (var n in data) {
				this.set(n, data[n]);
			}
		}
	};
	if (data)
		this.construct(data);
};
//View
var View = function() {
	var _display = null;
	this.button = null;
	this.construct = function() {
		_display = document.createElement("DIV");
		_display.style.width = "100px";
		_display.style.height = "100px";
		_display.style.backgroundColor = "#f00";

		this.button = document.createElement("BUTTON");
		this.button.innerHTML = "Change Colour";

	}
	this.show = function() {
		document.body.appendChild(_display);
		document.body.appendChild(this.button);
	}
	this.hide = function() {
		document.body.removeChild(_display);
		document.body.removeChild(this.button);
	}
	this.changeColor = function(color) {
		_display.style.backgroundColor = color;
	}
	this.construct();
}
//Controller
var Controller = function(model, view) {
	var _model = null;
	var _view = null;
	this.construct = function(model, view) {
		_model = model;
		_view = view;
	}
	this.updateColor = function() {
		_model.set("color", getColor());
		_view.changeColor(_model.get("color"));
	}
	function getColor() {
		var letters = '0123456789ABCDEF'.split('');
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.round(Math.random() * 15)];
		}
		return color;
	}


	this.construct(model, view);
}
