module.exports.cakePriceMessage = ({ cakeAmount, thbPrice }) => {
	return {
		type: 'flex',
		altText: `You have ${cakeAmount} of cake!`,
		contents: {
			type: 'bubble',
			body: {
				type: 'box',
				layout: 'vertical',
				contents: [
					{
						type: 'text',
						text: 'Farms & Staking',
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
							'https://raw.githubusercontent.com/nonkung51/cron-linebot-docker/main/res/cake.png',
						margin: 'xl',
						size: 'md',
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
								text: `${thbPrice}`,
								size: 'xxl',
								color: '#ffffff',
								align: 'center',
								margin: 'xl'
							},
							{
								type: 'text',
								text: 'Baht',
								align: 'center',
								offsetBottom: 'none',
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
