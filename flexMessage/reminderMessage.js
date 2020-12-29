module.exports.reminderMessage = {
	type: 'flex',
	altText: 'Notification! Have you read some books today?',
	contents: {
		type: 'bubble',
		hero: {
			type: 'image',
			url:
				'https://nomad.pictures/wp-content/uploads/2016/02/cooking-books-on-table-1024x683.jpg',
			size: 'full',
			aspectRatio: '20:13',
			aspectMode: 'cover',
		},
		body: {
			type: 'box',
			layout: 'vertical',
			contents: [
				{
					type: 'text',
					text: 'Notification!',
					weight: 'bold',
					size: 'lg',
				},
				{
					type: 'text',
					text: 'Did you read some book today?',
				},
			],
		},
		footer: {
			type: 'box',
			layout: 'vertical',
			spacing: 'sm',
			contents: [
				{
					type: 'button',
					style: 'link',
					height: 'sm',
					action: {
						type: 'message',
						label: 'Sure, Did!',
						text: 'Sure, Did!',
					},
				},
				{
					type: 'spacer',
					size: 'sm',
				},
			],
			flex: 0,
		},
	},
};
