const express = require('express');
const app = express();

//const cors = require('cors');
const session = require('express-session');

const job_Seeker_Routes = require('./Routes/Job_Seeker/jobSeekerRoutes');
const job_Routes = require('./Routes/Jobs/JobsRoutes');

app.use(function (req, res, next) {
	res.setHeader(
		'Access-Control-Allow-Origin',
		'https://elegant-wozniak-afb7d4.netlify.app'
	);

	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, OPTIONS, PUT, PATCH, DELETE'
	);

	res.setHeader(
		'Access-Control-Allow-Headers',
		'X-Requested-With,content-type'
	);

	res.setHeader('Access-Control-Allow-Credentials', true);

	next();
});

// app.use(cors(
// 	{origin:'https://elegant-wozniak-afb7d4.netlify.app/',
//methods:'GET, POST, OPTIONS, PUT, PATCH, DELETE';
// }
// ));
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
