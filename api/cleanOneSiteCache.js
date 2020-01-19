module.exports = function ( uid ) {
    var _gp = this;
    return new Promise(function (resolved, reject) {
        var options = {
            url : 'https://api.greypanel.com/api/cache/clear-site-uid?uid='+uid,
	    method : 'get'
	};
	_gp.request( options, function(err,response, body) {
	    if( !err && body ){
	        body = JSON.parse(body);
		if( body.response=='success' ) return resolved({ uid:uid,status:body.response });
		else return reject({ uid:uid,status:'fail',message:body.message });
	    }else return reject({ uid:uid,status:'error',message:JSON.stringify(err) });
	});
    });
};