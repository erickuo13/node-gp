var request = require('request');

module.exports = function () {
    var _gp = this;
    return new Promise(function (resolved,reject) {
	var options = {
	    url: 'https://api.greypanel.com/api/login',
	    form: {
	        username: _gp.options.username || '',
		password: _gp.options.password || ''
	    }
	};
	request.post( options,function (error, response, body) {
	    if( !error && body ){
		body = JSON.parse(body);
		if( body.response=='success' ) {
		    _gp.sid = body.result;
		    _gp.request = (function () {
			var jar = request.jar();
			var cookie = request.cookie('sid='+body.result);
			var url = 'https://api.greypanel.com';
			jar.setCookie(cookie, url);
			return request.defaults({jar:jar});
		    })();
		    return resolved( _gp );
		}else return reject(body.message);
	    }else return reject( error );
	});
    });

};