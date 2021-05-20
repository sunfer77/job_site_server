const express = require('express');
const app = express();
const session = require('express-session');

const job_Seeker_Routes = require('./Routes/Job_Seeker/jobSeekerRoutes');
const job_Routes = require('./Routes/Jobs/JobsRoutes');

const port = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
	session({
		key: '_session',
		secret: 'secret',
		resave: false,
		saveUninitialized: false,
		unset: 'destroy',

		cookie: {
			sameSite: 'Lax',
			httpOnly: true,
			secure: true,
			maxAge: 24 * 60 * 60 * 1000,
		},
	})
);

app.use('/jobSeeker', job_Seeker_Routes);
app.use('/jobs', job_Routes);

app.listen(port, () => {
	console.log(`App Is Running on ${port}`);
});
