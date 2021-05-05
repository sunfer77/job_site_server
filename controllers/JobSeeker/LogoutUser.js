const db = require('../../db');

const logOut = (req, res) => {
	req.session.destroy();
};

module.exports = logOut;
