/**
 * options
 * @param options { username:'', password:'' }
 * @returns {{sid: null, request: null, options: *, Login: *, CleanOneSiteCache: *, CleanMultipleSiteCache: *}}
 * @constructor
 */
function GreyPanel( options ) {
    return {
        sid : null,
	request : null,
	options : options,
	Login : require( './api/login.js' ),
	CleanOneSiteCache : require('./api/cleanOneSiteCache.js'),
	CleanMultipleSiteCache : require('./api/cleanMultipleSiteCache.js')
    };
}
module.exports = GreyPanel;