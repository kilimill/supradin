const data = {
	title: 'Суперспособности вашего малыша',
	url: 'https://supradyn.letidor.ru',
	statistics: {
		YM_ID: 42833959,
		GA_ID: 'UA-88014128-10',
		RMBT_ID: 7339797,
		PAGE_LOAD_EVENT: false
	},
	share: {
		default_img: '/share/share_default.jpg',
		title: 'Юный супергерой',
		description: 'Узнайте, какие суперспособности есть у вашего ребенка и как их развить',
		dynamic_shares: {
			1: {
				img: '/share/share_language.jpg',
				title: 'Поздравляем!',
				description: 'У вашего ребенка обнаружились языковые способности. Помогите юному дарованию их развить'
			},
			2: {
				img: '/share/share_music.jpg',
				title: 'Поздравляем!',
				description: 'У вашего ребенка обнаружились музыкальные способности. Помогите юному дарованию их развить'
			},
			3: {
				img: '/share/share_sport.jpg',
				title: 'Поздравляем!',
				description: 'У вашего ребенка обнаружились спортивные способности. Помогите юному дарованию их развить'
			},
			4: {
				img: '/share/share_vitalization.jpg',
				title: 'Поздравляем!',
				description: 'У вашего ребенка обнаружились визуально-пространственные способности. Помогите юному дарованию их развить'
			},
			5: {
				img: '/share/share_draw.jpg',
				title: 'Поздравляем!',
				description: 'У вашего ребенка обнаружились художественные способности. Помогите юному дарованию их развить'
			},
			6: {
				img: '/share/share_artist.jpg',
				title: 'Поздравляем!',
				description: 'У вашего ребенка обнаружились артистические способности. Помогите юному дарованию их развить'
			},
			7: {
				img: '/share/share_communication.jpg',
				title: 'Поздравляем!',
				description: 'У вашего ребенка обнаружились коммуникативные способности. Помогите юному дарованию их развить'
			},
			8: {
				img: '/share/share_math.jpg',
				title: 'Поздравляем!',
				description: 'У вашего ребенка обнаружились логико-математические способности. Помогите юному дарованию их развить'
			},
		}

	},

	allPrerenderRoutes: [ //without dynamic_shares
		'/',
	]

}


data.allPrerenderRoutes = data.allPrerenderRoutes.concat(Object.keys(data.share.dynamic_shares).map(el => '/' + el))

export default data
