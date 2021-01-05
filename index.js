const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const app = express();
const port = 3000;

require('dotenv/config');

const PostRoute = require('./routes/posts');

app.use(bodyParser.json());
app.use('/posts', PostRoute);

mongoose
	.connect(process.env.DATABASECONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((res) => console.log('connected to DB!'))
	.catch((err) => console.log(err));
app.listen(port, () => {
	console.log(`listening at http://localhost${port}`);
});
