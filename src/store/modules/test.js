import router from "../../router";

export default {
	namespaced: true,
	state: {
		coinTest: 1,
		questions: {
			1: [{
					class: 'test__question--one',
					title: 'Считает быстро и без ошибок',
					img: '<p class="test__question-pictures--one"></p>',
					id: 8,
					skill: 'math'
				},
				{
					class: 'test__question--two',
					title: 'Много читает',
					img: '<p class="test__question-pictures--two"></p>',
					id: 1,
					skill: 'language'
				},
				{

					class: 'test__question--three',
					title: 'Не стесняется людей',
					img: '<p class="test__question-pictures--three"></p>',
					id: 7,
					skill: 'communication'
				},
				{

					class: 'test__question--four',
					title: 'Повторяет мелодии на слух',
					img: '<p class="test__question-pictures--four"></p>',
					id: 2,
					skill: 'music'
				},
				{

					class: 'test__question--five',
					title: 'Любит передразнивать других',
					img: '<p class="test__question-pictures--five"></p>',
					id: 6,
					skill: 'artist'
				},
				{

					class: 'test__question--six',
					title: 'Двигается легко и грациозно',
					img: '<p class="test__question-pictures--six"></p>',
					id: 3,
					skill: 'sport'
				},
				{

					class: 'test__question--seven',
					title: 'Хорошо срисовывает',
					img: '<p class="test__question-pictures--seven"></p>',
					id: 5,
					skill: 'draw'
				},
				{

					class: 'test__question--eight',
					title: 'Собирает головоломки и пазлы',
					img: '<p class="test__question-pictures--eight"></p>',
					id: 4,
					skill: 'vitalization'
				},
			],
			2: [{
					class: 'test__question--one',
					title: 'Любит размышлять на разные темы',
					img: '<p class="test__question-pictures--one"></p>',
					id: 8,
					skill: 'math'
				},
				{
					class: 'test__question--two',
					title: 'Обладает хорошей памятью',
					img: '<p class="test__question-pictures--two"></p>',
					id: 1,
					skill: 'language'
				},
				{

					class: 'test__question--three',
					title: 'Доброжелателен с окружающими',
					img: '<p class="test__question-pictures--three"></p>',
					id: 7,
					skill: 'communication'
				},
				{

					class: 'test__question--four',
					title: 'Не фальшивит, когда поёт',
					img: '<p class="test__question-pictures--four"></p>',
					id: 2,
					skill: 'music'
				},
				{

					class: 'test__question--five',
					title: 'Часто кривляется перед зеркалом',
					img: '<p class="test__question-pictures--five"></p>',
					id: 6,
					skill: 'artist'
				},
				{

					class: 'test__question--six',
					title: 'Предпочитает подвижные игры',
					img: '<p class="test__question-pictures--six"></p>',
					id: 3,
					skill: 'sport'
				},
				{

					class: 'test__question--seven',
					title: 'Рассматривает картинки в книжках',
					img: '<p class="test__question-pictures--seven"></p>',
					id: 5,
					skill: 'draw'
				},
				{

					class: 'test__question--eight',
					title: 'Ориентируется по карте',
					img: '<p class="test__question-pictures--eight"></p>',
					id: 4,
					skill: 'vitalization'
				},
			],


			3: [{
					class: 'test__question--one',
					title: 'Часто задает вопросы',
					img: '<p class="test__question-pictures--one"></p>',
					id: 8,
					skill: 'math'
				},
				{
					class: 'test__question--two',
					title: 'Сочиняет истории',
					img: '<p class="test__question-pictures--two"></p>',
					id: 1,
					skill: 'language'
				},
				{

					class: 'test__question--three',
					title: 'Высказывает свою точку зрения',
					img: '<p class="test__question-pictures--three"></p>',
					id: 7,
					skill: 'communication'
				},
				{

					class: 'test__question--four',
					title: 'Часто танцует',
					img: '<p class="test__question-pictures--four"></p>',
					id: 2,
					skill: 'music'
				},
				{

					class: 'test__question--five',
					title: 'Увлекательно рассказывает истории',
					img: '<p class="test__question-pictures--five"></p>',
					id: 6,
					skill: 'artist'
				},
				{

					class: 'test__question--six',
					title: 'Любит спорт',
					img: '<p class="test__question-pictures--six"></p>',
					id: 3,
					skill: 'sport'
				},
				{

					class: 'test__question--seven',
					title: 'Делает подарки своими руками',
					img: '<p class="test__question-pictures--seven"></p>',
					id: 5,
					skill: 'draw'
				},
				{

					class: 'test__question--eight',
					title: 'Запоминает информацию с помощью картинок',
					img: '<p class="test__question-pictures--eight"></p>',
					id: 4,
					skill: 'vitalization'
				},
			],


			4: [{
					class: 'test__question--one',
					title: 'Умеет играть в шахматы или шашки',
					img: '<p class="test__question-pictures--one"></p>',
					id: 8,
					skill: 'math'
				},
				{
					class: 'test__question--two',
					title: 'Грамотно пишет',
					img: '<p class="test__question-pictures--two"></p>',
					id: 1,
					skill: 'language'
				},
				{

					class: 'test__question--three',
					title: 'Лидер в детском коллективе',
					img: '<p class="test__question-pictures--three"></p>',
					id: 7,
					skill: 'communication'
				},
				{

					class: 'test__question--four',
					title: 'Любит слушать концерты',
					img: '<p class="test__question-pictures--four"></p>',
					id: 2,
					skill: 'music'
				},
				{

					class: 'test__question--five',
					title: 'Быстро запоминает стихи',
					img: '<p class="test__question-pictures--five"></p>',
					id: 6,
					skill: 'artist'
				},
				{

					class: 'test__question--six',
					title: 'Бегает быстрее сверстников',
					img: '<p class="test__question-pictures--six"></p>',
					id: 3,
					skill: 'sport'
				},
				{

					class: 'test__question--seven',
					title: 'Вышивает, шьет или вяжет',
					img: '<p class="test__question-pictures--seven"></p>',
					id: 5,
					skill: 'draw'
				},
				{

					class: 'test__question--eight',
					title: 'Замечает детали',
					img: '<p class="test__question-pictures--eight"></p>',
					id: 4,
					skill: 'vitalization'
				},
			],


			5: [{
					class: 'test__question--one',
					title: 'Доказывает свою точку зрения',
					img: '<p class="test__question-pictures--one"></p>',
					id: 8,
					skill: 'math'
				},
				{
					class: 'test__question--two',
					title: 'Копирует чужие акценты',
					img: '<p class="test__question-pictures--two"></p>',
					id: 1,
					skill: 'language'
				},
				{

					class: 'test__question--three',
					title: 'Умеет слушать собеседника',
					img: '<p class="test__question-pictures--three"></p>',
					id: 7,
					skill: 'communication'
				},
				{

					class: 'test__question--four',
					title: 'Сочиняет собственные мелодии',
					img: '<p class="test__question-pictures--four"></p>',
					id: 2,
					skill: 'music'
				},
				{

					class: 'test__question--five',
					title: 'Любит ходить на представления',
					img: '<p class="test__question-pictures--five"></p>',
					id: 6,
					skill: 'artist'
				},
				{

					class: 'test__question--six',
					title: 'Может долго гулять',
					img: '<p class="test__question-pictures--six"></p>',
					id: 3,
					skill: 'sport'
				},
				{

					class: 'test__question--seven',
					title: 'Замечает красоту вокруг',
					img: '<p class="test__question-pictures--seven"></p>',
					id: 5,
					skill: 'draw'
				},
				{

					class: 'test__question--eight',
					title: 'Хорошо помнит лица',
					img: '<p class="test__question-pictures--eight"></p>',
					id: 4,
					skill: 'vitalization'
				},
			],

			6: [{
					class: 'test__question--one',
					title: 'Любит экспериментировать',
					img: '<p class="test__question-pictures--one"></p>',
					id: 8,
					skill: 'math'
				},
				{
					class: 'test__question--two',
					title: 'Запоминает иностранные слова',
					img: '<p class="test__question-pictures--two"></p>',
					id: 1,
					skill: 'language'
				},
				{

					class: 'test__question--three',
					title: 'Соблюдает правила поведения',
					img: '<p class="test__question-pictures--three"></p>',
					id: 7,
					skill: 'communication'
				},
				{

					class: 'test__question--four',
					title: 'Хорошее чувство ритма',
					img: '<p class="test__question-pictures--four"></p>',
					id: 2,
					skill: 'music'
				},
				{

					class: 'test__question--five',
					title: 'Воображает себя героем мультика',
					img: '<p class="test__question-pictures--five"></p>',
					id: 6,
					skill: 'artist'
				},
				{

					class: 'test__question--six',
					title: 'Хорошо катается на велосипеде',
					img: '<p class="test__question-pictures--six"></p>',
					id: 3,
					skill: 'sport'
				},
				{

					class: 'test__question--seven',
					title: 'Лепит из пластилина или глины',
					img: '<p class="test__question-pictures--seven"></p>',
					id: 5,
					skill: 'draw'
				},
				{

					class: 'test__question--eight',
					title: 'Может объяснить дорогу',
					img: '<p class="test__question-pictures--eight"></p>',
					id: 4,
					skill: 'vitalization'
				},
			],
		},
		resultCoins: null,
		resultName: '',
		pointsSkill: [
			{
				name: 'language',
				point: 0,
				number: 1
			},
			{
				name: 'music',
				point: 0,
				number: 2
			},
			{
				name: 'sport',
				point: 0,
				number: 3
			},
			{
				name: 'vitalization',
				point: 0,
				number: 4
			},
			{
				name: 'draw',
				point: 0,
				number: 5
			},
			{
				name: 'artist',
				point: 0,
				number: 6
			},
			{
				name: 'communication',
				point: 0,
				number: 7
			},
			{
				name: 'math',
				point: 0,
				number: 8
			},
		],
	},
	mutations: {
		coinsPlus(state) {
			state.coinTest++
		},
		sortt(state) {
			let sortable = state.pointsSkill.slice(0);
			sortable.sort(function (a, b) {
				return b.point - a.point
			})
			function assignment() {
				state.resultCoins = sortable[0].number
				state.resultName = sortable[0].name
			}
			if (sortable[0].point === sortable[1].point) {
				state.coinTest++
				if (state.coinTest == 7) {
					router.push({
						name: 'Result'
					});
					assignment()
				}
			} else {
				router.push({
					name: 'Result'
				});
				assignment()
			}
		},
		pointPlus(state, id) {
			if (id === 1) {
				state.pointsSkill[0].point++;
			} else if (id === 2) {
				state.pointsSkill[1].point++;
			} else if (id === 3) {
				state.pointsSkill[2].point++;
			} else if (id === 4) {
				state.pointsSkill[3].point++;
			} else if (id === 5) {
				state.pointsSkill[4].point++;
			} else if (id === 6) {
				state.pointsSkill[5].point++;
			} else if (id === 7) {
				state.pointsSkill[6].point++;
			} else if (id === 8) {
				state.pointsSkill[7].point++;
			}
		},
		reset(state) {
			state.pointsSkill.forEach(item => {
				item.point = 0
			});
			state.coinTest = 1
		}
	},
	actions: {
		testMath({
			commit,
		}, id) {
				commit('pointPlus', id)
		},
		plus({
			commit,
			state
		}) {
			if (state.coinTest < 5) {
				commit('coinsPlus')
			} else {
				commit('sortt')
			}
		},
	}
}
