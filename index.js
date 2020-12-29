const express = require('express');
const bodyParser = require('body-parser');

const { reminderMessage } = require('./flexMessage/reminderMessage');

const app = express();
app.use(bodyParser.json());

const request = require('request-promise');

const LINE_MESSAGING_API = 'https://api.line.me/v2/bot/message';
const LINE_HEADER = {
	'Content-Type': 'application/json',
	Authorization: `Bearer ${process.env.LINE_MESSAGING_API_KEY}`,
};

// process.env.MY_LINE_ID
app.post('/', (req, res) => {
    const body = req.body;

	reply(body, [reminderMessage]);
});

const reply = (body, messages) => {
	return request({
		method: `POST`,
		uri: `${LINE_MESSAGING_API}/reply`,
		headers: LINE_HEADER,
		body: JSON.stringify({
			replyToken: body.events[0].replyToken,
			messages,
		}),
	});
};

app.listen(5000);
