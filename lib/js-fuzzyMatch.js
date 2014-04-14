var fuzzyMatch = {
	pattern: '',
	prep: function(s){
		this.pattern = new RegExp('('+s.split('').join(').*?(')+').*?', 'i');
		return this;
	},
	match: function (s){
		return s.match(this.pattern) != null;
	},
	hiblock:function(s){
		return s.replace(
			this.pattern,
			'<i>$&</i>'
		);
	},
	hi:function(s){
		return s.replace(
			this.pattern,
			this._hi
		);
	},
	_hi:function(){
		var match = arguments[0];
		var max = arguments.length - 2;
		for (; max > 0; max--){
			var r = new RegExp('(^|[^÷])('+arguments[max]+')');
			match = match.replace(r, '$1÷$2þ');
		}
		return match.replace(/þ/g, '</i>').replace(/÷/g, '<i>').replace(/<\/i><i>/g, '');
	}
}