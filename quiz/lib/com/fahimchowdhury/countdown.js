var Countdown = {
	interval : null,
	minutes : 35,
	seconds : 5,
	callback : null,

	start : function() {
		var root =this;
		this.interval = setInterval(function(){root.onEnterFrame()}, 1000);
	},
	onEnterFrame : function() {
		var data = {
			end : false,
			seconds : 0,
			minutes : 0
		};
		if (parseInt(this.seconds) == 0) {
			if (this.minutes == 0) {
				
				data.end = true;
				clearInterval(this.interval);
				
			} else {
				this.minutes--;
				this.seconds = 60;
			}
		}
		if (this.minutes > 0) {
			var minute_text = this.minutes + (this.minutes > 1 ? ' minutes' : ' minute');
		} else {
			var minute_text = '';
		}
		var second_text = this.seconds > 1 ? 'seconds' : 'second';
		// el.innerHTML = minute_text + ' ' + this.seconds + ' ' + second_text + ' remaining';
		if(!data.end)
		{
			this.seconds--;
			if(this.seconds>=0&&this.seconds<10)this.seconds="0"+this.seconds;
		}
		if(String(this.minutes).length<2)this.minutes="0"+this.minutes;
		data.seconds = this.seconds;
		data.minutes = this.minutes;
		
		if (this.callback)
			this.callback(data);
	}
}
