<template lang='pug'>
	header.header
		.header__inner
			a.header__link(href='http://www.supradyn.ru/kids/?utm_source=letidor&utm_medium=cpm&utm_content=logo&utm_campaign=supradyn_kids_2021' target='_blank' @click="$root.sendGA('external', 'click', 'logo_supradin')")
				img.header__logo(src='@/assets/img/header/logo.png')
			p.header__special СПЕЦПРОЕКТ
			a.header__link(href='https://letidor.ru' target='_blank' @click="$root.sendGA('external', 'click', 'logo_letidor')")
				img.header__img(src='@/assets/img/header/letidor.png')
</template>
