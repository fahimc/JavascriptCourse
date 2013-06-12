var Shape = function() {
};

Shape.prototype.color = "#f00";
Shape.prototype.width = 100;
Shape.prototype.height = 100;
Shape.prototype.x = 0;
Shape.prototype.y= 0;
Shape.prototype.element = null;
// creates a DOM object
Shape.prototype.init = function() {
	this.element = document.createElement("DIV");
	document.body.appendChild(this.element);
}
// build the type of shape
Shape.prototype.build = function() {
};
// add color to the DOM object
Shape.prototype.style = function() {
	this.element.style.backgroundColor = this.color;
	this.element.style.width = this.width + "px";
	this.element.style.height = this.height + "px";
	this.element.style.position = "absolute";
	this.element.style.top = this.y+"px";
	this.element.style.left = this.x+"px";
}
// Rectangle
var Rectangle = function() {
	this.build = function() {
		this.width = 200;
		this.y=150;
		this.color  ="#0f0";
	}
};
//apply inheritance
Rectangle.prototype = new Shape();
Rectangle.prototype.baseConstructor= new Shape();

//Circle
var Circle = function() {
	this.build = function() {
		this.y=270;
		this.color  ="#00f";
		// no IE8  support in the example
		this.element.style.borderRadius = (this.width *0.5)+"px";
	}
	
};
//apply inheritance
Circle.prototype = new Shape();
Circle.prototype.baseConstructor= new Shape();