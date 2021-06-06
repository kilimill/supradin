export default {
	namespaced: true,
	state: {
		mobile: null,
		testMob: false,
		desktop: window.innerWidth >= 660,
		choice: 'Выберите три способности, которые соответствуют вашему ребенку'
	},
	getters: {
		somevar(state){
			return state.mobile, state.choice
		},
	},
	mutations: {
		classMob(state) {
      state.testMob = true;
    },
		ok(state) {
      state.testMob = false;
    },
		oneChoice(state) {
			state.choice = 'Выберите способность, которая соответствует вашему ребенку'
		},
		startChoice(state) {
			state.choice = 'Выберите три способности, которые соответствуют вашему ребенку'
		}
	},
	actions: {
		mobe({state, getters, commit}) {
			if( window.innerWidth <= 660) {
				state.mobile = true
				getters.somevar
			} else {
				state.mobile =  false
				commit('ok')
				getters.somevar
			}
		},
	}
};
