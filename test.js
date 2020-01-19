var GreyPanel = require( './index.js' );
var options = {
    username:'fill your greypanel account',
    password: 'fill your greypanel password'
};
/**
 * You can find your uid of site in GreyPanel back-office.
 * If you still found uid , you can contact GreyPanel customer service.
 */
const UID_LIST = [
    '234lk2j4-dfsd-c9d3-0021-kdjs324jl12k' // just for example
];

var GP = new GreyPanel(options);
var CleanAllCache = async function () {
    var GPInstance = await GP.Login();	// Login First
    var result = await GPInstance.CleanMultipleSiteCache(UID_LIST);	// Call API

    return result;
};

CleanAllCache().then(function (result) {
    console.log( 'count of cached site successfully clean：' + result.success.length );
    console.log( 'count of cached site fail clean：' + result.error.length );
}).catch(function (error) {
    console.log( error );
});