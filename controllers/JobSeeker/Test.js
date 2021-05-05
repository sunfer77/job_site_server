const logOut = (req, res) => {
	req.session.destroy();
};

module.exports = logOut;
