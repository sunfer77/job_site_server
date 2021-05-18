const express = require('express');
const app = express();

const cors = require('cors');
const session = require('express-session');

const job_Seeker_Routes = require('./Routes/Job_Seeker/jobSeekerRoutes');
const job_Routes = require('./Routes/Jobs/JobsRoutes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
	session({
		key: '_session',
		secret: 'secret',
		resave: false,
		saveUninitialized: false,
		cookie: { maxAge: 24 * 60 * 60 * 1000 },
	})
);
app.get('/', (req, res) => {
	res.send('hello Suneth');
});
app.use('/jobSeeker', job_Seeker_Routes);
app.use('/jobs', job_Routes);

app.listen(process.env.PORT || 3001, () => {
	console.log('App is Running!');
});
