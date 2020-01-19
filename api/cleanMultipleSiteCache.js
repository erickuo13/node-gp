module.exports = function ( uids ) {
    var _gp = this;
    return new Promise(function (resolved, reject) {
	var cleanProcess = async function () {
	    var successResult = [];
	    var errorResult = [];
	    for( var i=0;i<uids.length;i++ ) {
		try{
		    var cleanResult = await _gp.CleanOneSiteCache(uids[i]);
		    successResult.push( cleanResult );
		}catch (error){
		    errorResult.push(error);
		}
	    }
	    return {
		success : successResult,
		error : errorResult
	    }
	};
	cleanProcess().then(resolved).catch(reject);
    });
};