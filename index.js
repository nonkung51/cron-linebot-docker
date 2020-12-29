const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const request = require('request-promise');

const LINE_MESSAGING_API = 'https://api.line.me/v2/bot/message';
const LINE_HEADER = {
	'Content-Type': 'application/json',
	Authorization: `Bearer `,
};

app.post('/', (req, res) => {
	console.log(req.body);
	res.send({});
});

app.listen(5000);
