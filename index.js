const express = require('express');
const bodyParser = require('body-parser');

const { reminderMessage } = require('./flexMessage/reminderMessage');

const app = express();
app.use(bodyParser.json());

let waitingForAns = false;

const request = require('request-promise');

const LINE_MESSAGING_API = 'https://api.line.me/v2/bot/message';
const LINE_HEADER = {
	'Content-Type': 'application/json',
	Authorization: `Bearer ${process.env.LINE_MESSAGING_API_KEY}`,
};

app.post('/', (req, res) => {
	const body = req.body;
	switch (body.events[0].message.type) {
		case 'text':
			if (body.events[0].message.text === 'Sure, Did!' && waitingForAns) {
				reply(body, [
					{
						type: 'sticker',
						id: '13288487045964',
						stickerId: '4',
						packageId: '1',
						stickerResourceType: 'STATIC',
					},
                ]);
                waitingForAns = false;
				break;
			}
		default:
			reply(body, [
				{
					type: `text`,
					text: `I don't quite understand what you mean 😰`,
				},
			]);
	}
});

app.get('/webhook', (req, res) => {
	push([reminderMessage]);
	waitingForAns = true;
	res.send({});
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

const push = (messages) =>
	request({
		method: 'POST',
		uri: `${LINE_MESSAGING_API}/push`,
		headers: LINE_HEADER,
		body: JSON.stringify({
			to: process.env.MY_LINE_ID,
			messages,
		}),
	});

app.listen(8080);
