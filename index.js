const express = require('express');
const bodyParser = require('body-parser');

const { reminderMessage } = require('./flexMessage/reminderMessage');
const { cakePriceMessage } = require('./flexMessage/cakePriceMessage');

const { getPendingCake } = require('./contractCall');

const app = express();
app.use(bodyParser.json());
const fetch = require('node-fetch');

const LINE_MESSAGING_API = 'https://api.line.me/v2/bot/message';
const LINE_HEADER = {
	'Content-Type': 'application/json',
	Authorization: `Bearer ${process.env.LINE_MESSAGING_API_KEY}`,
};

app.post('/', async (req, res) => {
	res.send({});
	const body = req.body;
	switch (body.events[0].message.type) {
		case 'text':
			// getPendingCake
			const msgText = body.events[0].message.text;
			if (msgText === 'Sure, Did!') {
				reply(body, [
					{
						type: 'sticker',
						id: '13288487045964',
						stickerId: '4',
						packageId: '1',
						stickerResourceType: 'STATIC',
					},
				]);
				break;
			} else if (msgText === 'Cake') {
				const pendingCake = await getPendingCake();
				const cakeAmount = pendingCake.toFixed(3);
				reply(body, [
					cakePriceMessage({
						cakeAmount,
						usdPrice: "wait..",
					}),
				]);
				break;
			}
		default:
			const res = await fetch(
				'https://api.quotable.io/random?maxLength=140'
			);
			const resJson = await res.json();
			reply(body, [
				{
					type: `text`,
					text: `${resJson.content} - ${resJson.author}`,
				},
				{
					type: 'sticker',
					stickerId: '51626496',
					packageId: '11538',
					stickerResourceType: 'STATIC',
				},
			]);
	}
});

app.get('/webhook', (req, res) => {
	push([reminderMessage]);
	res.send({});
});

const reply = (body, messages) => {
	return fetch(`${LINE_MESSAGING_API}/reply`, {
		method: 'POST',
		headers: LINE_HEADER,
		body: JSON.stringify({
			replyToken: body.events[0].replyToken,
			messages,
		}),
	});
};

const push = (messages) => {
	return fetch(`${LINE_MESSAGING_API}/push`, {
		method: 'post',
		headers: LINE_HEADER,
		body: JSON.stringify({
			to: process.env.MY_LINE_ID,
			messages,
		}),
	});
};

app.listen(8080);
