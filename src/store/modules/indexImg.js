export default {
	namespaced: true,
	state: {
		imgPoint: 1,
		packImgPoint: 1,
		activeImg: true,
		activeImgPack: true,
		interval: null,
		intervalPack: null,
		images: {
			1: {
				img: require('@/assets/img/index/index-img-1.png'),
				imgMob: require('@/assets/img/index/index-img-1-mob.png'),
				class: 'index__img-one'
			},
			2: {
				img: require('@/assets/img/index/index-img-2.png'),
				imgMob: require('@/assets/img/index/index-img-2-mob.png'),
				class: 'index__img-two'
			},
			3: {
				img: require('@/assets/img/index/index-img-3.png'),
				imgMob: require('@/assets/img/index/index-img-3-mob.png'),
				class: 'index__img-three'
			},
			4: {
				img: require('@/assets/img/index/index-img-4.png'),
				imgMob: require('@/assets/img/index/index-img-4-mob.png'),
				class: 'index__img-four'
			},
		},
		packImg: {
			1: {
				src1: require('@/assets/img/footer/supradin-immuno.png'),
				src2: require('@/assets/img/footer/supradin-magic.png'),
				href1: '#',
				href2: 'https://uteka.ru/product/supradin-kids-super-mishki-334476/?utm_source=vendor_let[…]Bayer&utm_term=pack_magicbeans&utm_campaign=vendor_supradyn_kids',
				GA1: 'pachka_immuno',
				GA2: 'pachka_volshebnie_drazhe'
			},
			2: {
				src1: require('@/assets/img/footer/supradin-fish.png'),
				src2: require('@/assets/img/footer/range_hor.png'),
				href1: 'https://uteka.ru/product/supradin-kids-rybki-331015/?utm_source=vendor_letidor_PH[…]dor_Bayer&utm_term=quiz_fishes&utm_campaign=vendor_supradyn_kids',
				href2: '#',
				GA1: 'pachka_rybki',
				GA2: 'pachka_mishki'
			},
		},
		packImgMob: {
			1: {
				src: require('@/assets/img/footer/supradin-immuno.png'),
				href: '#',
				GA: 'pachka_immuno',
			},
			2: {
				src: require('@/assets/img/footer/supradin-magic.png'),
				href: 'https://uteka.ru/product/supradin-kids-super-mishki-334476/?utm_source=vendor_let[…]Bayer&utm_term=pack_magicbeans&utm_campaign=vendor_supradyn_kids',
				GA: 'pachka_volshebnie_drazhe',
			},
			3: {
				src: require('@/assets/img/footer/supradin-fish.png'),
				href: 'https://uteka.ru/product/supradin-kids-rybki-331015/?utm_source=vendor_letidor_PH[…]dor_Bayer&utm_term=quiz_fishes&utm_campaign=vendor_supradyn_kids',
				GA: 'pachka_rybki',
			},
			4: {
				src: require('@/assets/img/footer/range_hor.png'),
				href: '#',
				GA: 'pachka_mishki',
			},
		}
	},

	mutations: {
		pointPackPlus(state) {
			state.intervalPack = setInterval(() => {
				setTimeout(() => {
					if (state.activeImgPack === false) {
						state.activeImgPack = true;
					}
				}, 200)
				if (state.packImgPoint === 1) {

					state.packImgPoint++

				} else {
					state.packImgPoint = 1
				}
				setTimeout(() => {
					state.activeImgPack = false;
				}, 4900)
			}, 6000)
		},
		pointPlus(state) {
			state.interval = setInterval(() => {
        setTimeout(() => {
          if (state.activeImg === false) {
            state.activeImg = true;
          }
        }, 200)
        if(state.imgPoint <= 3) {
          state.imgPoint++
        } else {
          state.imgPoint = 1
        }
        setTimeout(() => {
          state.activeImg = false;
        }, 3900);
      }, 5000);

		},
		clear(state) {
			clearInterval(state.interval);
			clearInterval(state.intervalPack);
			state.imgPoint = 4;
			state.packImgPoint = 1;
			state.activeImgPack = true;
		},
		check(state) {
			state.activeImg = true;
			state.activeImgPack = true;
			setTimeout(() => {
				state.activeImg = false;
			}, 4000);
			setTimeout(() => {
				state.activeImgPack = false;
			}, 5000);
		}
	},
	actions: {
		startAnimImg({commit}) {
			commit('pointPlus');
			commit('pointPackPlus');
			commit('check');
		}
	}
}
