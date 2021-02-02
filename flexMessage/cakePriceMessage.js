module.exports.reminderMessage = ({ cakeAmount, usdPrice }) => {
	return {
		type: 'flex',
		altText: `You have ${cakeAmount} of cake.`,
		contents: {
			type: 'bubble',
			body: {
				type: 'box',
				layout: 'vertical',
				contents: [
					{
						type: 'text',
						text: 'Pending Cake',
						weight: 'bold',
						size: 'xl',
						color: '#9e82d1',
						align: 'center',
						style: 'normal',
						decoration: 'none',
					},
					{
						type: 'image',
						url:
							'https://pancakeswap.finance/images/cake.svg',
						margin: 'xl',
					},
					{
						type: 'box',
						layout: 'vertical',
						contents: [
							{
								type: 'text',
								text: `${cakeAmount}`,
								size: 'xxl',
								color: '#ffffff',
								align: 'center',
							},
							{
								type: 'text',
								text: 'Cake to harvest',
								align: 'center',
								offsetBottom: 'none',
							},
							{
								type: 'text',
								text: `${usdPrice}`,
								size: 'xxl',
								color: '#ffffff',
								align: 'center',
								margin: '20px',
							},
							{
								type: 'text',
								text: 'USD',
								align: 'center',
							},
						],
						backgroundColor: '#a28bd4',
						margin: 'xxl',
						cornerRadius: 'md',
						paddingAll: 'md',
					},
				],
				backgroundColor: '#483f5a',
			},
		},
	};
};
