const functions = require('firebase-functions');
// firesheets({ qs: {id:'1gBXLQisFElWnGReonjpU0EAuBzlXp5gLKhbjVfkStFo'} })
exports.firesheets = functions.https.onRequest((request, response) => {
	const Tabletop = require('tabletop');
	Tabletop.init({
		key: request.query.id,
		simpleSheet: true
	}).then(x => response.send(x));
});
